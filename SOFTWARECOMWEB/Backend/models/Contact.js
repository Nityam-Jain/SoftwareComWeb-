const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    service: String,
    message: String,
    status: {
      type: String,
      enum: ["pending", "solved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
