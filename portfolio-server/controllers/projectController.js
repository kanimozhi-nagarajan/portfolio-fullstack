import Project from "../models/Project.js";

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const createProject = async (req, res) => {
  try {
    const { title, description, tech, github, demo } = req.body;

    const project = new Project({
      title,
      description,
      tech: tech.split(","),
      github,
      demo,
      image: req.file.path, // ✅ Cloudinary URL
    });

    await project.save();

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { getProjects, createProject };
