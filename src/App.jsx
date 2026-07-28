import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Scrollable from "./components/Scrollable";
import About from "./components/About";
import Experience from "./components/Experience";
import HowIWork from "./components/Howiwork";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Cta from "./components/Cta";
import QuickAction from "./components/QuickAction";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Nav>
        <div className="max-w-[1350px] p-5  mx-auto">
          <Header />
          <Scrollable />
          <About />
          <Experience />
          <HowIWork />
          <Skills />
          <Project />
          <Cta />
        </div>
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-[#b0b0b5]/20 pt-6 md:pt-8 mt-30"
        ></motion.header>
        <div className="max-w-[1350px] p-5  mx-auto">
          <QuickAction />
          <Footer />
        </div>
      </Nav>
    </div>
  );
};

export default App;
