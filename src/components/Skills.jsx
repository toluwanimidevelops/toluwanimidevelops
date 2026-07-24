import { motion } from "framer-motion";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1], // Smooth cubic-bezier
    },
  },
};

const SkillsCard = ({ number, title, subTitle }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="w-full p-7 max-md:gap-5 gap-10 rounded-2xl bg-gradient-to-b from-[#0f0f10] to-transparent border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer flex"
    >
      <h1 className="text-2xl max-md:text-xl font-primary text-blue-700">
        {number}
      </h1>
      <div className="flex-1 flex flex-col gap-px">
        <h1 className="font-secondary text-xl max-md:text-lg text-white">
          {title}
        </h1>
        <p className="text-[#b0b0b5] font-main leading-relaxed max-lg:text-md max-md:text-sm">
          {subTitle}
        </p>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const Skills = () => {
  return (
    <div id="work" className="mt-20 md:mt-36">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-[#b0b0b5]/20 pt-6 md:pt-8"
      >
        <div className="col-span-12 md:col-span-3 flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-700 text-blue-700 font-primary text-[10px]">
            04
          </span>
          <span className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] text-ink-700">
            Skills
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-secondary font-semibold text-3xl md:text-5xl mb-3 lg:text-[3.4rem] leading-[1.03] tracking-display text-white text-balance">
            Tools for design, MERN and product{" "}
            <span className="font-instrument tracking-tighter italic text-blue-700">
              not code alone.
            </span>
          </h2>
          <p className="font-main text-[#b0b0b5]">
            From MERN sites and brand systems to custom apps, I pick the right
            tool for the business goal, not the trend.
          </p>
        </div>
      </motion.header>

      {/* Content Section */}
    </div>
  );
};

export default Skills;
