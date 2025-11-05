const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const adminRoute = require("./routes/adminRoutes");
const jobRoutes = require("./routes/carrerRoutes") 
const app = express();
const PORT = process.env.PORT || 5001;

// ✅ CORS Middleware - Fixes preflight issues
app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE","PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

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
app.use("/contact", contactRoutes);
app.use("/admin", adminRoute);
app.use("/api", jobRoutes);

// ✅ Catch-all Route for 404 (Optional but Clean)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on ${PORT}`);
});
