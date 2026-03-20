import { useRef } from "react";
import { motion } from "framer-motion";
import { skillsData } from "../constants/skillsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SkillsSection() {
  const rowRefs = useRef([]);

  const scroll = (index, direction) => {
    const container = rowRefs.current[index];
    if (!container) return;

    const scrollAmount = 250;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="skills" className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mt-5 mb-5">Skills</h2>

        <div className="space-y-10">
          {skillsData.map((group, index) => (
            <div key={index} className="relative group">
              {/* Category Title */}
              <h3 className="text-xl text-sky-400 mb-4 px-2">
                {group.category}
              </h3>

              {/* LEFT BUTTON */}
              <button
                onClick={() => scroll(index, "left")}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <FaChevronLeft />
              </button>

              {/* RIGHT BUTTON */}
              <button
                onClick={() => scroll(index, "right")}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <FaChevronRight />
              </button>

              {/* Scroll Row */}
              <div
                ref={(el) => (rowRefs.current[index] = el)}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
              >
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="min-w-[180px] bg-slate-900 p-5 rounded-xl border border-sky-500
                    flex flex-col items-center justify-center
                    hover:shadow-[0_0_25px_rgba(56,189,248,0.7)]
                    transition-all duration-300 cursor-pointer"
                  >
                    {skill.icon && (
                      <skill.icon className="text-sky-400 text-2xl mb-2" />
                    )}

                    <span className="text-gray-300 text-sm text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
