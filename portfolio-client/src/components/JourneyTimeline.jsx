import { journeyData } from "../constants/journeyData";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
function JourneyTimeline() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-1">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400 font-mono">
        &gt; <TypingText text="My Journey" />
      </h2>

      <div className="relative">
        {/* Timeline vertical line */}

        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-500"></div>

        {journeyData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`mb-16 flex ${isLeft ? "justify-start" : "justify-end"} w-full relative`}
            >
              {/* Timeline node */}

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full border-4 border-slate-950"></div>

              {/* Card */}

              <div
                className="bg-[#020617] p-6 rounded-xl border border-sky-400
shadow-lg transition transform hover:scale-110
hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="bg-[#020617] border border-slate-700 rounded-lg p-4 mt-4 text-sm font-mono">
                  <pre className="whitespace-pre-wrap leading-relaxed break-words">
                    <span className="text-sky-400">const</span>{" "}
                    <span className="text-yellow-400">journeyStep</span> = {"{"}
                    {"\n  "}
                    <span className="text-green-400">phase</span>: "{item.title}
                    ",
                    {"\n  "}
                    <span className="text-green-400">description</span>: "
                    {item.description}"{"\n}"}
                  </pre>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default JourneyTimeline;
