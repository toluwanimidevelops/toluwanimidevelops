
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// --- Static Data ---
const METRICS = [
  { label: "Focus", value: "Problem solving & growth" },
  { label: "Products shipped", value: "34+" },
  { label: "Experience", value: "4+ years" },
  { label: "Open to", value: "Freelance & Full-time" },
];

const SERVICES = [
  {
    number: "01",
    title: "Product Design",
    description:
      "Wireframes to polished, high-converting interfaces designed to turn visitors into paying customers.",
  },
  {
    number: "02",
    title: "Web & App Development",
    description:
      "Fast, accessible frontends and solid backends in React, Next.js, Node, and Postgres, built to sell and scale.",
  },
  {
    number: "03",
    title: "Branding & Identity",
    description:
      "Visual systems that make your product feel trustworthy and premium, so people feel safe paying you.",
  },
  {
    number: "04",
    title: "Scalable Systems",
    description:
      "Architecture that stays fast and calm as usage, revenue, and your team grow.",
  },
];

// --- Reusable Sub-Components ---
const MetricCard = ({ label, value }) => (
  <motion.div
    variants={fadeInUp}
    className="px-5 border-[#b0b0b5]/20 border py-4"
  >
    <dt className="font-primary text-[#b0b0b5] text-[10px] uppercase tracking-[0.16em] text-ink-600">
      {label}
    </dt>
    <dd className="mt-1 text-[15px] text-white font-main">{value}</dd>
  </motion.div>
);

const ServiceCard = ({ number, title, description }) => (
  <motion.div
    variants={fadeInUp}
    className="card group p-5  cursor-pointer"
  >
    <div className="flex items-start gap-4">
      <span className="mt-0.5 font-primary text-[11px] text-blue-700">
        {number}
      </span>
      <div>
        <h3 className="font-secondary text-white text-lg font-semibold text-ink-950">
          {title}
        </h3>
        <p className="mt-1 text-sm text-ink-700 leading-relaxed font-main text-[#b0b0b5]/50">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

// --- Main Component ---
const About = () => {
  return (
    <section id="about" className="py-16 md:py-28">
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
            01
          </span>
          <span className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] text-ink-700">
            About
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-secondary font-semibold text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.03] tracking-display text-white text-balance">
            Products that start with a question
            <span className="font-instrument tracking-tighter italic text-blue-700">
              {" "}
              and end in production.
            </span>
          </h2>
        </div>
      </motion.header>

      {/* Main Content Grid */}
      <div className="mt-12 md:mt-16 grid grid-cols-12 gap-x-6 gap-y-12">
        {/* Left Column: Bio & Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="col-span-12 lg:col-span-7"
        >
          <div className="space-y-5 text-[#b0b0b5] font-main text-[15px] sm:text-base md:text-lg leading-[1.65] text-balance">
            <p>
              Hi, I’m Toluwanimi Oladoja, known online as{" "}
              <span className="font-medium">Toluwanimi develops</span>. I turn
              complex ideas into high-performing web and mobile applications.
              Operating at the intersection of product design, frontend polish,
              and full-stack architecture, I’m the developer who can map out a
              seamless user flow in the morning and deploy production-ready code
              by night.
            </p>
            <p>
              Over the years, I’ve architected and delivered robust web
              platforms, cross-platform mobile apps, and custom digital systems
              for fast-growing ventures across real estate, and SaaS. I
              don't just write clean code; I engineer scalable digital products
              that acquire users, streamline operations, and drive measurable
              business revenue.
            </p>
            <p className="text-ink-800 text-[15px] sm:text-base md:text-lg leading-[1.65] text-balance">
              If you're looking for an engineer who can own the complete
              lifecycle—from initial wireframe to scalable cloud backend—and
              cares as much about your bottom line as the tech stack, let’s
              build something exceptional together.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <motion.dl
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#b0b0b5]/20"
          >
            {METRICS.map((metric) => (
              <MetricCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
              />
            ))}
          </motion.dl>
        </motion.div>

        {/* Right Column: Services */}
        <div className="col-span-12 lg:col-span-5 lg:pl-6">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] text-ink-700"
          >
            What I do
          </motion.p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-5 space-y-3"
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
