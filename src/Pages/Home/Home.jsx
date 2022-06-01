import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skill from "./Skill";

const Home = () => {
  return (
    <div>
      <Hero />
      <div class="divider text-black container mx-auto mb-24"></div>
      <About />
      <div class="divider text-black container mx-auto my-24"></div>
      <Skill />
      <div class="divider text-black container mx-auto my-24"></div>
      <Portfolio />
      <div class="divider text-black container mx-auto my-24"></div>
      <Contact/>
    </div>
  );
};

export default Home;
