import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
const ProjectCardShip = ({ text }) => {
  return (
    <span className="font-primary bg-transparent text-nowrap rounded-full px-3 py-0.2 text-[14px]  text-[#b0b0b5]/50 font-main  border border-[#b0b0b5]/20 transition-colors duration-300  cursor-pointer">
      {text}
    </span>
  );
};

const ProjectCard = ({
  img,
  link,
  year,
  title,
  thing,
  description,
  languages,
}) => {
  return (
    <a
      target="_blank"
      href={link}
      className="w-full  group overflow-hidden rounded-3xl bg-gradient-to-b from-[#0f0f10] to-transparent rounded-xl border border-[#b0b0b5]/20 transition-all duration-500 hover:border-blue-700 hover:from-blue-600/10 hover:to-transparent cursor-pointer"
    >
      <div className="w-full overflow-hidden relative h-[200px]">
        <div className="flex text-[#b0b0b5] absolute z-2 w-full p-2 justify-between">
          <p className="backdrop-blur-sm font-primary uppercase  rounded-full  text-xs leading-none tracking-widest flex justify-center items-center p-2 px-3 bg-black/60">
            {thing}
          </p>
          <p className="backdrop-blur-sm font-primary uppercase  rounded-full  text-xs leading-none tracking-widest flex justify-center items-center p-2 px-3 bg-black/60">
            {year}
          </p>
        </div>
        <div className="absolute w-full h-full z-1 bg-gradient-to-t from-black/50 to-transparent " />
        <img
          src={img}
          className="w-full duration-500 h-full group-hover:scale-[1.07] object-cover"
        />
      </div>
      <div className="w-full max-md:p-5 max-sm:p-4  p-7">
        <h1 className="text-xl max-sm:text-lg max-md:pb-2 pb-2 font-secondary flex justify-between text-white">
          {title}{" "}
          <MdArrowOutward
            className="group-hover:text-blue-700 group-hover:-translate-y-[5px] group-hover:translate-x-[5px] duration-500"
            size={15}
          />
        </h1>
        <p className="font-main text-[#b0b0b5] text-[14px] max-sm:text-[12px] pb-5 max-md:pb-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-1">
          {languages?.map((e, index) => (
            <ProjectCardShip key={index} text={e} />
          ))}
        </div>
      </div>
    </a>
  );
};
// --- Main Component ---
const Project = () => {
  return (
    <div id="work" className="mt-20 md:mt-36">
      {/* Header Section */}
      <header className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-[#b0b0b5]/20 pt-6 md:pt-8">
        <div className="col-span-12 md:col-span-3 flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-700 text-blue-700 font-primary text-[10px]">
            05
          </span>
          <span className="font-primary text-[#b0b0b5] text-[11px] uppercase tracking-[0.2em] text-ink-700">
            Projects
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-secondary font-semibold text-3xl md:text-5xl mb-3 lg:text-[3.4rem] leading-[1.03] tracking-display text-white text-balance">
            Products Shipped &{" "}
            <span className="font-instrument tracking-tighter italic text-blue-700">
              Code Deployed
            </span>
          </h2>
          <p className="font-main text-[#b0b0b5]">
            A selection of full-stack web and mobile applications engineered for
            performance and scale.
          </p>
        </div>
      </header>
      <div className="md:grid-cols-2 my-15 gap-4 grid-cols-1 grid">
        <ProjectCard
          img={"/encounterroom.png"}
          year={"2026"}
          thing={"Engineer & Designer"}
          title={"Encounter Room"}
          link={"https://encounter-room.vercel.app/"}
          description={
            "Designed, built, and deployed a robust, full-stack web platform for a fellowship, featuring a public-facing community hub and an administrative management portal"
          }
          languages={["React", "Mongo Db", "SMTP", "Express.js", "Node.js"]}
        />
        <ProjectCard
          img={"/trueworship.png"}
          year={"2026"}
          thing={"Engineer & Designer"}
          title={"True Worship Global"}
          link={"https://trueworshipglobal.org"}
          description={
            "Designed, built, and deployed a robust, full-stack web platform for a Gospel Musician, featuring a public-facing community hub and an administrative management portal"
          }
          languages={["React", "Mongo Db", "SMTP", "Express.js", "Node.js"]}
        />

        <ProjectCard
          img={"/guest'n'host.png"}
          year={"2026"}
          thing={"Engineer & Designer"}
          title={"True Worship Global"}
          link={"https://trueworshipglobal.org"}
          description={
            "Collaborated with a developer to build some pages of the website"
          }
          languages={["HTML 5", "Tailwind Css"]}
        />
        <a
          className="text-center max-md:col-span-1 col-span-2 text-[#b0b0b5]/50 text-primary uppercase "
          href="https://github.com/toluwanimidevelops"
        >
          View more on my github
        </a>
      </div>

      {/* Content Section */}
    </div>
  );
};

export default Project;
