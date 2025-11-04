// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const { saveContact,getAllContacts, deleteContact, updateStatus } = require("../controllers/contactController");

// POST Route to save contact form data
router.post("/", saveContact);

//get all data  
router.get("/", getAllContacts);

// DELETE Route to delete a specific contact
router.delete("/:id", deleteContact);

// ✅ Update contact status
router.patch("/:id/status", updateStatus);

module.exports = router;
