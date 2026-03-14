import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className=" bg-slate-950 text-white flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
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
            <Link
              to="/projects"
              className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border border-sky-400 px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition"
            >
              Contact Me
            </Link>
          </motion.div>
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
    </section>
  );
}

export default Hero;
