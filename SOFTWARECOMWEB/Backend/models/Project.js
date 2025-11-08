import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Website/App Development",
        "UI/UX Design",
        "Graphic Design",
        "Logo",
      ],
    },
    image: {
      type: String, // Image URL or file path
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
