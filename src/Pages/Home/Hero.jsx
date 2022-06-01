import React from "react";
import Banner from "../../Assets/Image/banner-01.png";
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
    <div className="h-[92vh] flex items-center justify-between container mx-auto">
      <div className="w-1/2">
        <p className="text-2xl font-thin">Welcome to My World</p>
        <h1 className="text-7xl my-6 font-bold text-slate-100">
          Hi, I'm <span className="text-[#FF014F]">Riyad Hossain</span>
        </h1>
        <h1 className="text-5xl text-slate-100 font-bold">
          a{" "}
          <Typewriter
            words={[" Web Developer.", " Coder.", " React Develoer."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
          />
        </h1>
        <p className="mt-6 text-xl">
          A talented, innovative and enthusiastic front-end developer with
          strong attention to detail in order to help build proficient and
          functional websites. Have the proficiency to work closely with other
          developers and creative team members.
        </p>
        <div className="flex justify-between mt-14">
          <div>
            <h3 className="font-bold text-lg">FIND WITH ME</h3>
            <div className="mt-5 flex gap-x-5">
              <a href="/" className="social-box rounded-md flex items-center justify-center w-16 h-16">
               <BsLinkedin className="text-2xl"/>
              </a>
              <div>
                <a href="/" className="social-box rounded-md flex items-center justify-center w-16 h-16">
                  <BsGithub className="text-2xl"/>
                </a>
              </div>
              <div>
                <a href="/" className="social-box rounded-md flex items-center justify-center w-16 h-16">
                  <BsTwitter className="text-2xl"/>
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="banner-box w-1/2">
        <img className="h-[600px] absolute bottom-0" src={Banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
