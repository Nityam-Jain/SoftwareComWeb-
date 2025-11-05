const Job = require("../models/job");

// Create a new job
const createJob = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json({ message: "Job created successfully", newJob });
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
  }
};

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
};

// Edit a job by ID
const editJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedJob)
      return res.status(404).json({ message: "Job not found" });

    res.status(200).json({ message: "Job updated successfully", updatedJob });
  } catch (error) {
    res.status(500).json({ message: "Error updating job", error });
  }
};

// Delete a job by ID
const deleteJob = async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);

    if (!deletedJob)
      return res.status(404).json({ message: "Job not found" });

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job", error });
  }
};

// Toggle job status (Active/Inactive)
const toggleJobStatus = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    job.isActive = !job.isActive;
    await job.save();

    res.status(200).json({ message: "Job status updated", job });
  } catch (error) {
    res.status(500).json({ message: "Error updating job status", error });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  editJob,
  deleteJob,
  toggleJobStatus,
};
