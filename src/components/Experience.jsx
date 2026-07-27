import { motion } from "framer-motion";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const staggerList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// --- Experience Data ---
const EXPERIENCES = [
  {
    number: "01",
    role: "Junior Fullstack Software Engineer",
    company: "Northsnow Ltd Uk",
    description:
      "Developed scalable MERN stack web apps, built cross-platform React Native mobile apps, and integrated secure RESTful APIs in an agile remote environment.",
    period: "Jan 2026 — Present",
    type: "Remote",
  },
  {
    number: "02",
    role: "Junior Frontend Software Engineer",
    company: "Breedware",
    description:
      "Built responsive web applications in React and cross-platform mobile apps using React Native, crafting modular UI with Tailwind CSS and integrating backend APIs.",
    period: "Nov 2025 — Mar 2026",
    type: "Full Time",
  },
  {
    number: "03",
    role: "Frontend Intern (React)",
    company: "Moniways",
    description:
      "Collaborated with senior engineers to develop interactive web apps in React, building clean, reusable frontend components for a modular codebase.",
    period: "Jan 2023 — Dec 2024",
    type: "Remote",
  },
];
// --- Sub-Component ---
const ExperienceCard = ({
  number,
  role,
  company,
  description,
  period,
  type,
}) => (
  <motion.li
    variants={fadeInUp}
    className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer"
  >
    <div className="col-span-12 md:col-span-1 text-[11px] uppercase tracking-[0.2em] text-blue-700 font-primary">
      {number}
    </div>
    <div className="col-span-12 md:col-span-4">
      <h3 className="font-secondary text-xl md:text-2xl font-semibold text-ink-950 tracking-tight text-white">
        {role}
      </h3>
      <p className="mt-1  text-sm text-[#b0b0b5] font-main">
        {company}
      </p>
    </div>
    <div className="col-span-12 md:col-span-5">
      <p className=" text-sm text-[#b0b0b5] font-main leading-relaxed">
        {description}
      </p>
    </div>
    <div className="col-span-12 md:col-span-2 md:text-right font-primary  text-[11px] uppercase tracking-[0.16em]">
      <div className="text-[#b0b0b5]">{period}</div>
      <div className=" text-[#b0b0b5]/50">{type}</div>
    </div>
  </motion.li>
);

// --- Main Component ---
const Experience = () => {
  return (
    <div id="work" className="mt-20 md:mt-36">
      {/* Header Section */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-[#b0b0b5]/20 pt-6 md:pt-8"
      >
        <div className="col-span-12 md:col-span-3 flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-700 text-blue-700 font-primary text-[10px]">
            02
          </span>
          <span className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] text-ink-700">
            Experience
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-secondary font-semibold text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.03] tracking-display text-white text-balance">
            Four years, three seats
            <span className="font-instrument tracking-tighter italic text-blue-700">
              {" "}
              still learning.
            </span>
          </h2>
        </div>
      </motion.header>

      {/* Experience List */}
      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerList}
        className="mt-10 md:mt-14 space-y-3"
      >
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.number} {...exp} />
        ))}
      </motion.ol>
    </div>
  );
};

export default Experience;
