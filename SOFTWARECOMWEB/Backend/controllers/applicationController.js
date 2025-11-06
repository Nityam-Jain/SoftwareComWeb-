import JobApplication from "../models/JobApplication.js";

export const submitApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      portfolio,
      linkedin,
      github,
      jobTitle,
      department,
      location,
      experience,
    } = req.body;

    const resume = req.file ? req.file.filename : null;

    if (!resume) {
      return res.status(400).json({ message: "Resume upload is required" });
    }

    const newApplication = new JobApplication({
      fullName,
      email,
      phone,
      portfolio,
      linkedin,
      github,
      resume,
      jobTitle,
      department,
      location,
      experience,
    });

    await newApplication.save();
    return res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch all applications (Admin)
export const getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json(applications);
  } catch (error) {
    console.error("❌ Error fetching applications:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};