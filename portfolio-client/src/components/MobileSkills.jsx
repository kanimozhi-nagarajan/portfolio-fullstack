import { motion } from "framer-motion";
import { skillsData } from "../constants/skillsData";
import TypingText from "./TypingText";

function MobileSkills() {
  return (
    <section id="skills" className="text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400 font-mono">
        &gt; <TypingText text="Other Skills" />
      </h2>

      <div className="space-y-6">
        {skillsData.map((group, index) => (
          <div key={index}>
            {/* Category */}
            <h3 className="text-sky-400 mb-3 text-lg">{group.category}</h3>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-3">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-slate-900/80
                  border border-sky-500/20
                  rounded-lg p-3
                  flex items-center gap-2
                  justify-center
                  text-sm"
                >
                  {skill.icon && <skill.icon className="text-sky-400" />}
                  <span className="text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MobileSkills;
