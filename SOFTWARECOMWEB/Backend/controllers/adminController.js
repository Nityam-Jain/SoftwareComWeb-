const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

// ADMIN LOGIN CONTROLLER
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Return success (JWT can be added later)
    res.status(200).json({ message: "Login successful", adminId: admin._id });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
