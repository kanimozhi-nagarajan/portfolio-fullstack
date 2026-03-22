import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ReactGA from "react-ga4";

function Hero() {
  return (
    <section className="text-white py-4 md:py-1">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Text Section */}

        <div className="order-2 md:order-1">
          <span className="cursor">
            <p className="text-green-400 font-mono mb-4">
              &gt; npm start portfolio
            </p>
          </span>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold"
          >
            Hello, I'm Kanimozhi
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-sky-400 mt-2 md:mt-4"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-3 md:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
          >
            I create web applications. From UI to backend logic. Designed to be
            simple, functional, and reliable. Driven by curiosity and
            problem-solving. And always improving along the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-4 md:mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/KANIMOZHI_NAGARAJAN_PORTFOLIO_RESUME.pdf"
              onClick={() =>
                ReactGA.event({
                  category: "Resume",
                  action: "Download",
                })
              }
              download
              className="inline-block bg-sky-500 px-6 py-3 md:px-6 md:py-3 rounded-lg hover:bg-sky-600 transition font-semibold"
            >
              RESUME
            </a>
            <a
              href="#projects"
              className="bg-sky-500 hover:bg-sky-600 px-6 py-3 md:px-6 md:py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-sky-400 px-6 py-3 md:px-6 md:py-3 rounded-lg hover:bg-sky-500 hover:text-white transition"
            >
              Let's Connect
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
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
        </div>

        {/* Profile Image */}

        <div className="flex justify-center order-1 md:order-2">
          <motion.img
            src={profile}
            alt="Profile"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-94 md:h-94 object-cover rounded-full border-4 border-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.6)]"
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
