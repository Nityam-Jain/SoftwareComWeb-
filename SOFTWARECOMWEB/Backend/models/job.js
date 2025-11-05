const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true }, // Full-time, Part-time, etc.
    location: { type: String, required: true }, // Remote, Indore, etc.
    department: { type: String, required: true }, // Development, Design, etc.
    experience: { type: String, required: true }, // 1-3 years, etc.
    isActive: { type: Boolean, default: true }, // Show/hide jobs
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
