import React from "react";
import AboutImg from "../../Assets/Image/banner-01.png";

const About = () => {
  return (
    <div id="about" className="container mx-auto">
      <div className="text-center">
        <p className="text-lg mb-2">Get to Know Me</p>
        <h1 className="text-5xl font-bold text-white">About Me</h1>
      </div>
      <div className="flex justify-evenly items-center">
        <div className="w-1/2">
          <img className="max-w-md" src={AboutImg} alt="" />
        </div>
        <div className="w-1/2">
          <p className="text-[#FF014F] text-2xl">Who am I?</p>
          <h1 className="text-4xl my-5 text-white font-bold">
            I am a professional Front-end Developer
          </h1>
          <p className="text-xl">
            Front-end Developer with proven skills-building professional MERN
            projects. Capable of continuous learning new and updated
            technologies as I possess tremendous zeal about technology.
            Passionate about learning and developing with a desire to apply
            skills. Eger to tackle more complex problems and continue to find
            ways to maximize user efficiency.
          </p>
          <div class="divider container mx-auto my-12"></div>
          <div className="flex justify-between">
            <div className="">
              <p className="text-lg">
                <span className="text-gray-50">Name:</span> Riyad Hossain
              </p>
              <p className="text-lg mt-3 text-[#FF014F]">
                <span className="text-gray-50">Email:</span>{" "}
                riyadhossain.dev@gmail.com
              </p>
            </div>
            <div className="">
              <p className="text-lg">
                <span className="text-gray-50">Age:</span> 21
              </p>
              <p className="text-lg mt-3">
                <span className="text-gray-50">From:</span> Narail, Khulna
              </p>
            </div>
          </div>
          <div className="flex justify-start mt-6 gap-x-7">
              <div><button className="btn bg-[#FF014F] px-7 text-white border-0 rounded-full font-medium">Download CV</button></div>
              <div class="divider w-28"></div>
              <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
