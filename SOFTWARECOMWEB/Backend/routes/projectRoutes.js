const express = require("express");
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const upload = require("../middleware/upload");

const router = express.Router();

// Routes
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", upload.single("image"), createProject);
router.put("/:id", upload.single("image"), updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
