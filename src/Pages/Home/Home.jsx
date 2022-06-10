import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skill from "./Skill";

const Home = () => {
  return (
    <div className="px-3 lg:px-0">
      <Hero />
      <div class="divider text-black container mx-auto mb-5"></div>
      <About />
      <div class="divider text-black container mx-auto my-5"></div>
      <Skill />
      <div class="divider text-black container mx-auto my-5"></div>
      <Portfolio />
      <div class="divider text-black container mx-auto my-5"></div>
      <Contact/>
    </div>
  );
};

export default Home;
