// controllers/contactController.js
const Contact = require("../models/Contact");

// POST /contact
exports.saveContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // ✅ Basic validation
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      service,
      message,
    });

    const savedContact = await newContact.save();
    res.status(201).json({
      message: "Contact form submitted successfully!",
      data: savedContact,
    });
  } catch (error) {
    console.error("❌ Error saving contact:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Fetch all contacts
exports.getAllContacts = async (req, res) => {
  try {
    // console.log("📥 GET /getAllContacts API HIT");

    const contacts = await Contact.find().sort({ createdAt: -1 });

    // console.log("📤 Contacts fetched from DB:", contacts);

    res.status(200).json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);

    res.status(500).json({ 
      message: "Error fetching contacts", 
      error 
    });
  }
};


// DELETE /contact/:id
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({
      message: "Contact deleted successfully",
      data: deletedContact,
    });
  } catch (error) {
    console.error("❌ Error deleting contact:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Update status controller
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // ✅ Only allow status change if it's still pending
    if (contact.status === "solved") {
      return res.status(400).json({ message: "Status already solved" });
    }

    contact.status = "solved";
    await contact.save();

    res.status(200).json({ message: "Status updated to solved", contact });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
};
