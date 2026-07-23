import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { motion, useInView, animate } from "framer-motion";

const Counter = ({ value, className }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) return;

    const targetNumber = parseFloat(numericMatch[0]);
    const prefix = value.split(numericMatch[0])[0];
    const suffix = value.split(numericMatch[0])[1] || "";
    const isDecimal = numericMatch[0].includes(".");

    const controls = animate(0, targetNumber, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${
            isDecimal ? latest.toFixed(2) : Math.floor(latest)
          }${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <h1 ref={ref} className={className}>
      {value}
    </h1>
  );
};

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen mt-5 w-full flex flex-wrap justify-between gap-x-20 gap-4 "
    >
      <div className="flex flex-col  gap-5">
        <motion.div
          variants={itemVariants}
          className="flex  px-2 w-fit items-center gap-2 border-[0.5px] border-[#19191c] p-1  rounded-full bg-[#101011]"
        >
          <div className="size-2 bg-green-400 rounded-full" />
          <p className="uppercase font-normal font-primary text-[13px] max-sm:text-[10px] tracking-[2px]   text-[#b0b0b5] ">
            Available for freelance & full-time
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="uppercase font-normal font-primary text-[13px] tracking-[2px] text-blue-700"
        >
          Toluwanimi Oladoja Goodness - AKA TOLUWANIMI DEVELOPS
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className=" font-secondary max-md:text-[32px] max-md:leading-7 text-[64px] font-semibold leading-16 text-white  max-w-2xl "
        >
          I build products that solve real problems and{" "}
          <span className="text-blue-700">grow revenue.</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="font-main text-[17px] max-md:text-[12px] text-[#b0b0b5] max-w-lg"
        >
          Full-stack software engineer and product builder for startups and
          scale-ups. I turn complex ideas into fast, scalable web and mobile
          apps—handling everything from UI design and frontend architecture to
          backend infrastructure. The goal is never just to write code; it’s to
          ship software that drives real business growth.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className=" flex justify-start flex-wrap mt-3 items-center gap-4"
        >
          <a
            href=""
            className="cursor-pointer flex gap-3 justify-center items-center  bg-blue-700 text-sm w-fit  px-5 tracking-widest font-primary uppercase py-3 rounded-full"
          >
            Start A Project
            <IoIosArrowRoundForward size={20} />
          </a>
          <a
            href=""
            className="cursor-pointer border-[#b0b0b5]/20 bg-transparent text-[#b0b0b5] border hover:border-blue-700 hover:text-blue-700 duration-500 text-sm w-fit block px-5 tracking-widest font-primary uppercase py-3 rounded-full"
          >
            View Work
          </a>
          <a
            href="/toluresume.pdf"
            target="_blank"
            className="text-[#b0b0b5] flex justify-center items-center  font-primary uppercase"
          >
            Résumé <MdArrowOutward size={20} />
          </a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="border max-w-4xl my-8 w-full border-[#b0b0b5]/20 overflow-hidden  rounded-lg min-h-24 flex flex-wrap justify-between"
        >
          <div className="flex-1 gap-1 flex flex-col justify-center h-24 p-3  border border-[#b0b0b5]/20">
            <Counter value="34+" className="text-white text-3xl" />
            <p className="font-primary text-[#b0b0b5] text-[11px] tracking-widest uppercase">
              Project Shipped
            </p>
          </div>
          <div className="flex-1  flex gap-1 flex-col justify-center h-24 p-3 border border-[#b0b0b5]/20">
            <Counter value=" 4+" className="text-white text-3xl font-primary" />
            <p className="font-primary text-[#b0b0b5] text-[11px] tracking-widest uppercase">
              Years Building
            </p>
          </div>
          <div className="flex-1  flex gap-1  flex-col justify-center h-24 p-3 border border-[#b0b0b5]/20">
            <Counter value=" 3+" className="text-white text-3xl font-primary" />
            <p className="font-primary text-[#b0b0b5] text-[11px] tracking-widest uppercase">
              Industries
            </p>
          </div>
          <div className="flex-1  flex gap-1  flex-col justify-center border border-[#b0b0b5]/20 h-24 p-3 ">
            <Counter
              value=" 99.99%"
              className="text-white text-3xl font-primary"
            />
            <p className="font-primary text-[#b0b0b5] text-[11px] tracking-widest uppercase">
              Uptime Mindset
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className=" w-100 bg-blue-700 rounded-2xl h-150 mt-20"
      ></motion.div>
    </motion.div>
  );
};

export default Header;
