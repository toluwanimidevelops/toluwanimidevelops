import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Nav = ({ children }) => {
  const navLinks = [
    { name: "About", path: "/#about" },
    { name: "Work", path: "/#work" },
    { name: "Stack", path: "/#stack" },
    { name: "Projects", path: "/#project" },
    { name: "Contact", path: "/#contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Listens to global window scroll rather than an inner div
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Navigation Header */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#0a0a0b]/30 border-b border-[#bebec4]/30 backdrop-blur-md py-3 md:py-4"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-blue bg-blue-700 size-2 rounded-full" />
          <p className="font-secondary text-[#e2e2e4]">Toluwanimi Develops</p>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 font-medium">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className="group relative font-primary text-[12px] text-[#bebec4] tracking-widest uppercase font-400 py-1 transition-colors duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <button className="px-5 cursor-pointer py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 bg-white text-gray-900 font-primary uppercase tracking-[2px] hover:bg-gray-100 flex justify-center items-center gap-1">
            Hire me <IoIosArrowRoundForward size={20} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <aside
        className={`fixed top-16 right-0 w-full bg-black z-50 shadow-2xl flex flex-col md:hidden transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col  text-white font-medium text-lg">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="flex  items-center py-4 px-2 border-b border-[#b0b0b5]/20 font-primary transition-colors duration-200 hover:bg-white/5 active:bg-white/10"
            >
              <span className="text-blue-700 font-primary text-sm pr-3">
                0{i + 1}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </aside>

      {/* Main Body Content */}
      <main className="pt-24">{children}</main>
    </div>
  );
};

export default Nav;
