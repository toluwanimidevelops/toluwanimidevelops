const Cta = () => {
  return (
    <section id="work" className="mt-20 md:mt-36">
      {/* Header Section */}
      <header className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-[#b0b0b5]/20 pt-6 md:pt-8">
        <div className="col-span-12 md:col-span-3 flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-700 text-blue-700 font-primary text-[10px]">
            05
          </span>
          <span className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em]">
            Projects
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-secondary font-semibold text-3xl md:text-5xl mb-3 lg:text-[3.4rem] leading-[1.03] tracking-tight text-white text-balance">
            Have something worth building? <br />
            <span className="font-instrument tracking-tighter italic text-blue-700">
              Let's talk.
            </span>
          </h2>
          <p className="font-main max-w-2xl text-[#b0b0b5]">
            Freelance projects, full time roles, and product collaborations. I
            reply within a day, most days.
          </p>
        </div>
      </header>
      <header className="grid mt-6 md:mt-8 grid-cols-4 justify-between    border-t border-[#b0b0b5]/20 pt-6 md:pt-8">
        <div className="col-span-1"></div>
        <div className="col-span-2"></div>
      </header>
    </section>
  );
};

export default Cta;
