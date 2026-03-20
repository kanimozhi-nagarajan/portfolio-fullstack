import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

function Hero() {
  return (
    <section className=" text-white py-1">
      <div className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-10 items-center ">
        {/* Text Section */}

        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hello, I'm Kanimozhi
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="text-2xl text-sky-400 mt-4"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed"
          >
            I began my professional journey as an educator where I developed
            strong communication, mentoring, and problem-solving skills. Over
            time, my curiosity for technology led me into software development
            where I now build modern full-stack applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/KANIMOZHI_NAGARAJAN_MERN_STACK_DEVELOPER_RESUME.pdf"
              download
              className="inline-block bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600 transition font-semibold"
            >
              RESUME
            </a>
            <a
              href="#projects"
              className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-sky-400 px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition"
            >
              Message Me
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {/* <div className="flex gap-6 mt-6 "> */}
            <a
              href="https://github.com/kanimozhi-nagarajan"
              target="_blank"
              className="text-2xl hover:text-sky-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kanimozhi-nagarajan-1a05882ba/"
              target="_blank"
              className="text-2xl hover:text-sky-400 transition"
            >
              <FaLinkedin />
            </a>
            {/* </div> */}
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 0.8, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/KANIMOZHI_NAGARAJAN_MERN_STACK_DEVELOPER_RESUME.pdf"
              download
              className="inline-block bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600 transition font-semibold"
            >
              DOWNLOAD RESUME
            </a>
          </motion.div> */}
        </div>

        {/* Profile Image */}

        <div className="flex justify-center">
          <motion.img
            src={profile}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full border-4 border-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.6)]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <div className="overflow-hidden mt-10 whitespace-nowrap border-t border-slate-700 pt-4">
        <div className="animate-marquee flex gap-10 text-white text-lg font-medium">
          <span>
            React ⚛️ • Node.js 🚀 • Express ⚡ • MongoDB 🍃 • PostgreSQL 🐘 •
            JWT 🔐 • Google OAuth 🔑 • Tailwind CSS 🎨 • Cloudinary ☁️ • REST
            APIs 🔗
          </span>
          <span>
            React ⚛️ • Node.js 🚀 • Express ⚡ • MongoDB 🍃 • PostgreSQL 🐘 •
            JWT 🔐 • Google OAuth 🔑 • Tailwind CSS 🎨 • Cloudinary ☁️ • REST
            APIs 🔗
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
