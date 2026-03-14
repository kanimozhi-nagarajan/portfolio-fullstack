import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Authentication" },
      { name: "PWA" },
    ],
  },
];
