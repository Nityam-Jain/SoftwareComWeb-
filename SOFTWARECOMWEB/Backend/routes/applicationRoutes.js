const express = require("express");
const multer = require("multer");
const path = require("path");
const { submitApplication, getAllApplications } = require("../controllers/applicationController");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// POST route for submitting job applications
router.post("/apply", upload.single("resume"), submitApplication);

// GET route for fetching all applications
router.get("/applications", getAllApplications);

module.exports = router;
