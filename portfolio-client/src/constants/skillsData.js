import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython } from "react-icons/fa";

import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiJsonwebtokens,
  SiJest,
  SiPostman,
  SiSwagger,
  SiJira,
  SiJupyter,
} from "react-icons/si";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "HTML5" },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "MS SQL" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    category: "Auth & Security",
    skills: [
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Google Sign-In" },
      { name: "RBAC" },
    ],
  },
  {
    category: "Testing",
    skills: [{ name: "Jest", icon: SiJest }, { name: "SuperTest" }],
  },
  {
    category: "API & Docs",
    skills: [
      { name: "Swagger", icon: SiSwagger },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", icon: FaGitAlt },
      { name: "VS Code" },
      { name: "JIRA", icon: SiJira },
      { name: "Jupyter Notebook", icon: SiJupyter },
      { name: "Eclipse" },
    ],
  },
];
