import { motion, useScroll, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "../constants/skillsData";
import SkillRow from "./SkillRow";

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
      className="relative text-white min-h-[calc(100vh-80px)] flex items-center py-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 blur-2xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Skills
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
