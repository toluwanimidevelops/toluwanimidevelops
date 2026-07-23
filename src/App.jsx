import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Scrollable from "./components/Scrollable";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Nav>
        <div className="max-w-[1350px] p-5  mx-auto">
          <Header />
          <Scrollable />
          <About />
        </div>
      </Nav>
    </div>
  );
};

export default App;
