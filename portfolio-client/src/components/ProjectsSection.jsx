import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Loader from "./Loader";
import { API_URL } from "../config/api";
import TypingText from "./TypingText";

function ProjectsSection() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <section className=" text-white py-1">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400 font-mono">
          &gt; <TypingText text="My work" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#020617] rounded-xl overflow-hidden border border-sky-400
transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-2 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-sky-500/20 text-sky-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm bg-sky-500 px-4 py-2 rounded hover:bg-sky-600 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-sm border border-sky-400 px-4 py-2 rounded hover:bg-sky-500 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
