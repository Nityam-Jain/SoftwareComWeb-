import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    desc: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    readTime: {
      type: String,   
      required: true, 
      trim: true
    },

    date: {
      type: String,
      default: () => new Date().toLocaleDateString(),
    },

    image: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      default: "BinaryLogix",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
