import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import AfterLaunch from "./AfterLaunch";
import { options, servicesData } from "./data";

const Pricing = () => {
  const [selectedOption, setSelectedOption] = useState("web-development");

  // Find active category data based on current state
  const activeCategory = servicesData.find(
    (item) => item.id === selectedOption,
  );

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div id="pricing" className="pt-20 md:pt-36">
      <section className="max-w-full mx-auto">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-[#b0b0b5]/20 pt-6 md:pt-8"
        >
          <div className="col-span-12 md:col-span-3 flex items-center gap-3">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-700 text-blue-700 font-primary text-[10px]">
              05
            </span>
            <span className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em]">
              Pricing
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-secondary font-semibold text-3xl md:text-5xl mb-3 lg:text-[3.4rem] leading-[1.03] tracking-tight text-white text-balance">
              Transparent investment for <br />
              <span className="font-instrument lowercase tracking-tighter italic text-blue-700">
                measurable results.
              </span>
            </h2>
            <p className="font-main max-w-2xl text-[#b0b0b5]">
              From flexible project rates to full-scope design and build
              retainers, I price for the value delivered and the outcome
              achieved—no surprise fees, no unnecessary fluff.
            </p>
          </div>
        </motion.header>

        {/* Option Tabs */}
        <div className="mt-12 md:mt-16 flex justify-center items-center">
          <div className="flex flex-nowrap scrollbar-hide overflow-x-auto gap-2 w-fit p-1 border border-gray-500/50 rounded-full text-sm">
            {options.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  type="radio"
                  name="options"
                  id={option.id}
                  className="hidden peer"
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                />
                <label
                  htmlFor={option.id}
                  className="cursor-pointer text-center text-nowrap border hover:border-blue-700 border-[#0a0a0b] rounded-full py-3 px-6 font-primary text-[#b0b0b5] text-[11px] tracking-[0.2em] transition-colors duration-700 peer-checked:bg-blue-700 peer-checked:text-white hover:bg-blue-700 hover:text-white"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Items Grid */}
        <div className="mt-10 md:mt-14 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedOption}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {activeCategory?.services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-[#0a0a0b] hover:border-blue-700/50 card cursor-pointer transition-colors duration-300"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-secondary text-lg text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <MdArrowOutward className="text-xl text-[#b0b0b5] group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                    <span className="text-xs uppercase font-primary tracking-widest text-[#b0b0b5]">
                      Investment
                    </span>
                    <span className="font-secondary font-semibold text-xl text-white">
                      {service.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <AfterLaunch />
      </section>
    </div>
  );
};

export default Pricing;
