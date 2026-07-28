const Footer = () => {
  return (
    <div className="mt-12 grid grid-cols-12 gap-6 items-end">
      <div className="col-span-12 md:col-span-4">
        <div className="font-secondary text-2xl text-white md:text-3xl   tracking-tight">
          Toluwanimi Develops<span className="text-blue-700">.</span>
        </div>
        <p className="mt-3 text-[#b0b0b5]/40 font-mono text-[11px] uppercase tracking-[0.2em] ">
          Design · Engineering · Product Development
        </p>
      </div>
      <div className="col-span-6 md:col-span-4 text-[#b0b0b5] md:col-start-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-flare text-[#b0b0b5]  transition-colors"
          href="https://x.com/Tolu1280211"
        >
          Twitter ↗
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-flare text-[#b0b0b5] transition-colors"
          href="https://github.com/toluwanimidevelops"
        >
          GitHub ↗
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-flare text-[#b0b0b5]  transition-colors"
          href="https://linkedin.com/in/toluwanimi-oladoja-220092388/"
        >
          LinkedIn ↗
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-flare text-[#b0b0b5] transition-colors"
          href="https://wa.link/8v5ygy"
        >
          WhatsApp ↗
        </a>
      </div>
      <div className="col-span-6 md:col-span-4 md:col-start-11 md:text-right">
        <a
          href="/"
          className="font-mono text-[11px] text-[#b0b0b5] uppercase tracking-[0.2em] text-ink-700 hover:text-flare transition-colors"
        >
          ↑ Back to top
        </a>
      </div>
      <div className="col-span-12 text-[#b0b0b5]/40 flex flex-wrap items-center justify-between gap-3 border-t border-ink-400/60 pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">
        <span>
          © 2026 Toluwanimi Oladoja Goodness · Crazy Codes. All rights reserved.
        </span>
        <span>Built with React.js · Lagos, NG</span>
      </div>
    </div>
  );
};

export default Footer;
