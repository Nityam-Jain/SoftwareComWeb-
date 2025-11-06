import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Download } from "lucide-react";

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/applications")
      .then((res) => {
        setApplications(res.data);
        setFilteredApps(res.data);
      })
      .catch((err) => console.error("Error fetching applications:", err));
  }, []);

  // Handle Search Filter
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = applications.filter((app) =>
      app.fullName.toLowerCase().includes(query)
    );
    setFilteredApps(filtered);
    setCurrentPage(1); // Reset to first page
  };

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredApps.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredApps.length / rowsPerPage);

  const handleViewDetails = (app) => {
    setSelectedApp(app);
  };

  const handleCloseModal = () => {
    setSelectedApp(null);
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h3 className="text-3xl font-semibold text-gray-800 mb-6">
        Job Applications
      </h3>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by applicant name..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full sm:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500">No applications found.</p>
      ) : (
        <>
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white border border-gray-200">
            <table className="min-w-full text-sm table-auto">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 uppercase text-sm font-bold">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Position</th>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3">Experience</th>
                  <th className="px-4 py-3">Applied On</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {currentRows.map((app, index) => (
                  <tr
                    key={app._id}
                    className="hover:bg-gray-100 transition border-b border-gray-200"
                  >
                    <td className="px-4 py-3">
                      {(currentPage - 1) * rowsPerPage + (index + 1)}
                    </td>
                    <td className="px-4 py-3 font-medium">{app.fullName}</td>
                    <td className="px-4 py-3">{app.email}</td>
                    <td className="px-4 py-3">{app.phone}</td>
                    <td className="px-4 py-3">{app.jobTitle}</td>
                    <td className="px-4 py-3">{app.department}</td>
                    <td className="px-4 py-3">
                      {app.experience ? `${app.experience} years` : "N/A"}
                    </td>
                    <td className="px-4 py-3">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 flex items-center gap-3">
                      <button
                        onClick={() => handleViewDetails(app)}
                        className="text-blue-500 hover:text-blue-700"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      {app.resume && (
                        <a
                          href={`http://localhost:5001/uploads/${app.resume}`}
                          download
                          className="text-green-500 hover:text-green-700"
                          title="Download Resume"
                        >
                          <Download size={18} />
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4 gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Modal to show full details */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-sm ">
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
            >
              ✕
            </button>

            <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Applicant Details
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <p>
                <strong>Name:</strong> {selectedApp.fullName}
              </p>
              <p>
                <strong>Email:</strong> {selectedApp.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedApp.phone}
              </p>

              <p>
                <strong>Portfolio:</strong>{" "}
                {selectedApp.portfolio ? (
                  <a
                    href={selectedApp.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                ) : (
                  "N/A"
                )}
              </p>

              <p>
                <strong>LinkedIn:</strong>{" "}
                {selectedApp.linkedin ? (
                  <a
                    href={selectedApp.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                ) : (
                  "N/A"
                )}
              </p>

              <p>
                <strong>GitHub:</strong>{" "}
                {selectedApp.github ? (
                  <a
                    href={selectedApp.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                ) : (
                  "N/A"
                )}
              </p>

              <p>
                <strong>Position:</strong> {selectedApp.jobTitle}
              </p>
              <p>
                <strong>Department:</strong> {selectedApp.department}
              </p>
              <p>
                <strong>Experience:</strong> {selectedApp.experience} years
              </p>

              <p className="col-span-2">
                <strong>Resume:</strong>{" "}
                {selectedApp.resume ? (
                  <a
                    href={`http://localhost:5001/uploads/${selectedApp.resume}`}
                    download
                    className="text-blue-600 hover:underline"
                  >
                    Download Resume
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminApplications;
