const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path =require ("path");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const adminRoute = require("./routes/adminRoutes");
const jobRoutes = require("./routes/carrerRoutes") 
const visitorRoutes = require("./routes/visitorRoutes");
const applicationRoutes = require("./routes/applicationRoutes")
const blogRoutes = require("./routes/blogRoutes")
const projectRoutes = require("./routes/projectRoutes")
const app = express();
const PORT = process.env.PORT || 5001;

// // ✅ CORS Middleware - Fixes preflight issues
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE","PATCH", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Server Running and DB Connected!");
});

// ✅ Contact Form Routes
app.use("/api/contact", contactRoutes);
app.use("/admin", adminRoute);
app.use("/api", jobRoutes);
app.use("/api", applicationRoutes);
app.use("/api/visitor", visitorRoutes);
// Routes
app.use("/api/blogs", blogRoutes);
// Routes
app.use("/api/projects", projectRoutes);
// ✅ Catch-all Route for 404 (Optional but Clean)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on ${PORT}`);
});
