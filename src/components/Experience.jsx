import React from "react";

const Experience = () => {
  return (
    <div id="work" className="mt-20 md:mt-36">
      <header
        className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-[#b0b0b5]/20 pt-6 md:pt-8"
        style={{ opacity: 1, transform: "none" }}
      >
        <div
          className="col-span-12 md:col-span-3 flex items-center gap-3"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-700 text-blue-700 font-primary text-[10px] ">
            02
          </span>
          <span className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] text-ink-700">
            Experience
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2
            className="font-secondary font-semibold text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.03] tracking-display text-white text-balance"
            style={{ opacity: 1, transform: "none" }}
          >
            Four years, five seats
            <span className="font-instrument tracking-tighter italic text-blue-700">
              {" "}
              still learning.
            </span>
          </h2>
        </div>
      </header>

      <ol className="mt-10 md:mt-14 space-y-3">
        <li
          className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="col-span-12 md:col-span-1  text-[11px] uppercase tracking-[0.2em] text-blue-700 font-primary ">
            01
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-secondary text-xl md:text-2xl font-semibold text-ink-950 tracking-tight">
              Technical Lead
            </h3>
            <p className="mt-1 text-ink-700 text-sm">Nexflowra</p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-ink-700 text-sm leading-relaxed">
              Leading engineering and product delivery architecture, team
              direction, and shipping scalable systems end to end.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700">
            <div>2026 — Present</div>
            <div className="text-ink-500 mt-0.5">Full-time</div>
          </div>
        </li>

        <li
          className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="col-span-12 md:col-span-1  text-[11px] uppercase tracking-[0.2em] text-blue-700 font-primary ">
            02
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-secondary text-xl md:text-2xl font-semibold text-ink-950 tracking-tight">
              Lead Frontend Engineer
            </h3>
            <p className="mt-1 text-ink-700 text-sm">Mansior</p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-ink-700 text-sm leading-relaxed">
              Led the frontend for a real estate platform: escrow, AI-assisted
              search, and in-app messaging at scale.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700">
            <div>Jun 2024 — 2026</div>
            <div className="text-ink-500 mt-0.5">Full-time</div>
          </div>
        </li>

        <li
          className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="col-span-12 md:col-span-1  text-[11px] uppercase tracking-[0.2em] text-blue-700 font-primary ">
            03
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-secondary text-xl md:text-2xl font-semibold text-ink-950 tracking-tight">
              Fullstack Developer
            </h3>
            <p className="mt-1 text-ink-700 text-sm">Freelance</p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-ink-700 text-sm leading-relaxed">
              Shipped web and mobile products for clients across multiple
              industries, end to end.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700">
            <div>Dec 2023 — Jun 2024</div>
            <div className="text-ink-500 mt-0.5">Contract</div>
          </div>
        </li>

        <li
          className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="col-span-12 md:col-span-1  text-[11px] uppercase tracking-[0.2em] text-blue-700 font-primary ">
            04
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-secondary text-xl md:text-2xl font-semibold text-ink-950 tracking-tight">
              Frontend Developer
            </h3>
            <p className="mt-1 text-ink-700 text-sm">Ajian Labs</p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-ink-700 text-sm leading-relaxed">
              Built product interfaces and design systems for early-stage
              ventures.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700">
            <div>Jan 2023 — Nov 2023</div>
            <div className="text-ink-500 mt-0.5">Part-time</div>
          </div>
        </li>

        <li
          className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="col-span-12 md:col-span-1  text-[11px] uppercase tracking-[0.2em] text-blue-700 font-primary ">
            05
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-secondary text-xl md:text-2xl font-semibold text-ink-950 tracking-tight">
              Frontend Developer Intern
            </h3>
            <p className="mt-1 text-ink-700 text-sm">Global Axis</p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-ink-700 text-sm leading-relaxed">
              First production work: React components and reusable UI patterns.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700">
            <div>Apr 2022 — Sep 2022</div>
            <div className="text-ink-500 mt-0.5">Full-time</div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
