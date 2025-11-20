const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getFeaturedBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const upload = require("../middleware/upload");

const router = express.Router();

// Admin endpoints
router.post("/", upload.single("image"), createBlog);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

// Public routes
router.get("/getAllBlogs", getAllBlogs);
router.get("/featured", getFeaturedBlogs);
router.get("/:id", getBlogById);

module.exports = router;
