import { motion } from "framer-motion";

// --- Animation Variants ---

// --- Main Component ---
const HowIWork = () => {
  return (
    <div id="work" className="mt-20 md:mt-36">
      {/* Header Section */}
      <header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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
        <div className="col-span-12  md:col-span-9">
          <h2 className="font-secondary font-semibold text-3xl md:text-5xl mb-3 lg:text-[3.4rem] leading-[1.03] tracking-display text-white text-balance">
            Not just code
            <span className="font-instrument tracking-tighter italic text-blue-700">
              {" "}
              outcomes you can measure.
            </span>
          </h2>
          <p className="font-main text-[#b0b0b5]">
            I care about the business behind the product. Every decision is
            weighed against one question: will this help you make or save money?
          </p>
        </div>
      </header>
    </div>
  );
};

export default HowIWork;
