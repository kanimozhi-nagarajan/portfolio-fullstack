import { journeyData } from "../constants/journeyData";
import { motion } from "framer-motion";
function JourneyTimeline() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-1">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        My Journey
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
                className="w-full md:w-5/12 bg-slate-900 p-6 rounded-xl border border-sky-500 
shadow-lg transition-all duration-300 transform 
 md:hover:scale-110 hover:-translate-y-2
hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] cursor-pointer space-y-16 max-w-4xl  "
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>

                  <h3 className="text-xl md:text-2xl break-words font-semibold text-sky-400">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default JourneyTimeline;
