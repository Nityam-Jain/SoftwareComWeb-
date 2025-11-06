import express from "express";
import multer from "multer";
import path from "path";
import { submitApplication, getAllApplications} from "../controllers/applicationController.js";

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where resumes will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage });

// POST route for submitting job applications
router.post("/apply", upload.single("resume"), submitApplication);

// ✅ GET route for fetching all applications (Admin Panel)
router.get("/applications", getAllApplications);

export default router;
