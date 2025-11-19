import express from "express";
import {
  createBlog,
  getAllBlogs,
  getFeaturedBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import upload from "../middleware/upload.js"
const router = express.Router();

// Admin or CMS endpoints
router.post("/", upload.single("image"), createBlog);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

// Public routes
router.get("/", getAllBlogs);
router.get("/featured", getFeaturedBlogs);
router.get("/:id", getBlogById);

export default router;
