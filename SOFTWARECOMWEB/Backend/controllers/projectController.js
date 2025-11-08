import Project from "../models/Project.js";

// ✅ Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
};

// ✅ Get single project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error fetching project", error });
  }
};

// ✅ Create new project
export const createProject = async (req, res) => {
  try {
    const { title, category, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const newProject = new Project({
      title,
      category,
      description,
      image,
    });

    await newProject.save();
    res.status(201).json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error });
  }
};

// ✅ Update project
export const updateProject = async (req, res) => {
  try {
    const { title, category, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedData = { title, category, description };
    if (image) updatedData.image = image;

    const project = await Project.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });

    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ message: "Project updated successfully", project });
  } catch (error) {
    res.status(500).json({ message: "Error updating project", error });
  }
};

// ✅ Delete project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error });
  }
};
