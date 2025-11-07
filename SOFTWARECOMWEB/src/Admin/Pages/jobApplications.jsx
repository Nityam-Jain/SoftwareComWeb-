import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Download, X } from "lucide-react";

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

  // ✅ Handle Search Filter
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = applications.filter((app) =>
      app.fullName.toLowerCase().includes(query)
    );
    setFilteredApps(filtered);
    setCurrentPage(1);
  };

  // ✅ Pagination Logic
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
    if (pageNum > 0 && pageNum <= totalPages) setCurrentPage(pageNum);
  };

  // ✅ Format Date Helper
  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl font-bold mb-4">Job Applications</h1>

      {/* ✅ Search Bar */}
      <div className="mb-4 flex justify-start">
        <input
          type="text"
          placeholder="Search by applicant name..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ✅ Table Section */}
      <div className="hidden md:block">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-[#e6eefc] text-gray-700 font-semibold">
            <tr>
              <th className="p-3 text-left">Sr.</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Experience</th>
              <th className="p-3 text-left">Applied On</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-[#f7fbff]">
            {currentRows.map((app, index) => (
              <tr key={app._id} className="border-b border-gray-200">
                <td className="p-3">{indexOfFirstRow + index + 1}</td>
                <td
                  className="p-3 "
                  // onClick={() => handleViewDetails(app)}
                >
                  {app.fullName}
                </td>
                <td
                  className="p-3"
                  // onClick={() => handleViewDetails(app)}
                >
                  {app.email}
                </td>
                <td className="p-3">{app.phone}</td>
                <td className="p-3">{app.jobTitle}</td>
                <td className="p-3">{app.department}</td>
                <td className="p-3">
                  {app.experience ? `${app.experience} years` : "N/A"}
                </td>
                <td className="p-3">{formatDate(app.createdAt)}</td>
                <td className="p-3 flex items-center gap-3">
                  <button
                    onClick={() => handleViewDetails(app)}
                    className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition"
                    title="View Details"
                  >
                    <Eye size={18} />
                  </button>
                  {app.resume && (
                    <a
                      href={`http://localhost:5001/uploads/${app.resume}`}
                      download
                      className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition"
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

        {/* ✅ Pagination */}
        <div className="flex justify-center items-center gap-3 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* ✅ Modal View */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Applicant Details
            </h2>

            <p><span className="font-semibold">Name:</span> {selectedApp.fullName}</p>
            <p><span className="font-semibold">Email:</span> {selectedApp.email}</p>
            <p><span className="font-semibold">Phone:</span> {selectedApp.phone}</p>
            <p><span className="font-semibold">Position:</span> {selectedApp.jobTitle}</p>
            <p><span className="font-semibold">Department:</span> {selectedApp.department}</p>
            <p><span className="font-semibold">Experience:</span> {selectedApp.experience || "N/A"} years</p>
            <p><span className="font-semibold">Applied On:</span> {formatDate(selectedApp.createdAt)}</p>

            <p className="mt-4">
              <span className="font-semibold">Portfolio:</span>{" "}
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
              <span className="font-semibold">LinkedIn:</span>{" "}
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
              <span className="font-semibold">GitHub:</span>{" "}
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

            <p className="mt-4">
              <span className="font-semibold">Resume:</span>{" "}
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
      )}
    </div>
  );
};

export default AdminApplications;
