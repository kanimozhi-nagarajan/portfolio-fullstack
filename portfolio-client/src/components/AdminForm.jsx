import { useRef, useState } from "react";
import { API_URL } from "../config/api";

function AdminForm() {
  const fileRef = useRef();

  const initialState = {
    title: "",
    description: "",
    tech: "",
    github: "",
    demo: "",
    image: "",
  };
  const [project, setProject] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setProject({
      ...project,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", project.title);
    formData.append("description", project.description);
    formData.append("tech", project.tech);
    formData.append("github", project.github);
    formData.append("demo", project.demo);
    formData.append("image", project.image);

    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/api/projects`, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: formData,
    });

    if (res.ok) {
      alert("Project added successfully!");
      setProject(initialState);

      if (fileRef.current) {
        fileRef.current.value = "";
      }
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Add Project</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 p-8 rounded-xl border border-sky-500 space-y-6"
        >
          <input
            type="text"
            name="title"
            value={project.title}
            placeholder="Project Title"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-slate-800"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            type="text"
            name="tech"
            value={project.tech}
            placeholder="Tech stack (comma separated)"
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            type="text"
            name="github"
            value={project.github}
            placeholder="GitHub link"
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            type="text"
            name="demo"
            value={project.demo}
            placeholder="Live demo link"
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />
          <input
            type="file"
            name="image"
            ref={fileRef}
            onChange={(e) =>
              setProject({ ...project, image: e.target.files[0] })
            }
          />

          <button className="w-full bg-sky-500 py-3 rounded hover:bg-sky-600">
            Add Project
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminForm;
