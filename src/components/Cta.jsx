import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const Cta = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const textToCopy = "oladojatolu@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formPayload = new FormData(event.target);
    formPayload.append("access_key", "c136091e-2d84-4d32-9122-30ca1d2cc279");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success!");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        console.error("Error from Web3Forms:", data);
        setResult(data.message || "Error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 4000);
    }
  };

  const socialLinks = [
    {
      label: "Twitter",
      username: "@Tolu1280211",
      url: "https://x.com/Tolu1280211",
    },
    {
      label: "Github",
      username: "Toluwani Develops",
      url: "https://github.com/toluwanimidevelops",
    },
    {
      label: "Linkedin",
      username: "Toluwanimi Oladoja",
      url: "https://linkedin.com/in/toluwanimi-oladoja-220092388/",
    },
    {
      label: "Whatsapp",
      username: "Message me",
      url: "https://wa.link/8v5ygy",
    },
  ];

  // Animation Variants
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="mt-20 md:mt-36 max-w-full mx-auto ">
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
            Contact Us
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-secondary font-semibold text-3xl md:text-5xl mb-3 lg:text-[3.4rem] leading-[1.03] tracking-tight text-white text-balance">
            Have something worth building? <br />
            <span className="font-instrument lowercase tracking-tighter italic text-blue-700">
              Let's talk.
            </span>
          </h2>
          <p className="font-main max-w-2xl text-[#b0b0b5]">
            Freelance projects, full time roles, and product collaborations. I
            reply within a day, most days.
          </p>
        </div>
      </motion.header>

      {/* Main Content: Info & Form */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-12 gap-8 max-md:gap-x-0 mt-10 md:mt-12 border-t border-[#b0b0b5]/20 pt-8 md:pt-12"
      >
        {/* Left Column: Direct Info & Social Links */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 lg:col-span-5 flex flex-col gap-1 "
        >
          {/* Direct Email */}
          <div>
            <p className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] mb-3">
              Direct
            </p>
            <div className="flex items-baseline gap-4 flex-wrap ">
              <a
                href="mailto:oladojatolu@gmail.com"
                className="font-secondary text-white text-3xl max-sm:text-lg underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 break-all"
              >
                oladojatolu@gmail.com
              </a>
              <button
                onClick={handleCopy}
                className="font-primary cursor-pointer text-[12px] uppercase tracking-wider text-blue-700 transition-colors shrink-0"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-4 ">
            <p className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] mb-4">
              Elsewhere
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <div
                  key={link.label}
                  className="grid grid-cols-12 items-center gap-2 "
                >
                  <span className="col-span-3 sm:col-span-2 font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] ">
                    {link.label}
                  </span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-9 sm:col-span-10 inline-flex items-center text-white font-main text-base underline underline-offset-4 transition-colors"
                  >
                    <span className="truncate max-sm:text-sm">
                      {link.username}
                    </span>
                    <MdArrowOutward size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Form */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 w-full lg:col-span-7 "
        >
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Input */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em]"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className="bg-transparent w-full border-b border-[#b0b0b5]/30 pb-2 pt-1 text-white placeholder-[#b0b0b5]/40 focus:outline-none focus: transition-colors font-main"
                />
              </div>

              {/* Subject Input */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="A role, a project, a hello"
                  className="bg-transparent w-full border-b border-[#b0b0b5]/30 pb-2 pt-1 text-white placeholder-[#b0b0b5]/40 focus:outline-none focus: transition-colors font-main"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2 mt-2 ">
              <label
                htmlFor="message"
                className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me a bit about what you're working on."
                className="bg-transparent w-full border-b border-[#b0b0b5]/30 pb-2 pt-1 text-white placeholder-[#b0b0b5]/40 focus:outline-none focus: transition-colors resize-none font-main"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer flex gap-3 justify-center items-center bg-blue-700 text-sm w-fit px-5 tracking-widest font-primary uppercase py-3 rounded-full text-white disabled:opacity-50"
              >
                {result || "Submit"}
                <IoIosArrowRoundForward size={20} />
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cta;