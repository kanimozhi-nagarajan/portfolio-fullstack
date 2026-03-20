import { motion, useTransform } from "framer-motion";

function SkillRow({ group, index, scrollY, springX, springY }) {
  const isReverse = index % 2 !== 0;

  const getLoopedSkills = (skills) => {
    if (skills.length <= 3) return [...skills, ...skills, ...skills, ...skills];
    if (skills.length <= 5) return [...skills, ...skills, ...skills];
    return [...skills, ...skills];
  };

  const loopedSkills = getLoopedSkills(group.skills);

  // ✅ Hook is now valid (top-level)
  const scrollOffset = useTransform(
    scrollY,
    [0, 1000],
    [0, isReverse ? 50 : -50],
  );

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <h3 className="text-sky-400 text-sm md:text-lg mb-2 text-center md:text-left">
        {group.category}
      </h3>

      <div className="relative overflow-hidden group">
        <motion.div
          style={{ x: scrollOffset }}
          className="flex gap-4 w-max"
          animate={{
            x: isReverse ? ["-50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 45 + index * 6,
            ease: "linear",
          }}
        >
          {[...loopedSkills, ...loopedSkills].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                rotateX: 6,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="min-w-[160px] md:min-w-[200px]
              bg-slate-900/70 
              px-4 py-3 rounded-xl
              border border-sky-500/20
              flex items-center gap-3 justify-center
              transition-all duration-300
              hover:border-sky-400
              hover:shadow-[0_0_30px_rgba(56,189,248,0.7)]
              group-hover:opacity-40 hover:!opacity-100"
            >
              {skill.icon && <skill.icon className="text-sky-400 text-lg" />}
              <span className="text-gray-300 whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Edge fades */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-cyan-900 via-cyan/80 to-transparent z-5" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-cyan-900 via-cyan/80 to-transparent z-5" />
      </div>
    </motion.div>
  );
}

export default SkillRow;
