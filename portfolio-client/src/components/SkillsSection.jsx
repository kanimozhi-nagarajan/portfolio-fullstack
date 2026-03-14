import { motion } from "framer-motion";
import { skillsData } from "../constants/skillsData";

function SkillsSection() {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Skills & Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900 p-6 rounded-xl border border-sky-500
          transition-all duration-300 transform
          hover:scale-110 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
            >
              <h3 className="text-xl font-semibold text-sky-400 mb-4">
                {group.category}
              </h3>

              <ul className="space-y-2">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    {skill.icon && (
                      <skill.icon className="text-sky-400 text-xl" />
                    )}

                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
