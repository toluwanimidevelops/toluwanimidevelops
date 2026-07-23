import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
const Header = () => {
  return (
    <div className="min-h-screen mt-5 w-full flex flex-wrap justify-between gap-x-20 gap-4 ">
      <div className="flex flex-col  gap-5">
        <div className="flex  px-2 w-fit items-center gap-2 border-[0.5px] border-[#19191c] p-1  rounded-full bg-[#101011]">
          <div className="size-2 bg-green-400 rounded-full" />
          <p className="uppercase font-normal font-primary text-[13px] max-sm:text-[10px] tracking-[2px]   text-[#b0b0b5] ">
            Available for freelance & full-time
          </p>
        </div>

        <p className="uppercase font-normal font-primary text-[13px] tracking-[2px] text-blue-700">
          Toluwanimi Oladoja Goodness - AKA TOLUWANIMI DEVELOPS
        </p>
        <h1 className=" font-secondary max-md:text-[32px] max-md:leading-7 text-[64px] font-semibold leading-16 text-white  max-w-2xl ">
          I build products that solve real problems and{" "}
          <span className="text-blue-700">grow revenue.</span>
        </h1>
        <p className="font-main text-[17px] max-md:text-[12px] text-[#b0b0b5] max-w-lg">
          Full-stack software engineer and product builder for startups and
          scale-ups. I turn complex ideas into fast, scalable web and mobile
          apps—handling everything from UI design and frontend architecture to
          backend infrastructure. The goal is never just to write code; it’s to
          ship software that drives real business growth.
        </p>
        <div className=" flex justify-start flex-wrap mt-3 items-center gap-4">
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
        </div>
        <div className="border max-w-4xl my-8 w-full border-[#b0b0b5]/20 overflow-hidden  rounded-lg min-h-24 flex flex-wrap justify-between">
          <div className="flex-1 gap-1 flex flex-col justify-center h-24 p-3  border border-[#b0b0b5]/20">
            <h1 className="text-white text-3xl">34+</h1>
            <p className="font-primary text-[#b0b0b5] text-[11px] tracking-widest uppercase">
              Project Shipped
            </p>
          </div>
          <div className="flex-1  flex gap-1 flex-col justify-center h-24 p-3 border border-[#b0b0b5]/20">
            <h1 className="text-white text-3xl font-primary"> 4+</h1>
            <p className="font-primary text-[#b0b0b5] text-[11px] tracking-widest uppercase">
              Years Building
            </p>
          </div>
          <div className="flex-1  flex gap-1  flex-col justify-center h-24 p-3 border border-[#b0b0b5]/20">
            <h1 className="text-white text-3xl font-primary"> 3+</h1>
            <p className="font-primary text-[#b0b0b5] text-[11px] tracking-widest uppercase">
              Industries
            </p>
          </div>
          <div className="flex-1  flex gap-1  flex-col justify-center border border-[#b0b0b5]/20 h-24 p-3 ">
            <h1 className="text-white text-3xl font-primary"> 99.99%</h1>
            <p className="font-primary text-[#b0b0b5] text-[11px] tracking-widest uppercase">
              Uptime Mindset
            </p>
          </div>
        </div>
      </div>
      <div className=" w-100 bg-blue-700 rounded-2xl h-150 mt-20"></div>
    </div>
  );
};

export default Header;
