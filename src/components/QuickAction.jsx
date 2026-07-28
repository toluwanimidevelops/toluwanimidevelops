import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const QuickAction = () => {
  return (
    <div className="card cursor-pointer w-full  p-6 sm:p-8 md:p-12 text-center bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent">
      <p className="font-primary text-blue-700 text-[11px] uppercase tracking-[0.22em] text-flare">
        Let's build something
      </p>
      <h2 className="mt-4 font-secondary text-white text-3xl md:text-5xl font-semibold text-ink-950 tracking-display text-balance">
        Have a product in mind? I can help you ship it.
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          className="bg-blue-700 group inline-flex items-center gap-2.5 rounded-full bg-flare px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-0 font-semibold hover:bg-flare-glow transition-colors"
          href="#contact"
        >
          Start a project
          <IoIosArrowRoundForward size={20} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-[#b0b0b5] border-[#b0b0b5] items-center gap-2.5 rounded-full border border-ink-400 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 hover:border-flare/60 hover:text-flare transition-colors"
          href="https://wa.link/8v5ygy"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default QuickAction;
