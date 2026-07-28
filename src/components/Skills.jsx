import { motion } from "framer-motion";

// --- Data Structure ---
const skillsData = [
  {
    title: "Design & Brand",
    number: "01",
    list: ["UI/UX", "Figma", "Branding", "Visual Identity", "Design Systems"],
  },
  {
    title: "Languages",
    number: "02",
    list: ["JavaScript", "TypeScript", "HTML 5", "CSS 3", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    number: "03",
    list: [
      "Next.js",
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "Socket.io",
    ],
  },
  {
    title: "Styling & UI",
    number: "04",
    list: [
      "Tailwind Css",
      "Shadcn",
      "Bootstrap",
      "Framer Motion",
      "CSS Modules",
      "Express",
    ],
  },
  {
    title: "Storage & Data",
    number: "05",
    list: ["Redux", "MongoDB", "Firebase", "React Context"],
  },
  {
    title: "Test & Quality",
    number: "06",
    list: ["Jest"],
  },
  {
    title: "Infra and Tooling",
    number: "07",
    list: [
      "Vercel",
      "Git and Github",
      "Github Actions",
      "Docker",
      "Postman",
      "npm/pnpm",
      "EsLint",
      "Onrender",
    ],
  },

  {
    title: "Practice",
    number: "08",
    list: [
      "Problem Solving",
      "Team Collaboration",
      "Responsive and Cross Browser",
      "Accessibility",
      "Performance",
      "Technical writing",
    ],
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

// --- Components ---
const SkillsChip = ({ text }) => {
  return (
    <motion.span
      variants={chipVariants}
      className="font-primary text-nowrap rounded-full px-3 py-1 text-[14px]  text-[#b0b0b5] bg-gradient-to-b font-main from-[#0f0f10] to-transparent border border-[#b0b0b5]/20 transition-colors duration-300 hover:border-blue-700/20 hover:text-white hover:from-blue-600/10 cursor-pointer"
    >
      {text}
    </motion.span>
  );
};

const SkillCard = ({ title, number, list }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-gradient-to-b from-[#0f0f10] to-transparent p-6 rounded-2xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/10 hover:to-transparent cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-secondary text-[16px] text-white font-medium">
            {title}
          </h3>
          <p className="font-primary text-blue-700 text-xs font-medium">
            {number}
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap gap-2 max-w-xs"
        >
          {list?.map((item, index) => (
            <SkillsChip key={index} text={item} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const Skills = () => {
  return (
    <div id="stack" className="mt-20 md:mt-36">
      {/* Header Section */}
      <header className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-[#b0b0b5]/20 pt-6 md:pt-8">
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
      </header>

      {/* Content Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 my-12 grid-cols-1"
      >
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.number}
            title={skill.title}
            number={skill.number}
            list={skill.list}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
