import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, X } from "lucide-react";

export default function AdminContactTable() {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const contactsPerPage = 10;

    // ✅ Fetch Contact Data
    const fetchContacts = async () => {
        try {
            const res = await axios.get("http://localhost:5001/contact");
            setContacts(res.data);
        } catch (err) {
            console.error("Error fetching contacts:", err);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    // ✅ Handle Delete Query
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this query?")) {
            try {
                await axios.delete(`http://localhost:5001/contact/${id}`);
                alert("Query deleted successfully!");
                fetchContacts(); // 🔄 Refresh data
            } catch (error) {
                console.error("Error deleting contact:", error);
                alert("Failed to delete query. Try again.");
            }
        }
    };

    // ✅ Toggle Status Handler
    const handleStatusToggle = async (id) => {
        try {
            const updated = await axios.patch(`http://localhost:5001/contact/${id}/status`);
            setContacts((prevContacts) =>
                prevContacts.map((contact) =>
                    contact._id === id ? { ...contact, status: "solved" } : contact
                )
            );
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status. Try again.");
        }
    };


    // ✅ Modal Logic
    const openModal = (contact) => {
        setSelectedContact(contact);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedContact(null);
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

    // ✅ Pagination Logic
    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);
    const totalPages = Math.ceil(contacts.length / contactsPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="p-4 sm:p-6">
            <h1 className="text-xl font-bold mb-4">Contact Queries</h1>

            {/* ✅ Desktop Table View */}
            <div className="hidden md:block">
                <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-[#e6eefc] text-gray-700 font-semibold">
                        <tr>
                            <th className="p-3 text-left">Sr.</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Service</th>
                            <th className="p-3 text-left">Message</th>
                            <th className="p-3 text-left">Submitted On</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="bg-[#f7fbff]">
                        {currentContacts.map((item, index) => (
                            <tr key={item._id} className="border-b border-gray-200">
                                <td className="p-3">{indexOfFirstContact + index + 1}</td>

                                <td
                                    className="p-3 cursor-pointer"
                                    onClick={() => openModal(item)}
                                >
                                    {item.name}
                                </td>

                                <td className="p-3">{item.phone}</td>

                                <td
                                    className="p-3 cursor-pointer "
                                    onClick={() => openModal(item)}
                                >
                                    {item.email}
                                </td>

                                <td className="p-3">{item.service}</td>

                                <td className="p-3 max-w-[200px] truncate">{item.message}</td>

                                <td className="p-3">{formatDate(item.createdAt)}</td>

                                <td className="p-3">
                                    <span
                                        className={`px-3 py-1 text-sm rounded-full ${item.status === "solved"
                                                ? "bg-green-200 text-green-700 cursor-not-allowed"
                                                : "bg-yellow-200 text-yellow-700 cursor-pointer hover:bg-yellow-300"
                                            }`}
                                        onClick={() => item.status !== "solved" && handleStatusToggle(item._id)}
                                    >
                                        {item.status === "solved" ? "Solved" : "Pending"}
                                    </span>

                                </td>


                                <td className="p-3">
                                    <button
                                        className="p-2 bg-red-100 text-red-600 rounded-lg"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* ✅ Pagination Controls */}
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

            {/* ✅ Popup Modal */}
            {isModalOpen && selectedContact && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
                    <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-center">Contact Details</h2>

                        <p><span className="font-semibold">Name:</span> {selectedContact.name}</p>
                        <p><span className="font-semibold">Phone:</span> {selectedContact.phone}</p>
                        <p><span className="font-semibold">Email:</span> {selectedContact.email}</p>
                        <p><span className="font-semibold">Service:</span> {selectedContact.service}</p>
                        <p><span className="font-semibold">Submitted On:</span> {formatDate(selectedContact.createdAt)}</p>
                        <p className="mt-4"><span className="font-semibold">Message:</span></p>
                        <p className="bg-gray-100 p-3 rounded-md mt-1 text-gray-700 whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
