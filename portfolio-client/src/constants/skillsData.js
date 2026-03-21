import { FaGitAlt, FaJava, FaPython, FaDatabase } from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiJest,
  SiPostman,
  SiSwagger,
  SiJira,
  SiJupyter,
  SiMysql,
} from "react-icons/si";

export const skillsData = [
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
    category: "Database",
    skills: [
      { name: "MySql", icon: SiMysql },
      { name: "MSSQL", icon: FaDatabase },
    ],
  },
  {
    category: "Testing & API-Docs",
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "SuperTest" },
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
