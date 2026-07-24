import React from "react";
import { motion } from "framer-motion";
import { TbSparkle } from "react-icons/tb";

const Scrollable = () => {
  const skills = [
    "UI/UX",
    "Web & App Development",
    "Branding",
    "Scalable Systems",
  ];

  // Duplicate the array to ensure a seamless infinite loop
  const marqueeItems = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="overflow-hidden w-full relative mt-16 border-t border-b border-[#bebec4]/30 py-5 mx-auto select-none">
      {/* Left Fade Overlay */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0b] to-transparent" />

      {/* Marquee Track */}
      <div className="flex w-max">
        <motion.div
          className="flex gap-10 pr-10 will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex justify-center items-center gap-5">
              <h1 className="text-main whitespace-nowrap capitalize text-2xl text-white">
                {item}
              </h1>
              <TbSparkle className="text-blue-700 fill-blue-700 w-6 h-6 flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Fade Overlay */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#0a0a0b] to-transparent" />
    </div>
  );
};

export default Scrollable;