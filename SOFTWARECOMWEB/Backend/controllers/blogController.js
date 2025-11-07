import Blog from "../models/Blog.js";

// ➕ Add new blog post
export const createBlog = async (req, res) => {
  try {
    const blogData = {
      title: req.body.title,
      desc: req.body.desc,
      category: req.body.category,
      author: req.body.author || "BinaryLogix",
      featured: req.body.featured === "true",
      image: req.file ? `/uploads/${req.file.filename}` : null, // ✅ handle file path
    };

    const blog = new Blog(blogData);
    await blog.save();
    res.status(201).json({ success: true, message: "Blog created", blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// 📚 Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ⭐ Get featured posts (for top carousel)
export const getFeaturedBlogs = async (req, res) => {
  try {
    const featuredBlogs = await Blog.find({ featured: true }).limit(5);
    res.status(200).json({ success: true, featuredBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔍 Get single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✏️ Update blog
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, message: "Updated successfully", blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ❌ Delete blog
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
