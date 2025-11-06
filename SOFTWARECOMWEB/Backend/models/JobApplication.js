import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    portfolio: { type: String },
    linkedin: { type: String },
    github: { type: String },
    resume: { type: String, required: true }, // Stored as filename
    jobTitle: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    experience: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("JobApplication", jobApplicationSchema);
