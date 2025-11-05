const express = require("express");
const {
  createJob,
  getAllJobs,
  editJob,
  deleteJob,
  toggleJobStatus,
} = require("../controllers/careerController");

const router = express.Router();

// Routes
router.post("/jobs", createJob);               // Create a new job
router.get("/jobs", getAllJobs);               // Get all jobs
router.put("/jobs/:id", editJob);              // Edit a job by ID
router.delete("/jobs/:id", deleteJob);         // Delete job by ID
router.put("/jobs/:id/toggle", toggleJobStatus); // Toggle status (active/inactive)

module.exports = router;
