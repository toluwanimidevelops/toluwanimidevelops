import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-28 ">
      {/* Header Section */}
      <header
        className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-[#b0b0b5]/20 pt-6 md:pt-8"
        style={{ opacity: 1, transform: "none" }}
      >
        <div
          className="col-span-12 md:col-span-3 flex items-center gap-3"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-700 text-blue-700 font-primary text-[10px] ">
            01
          </span>
          <span className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] text-ink-700">
            About
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2
            className="font-secondary font-semibold text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.03] tracking-display text-white text-balance"
            style={{ opacity: 1, transform: "none" }}
          >
            Products that start with a question
            <span className="font-instrument tracking-tighter italic text-blue-700 ">
              {" "}
              and end in production.
            </span>
          </h2>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="mt-12 md:mt-16 grid grid-cols-12 gap-x-6 gap-y-12">
        {/* Left Column: Bio & Metrics */}
        <div
          className="col-span-12 lg:col-span-7"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="space-y-5 text-[#b0b0b5] font-main text-[15px] sm:text-base md:text-lg leading-[1.65] text-balance">
            <p>
              Hi, I’m Toluwanimi Oladoja, known online as{" "}
              <span className=" font-medium">Toluwanimi develops</span>. I turn
              complex ideas into high-performing web and mobile applications.
              Operating at the intersection of product design, frontend polish,
              and full-stack architecture, I’m the developer who can map out a
              seamless user flow in the morning and deploy production-ready code
              by night.
            </p>
            <p>
              Over the years, I’ve architected and delivered robust web
              platforms, cross-platform mobile apps, and custom digital systems
              for fast-growing ventures across fintech, real estate, and SaaS. I
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
          <dl className="mt-10 grid grid-cols-2  overflow-hidden rounded-2xl border border-[#b0b0b5]/20 ">
            <div
              className="px-5 border-[#b0b0b5]/20 border py-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <dt className="font-primary text-[#b0b0b5] text-[10px] uppercase tracking-[0.16em] text-ink-600">
                Focus
              </dt>
              <dd className="mt-1 text-[15px] text-white font-main ">
                Problem solving &amp; growth
              </dd>
            </div>
            <div
              className=" px-5 border-[#b0b0b5]/20 border py-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <dt className="font-primary text-[#b0b0b5] text-[10px] uppercase tracking-[0.16em] text-ink-600">
                Products shipped
              </dt>
              <dd className="mt-1 text-[15px] text-white font-main ">34+</dd>
            </div>
            <div
              className="border-[#b0b0b5]/20 border px-5 py-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <dt className="font-primary text-[#b0b0b5] text-[10px] uppercase tracking-[0.16em] text-ink-600">
                Experience
              </dt>
              <dd className="mt-1 text-[15px] text-white font-main ">
                4+ years
              </dd>
            </div>
            <div
              className=" px-5 border-[#b0b0b5]/20 border py-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <dt className="font-primary text-[#b0b0b5] text-[10px] uppercase tracking-[0.16em] text-ink-600">
                Open to
              </dt>
              <dd className="mt-1 text-[15px] text-white font-main">
                Freelance &amp; Full-time
              </dd>
            </div>
          </dl>
        </div>

        {/* Right Column: Services */}
        <div className="col-span-12 lg:col-span-5 lg:pl-6">
          <p className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] text-ink-700">
            What I do
          </p>
          <div className="mt-5 space-y-3">
            <div
              className="card group p-5 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer "
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex items-start bg-l gap-4">
                <span className="mt-0.5 font-primary  text-[11px] text-blue-700">
                  01
                </span>
                <div>
                  <h3 className="font-secondary text-white text-lg font-semibold text-ink-950">
                    Product Design
                  </h3>
                  <p className="mt-1 text-sm text-ink-700 leading-relaxed font-main text-[#b0b0b5]/50">
                    Wireframes to polished, high-converting interfaces designed
                    to turn visitors into paying customers.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="card group p-5 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer "
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 font-primary  text-[11px] text-blue-700">
                  02
                </span>
                <div>
                  <h3 className="font-secondary text-white text-lg font-semibold text-ink-950">
                    Web &amp; App Development
                  </h3>
                  <p className="mt-1 text-sm text-ink-700 leading-relaxed font-main text-[#b0b0b5]/50">
                    Fast, accessible frontends and solid backends in React,
                    Next.js, Node, and Postgres, built to sell and scale.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="card group p-5 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer "
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 font-primary  text-[11px] text-blue-700">
                  03
                </span>
                <div>
                  <h3 className="font-secondary text-white text-lg font-semibold text-ink-950">
                    Branding &amp; Identity
                  </h3>
                  <p className="mt-1 text-sm text-ink-700 leading-relaxed font-main text-[#b0b0b5]/50">
                    Visual systems that make your product feel trustworthy and
                    premium, so people feel safe paying you.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="card group p-5 bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/20 hover:to-transparent cursor-pointer "
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 font-primary  text-[11px] text-blue-700">
                  04
                </span>
                <div>
                  <h3 className="font-secondary text-white text-lg font-semibold text-ink-950">
                    Scalable Systems
                  </h3>
                  <p className="mt-1 text-sm text-ink-700 leading-relaxed font-main text-[#b0b0b5]/50">
                    Architecture that stays fast and calm as usage, revenue, and
                    your team grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div id="work" className="mt-20 md:mt-36">
        <header
          className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-ink-400/60 pt-6 md:pt-8"
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
            className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="col-span-12 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] ">
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
            className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="col-span-12 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] ">
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
            className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="col-span-12 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] ">
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
            className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="col-span-12 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] ">
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
            className="card group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline p-6 md:p-7"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="col-span-12 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] ">
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
                First production work: React components and reusable UI
                patterns.
              </p>
            </div>
            <div className="col-span-12 md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700">
              <div>Apr 2022 — Sep 2022</div>
              <div className="text-ink-500 mt-0.5">Full-time</div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default About;
