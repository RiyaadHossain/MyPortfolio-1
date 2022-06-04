import React from "react";
import Banner from "../../Assets/Image/Riyad Banner Photo.png";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Hero = () => {
  const { text } = useTypewriter({
    words: [" Web Developer.", " Coder.", " React Develoer."],
    loop: 0, // Infinit
    typeSpeed: 70,
    cursorStyle: "|",
  });
  return (
    <div id="home" className="min-h-[95vh] flex-col items-center  lg:flex-row flex justify-between container mx-auto">
      <div className="lg:w-1/2 order-2 ">
        <p className="lg:text-2xl text-xl font-thin">Welcome to My World</p>
        <h1 className="lg:text-7xl text-3xl my-2 hero-title lg:my-6 font-bold text-slate-100">
          Hi, I'm <span className="text-[#FF014F]">Riyad Hossain</span>
        </h1>
        <h1 className="lg:text-5xl hero-subtitle text-2xl text-slate-100 font-bold">
          a{" "}
          <Typewriter
            words={[" Web Developer.", " Coder.", " React Developer."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
          />
        </h1>
        <p className="mt-3 lg:mt-6 text-base lg:text-xl">
          A talented, innovative and enthusiastic front-end developer with
          strong attention to detail in order to help build proficient and
          functional websites. Have the proficiency to work closely with other
          developers and creative team members.
        </p>
        <div className="flex justify-between mt-5 lg:mt-14">
          <div>
            <h3 className="font-medium text-base">FIND WITH ME -</h3>
            <div className="mt-5 flex gap-x-5">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/riyaad-hossain/" className="social-box rounded-md flex items-center justify-center w-14 h-14">
               <BsLinkedin className="text-2xl"/>
              </a>
              <div>
                <a target="_blank" rel="noreferrer" href="https://github.com/RiyaadHossain" className="social-box rounded-md flex items-center justify-center w-14 h-14">
                  <BsGithub className="text-2xl"/>
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/Riyaad_Hossain" className="social-box rounded-md flex items-center justify-center w-14 h-14">
                  <BsTwitter className="text-2xl"/>
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="banner-box order-1 my-8 mb-4 lg:my-0 lg:order-4 lg:w-1/2">
        <img className="h-[650px] hero-img object-cover absolute bottom-0" src={Banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
