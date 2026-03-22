import { motion, useScroll, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "../constants/skillsData";
import SkillRow from "./SkillRow";
import TypingText from "./TypingText";

function DesktopSkills() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 25);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 25);
  };

  return (
    <motion.section
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="skills"
      className="relative text-white min-h-[calc(100vh-80px)] flex items-center py-1 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400 font-mono">
          &gt; <TypingText text="Other Skills" />
        </h2>

        <div className="space-y-6">
          {skillsData.map((group, index) => (
            <SkillRow
              key={index}
              group={group}
              index={index}
              scrollY={scrollY}
              springX={springX}
              springY={springY}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default DesktopSkills;
