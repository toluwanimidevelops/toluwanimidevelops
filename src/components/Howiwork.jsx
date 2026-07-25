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

const HowItWorksCard = ({ number, title, subTitle }) => {
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
const HowIWork = () => {
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
            03
          </span>
          <span className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] text-ink-700">
            How I work
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-secondary font-semibold text-3xl md:text-5xl mb-3 lg:text-[3.4rem] leading-[1.03] tracking-display text-white text-balance">
            Not just code{" "}
            <span className="font-instrument tracking-tighter italic text-blue-700">
              outcomes you can measure.
            </span>
          </h2>
          <p className="font-main text-[#b0b0b5]">
            I care about the business behind the product. Every decision is
            weighed against one question: will this help you make or save money?
          </p>
        </div>
      </motion.header>

      {/* Content Section */}
      <div className="flex py-15 flex-wrap justify-center w-full gap-5 ">
        {/* Profile Image Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-lg max-lg:w-87.5 max-md:w-full max-w-full max-md:order-1  border border-[#bebec4]/10 relative h-175 overflow-hidden rounded-2xl group"
        >
          <div className="flex justify-between absolute w-full px-5 bottom-2 z-10">
            <p className="font-primary text-white bg-[#0a0a0b]/50 border border-[#bebec4]/10 backdrop-blur-md rounded-xl text-xs tracking-wide leading-0 flex justify-center items-center px-3 py-3">
              IN THE BUILD
            </p>
            <p className="font-primary uppercase text-black bg-blue-700 rounded-xl text-xs tracking-wide leading-0 flex justify-center items-center px-3 py-3">
              Lagos, NG
            </p>
          </div>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src="/thebuild.jpeg"
            alt="The Build picture"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        {/* Animated Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 flex flex-col gap-4"
        >
          <HowItWorksCard
            number={"01"}
            title={"Understand the problem"}
            subTitle={
              "Before a single line of code, I dig into your users, goals, and numbers. The best products start with the right question, not the flashiest feature."
            }
          />
          <HowItWorksCard
            number={"02"}
            title={"Design & build the solution"}
            subTitle={
              "I shape the brand and experience, then build it. WordPress when you need speed and ownership. Custom apps when you need scale. Premium look, practical stack."
            }
          />
          <HowItWorksCard
            number={"03"}
            title={"Ship, measure, grow revenue"}
            subTitle={
              "I ship fast, watch how real users behave, and iterate on what moves the metrics that matter: signups, retention, and revenue."
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HowIWork;
