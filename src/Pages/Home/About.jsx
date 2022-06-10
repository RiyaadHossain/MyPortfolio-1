import React from "react";
import AboutImg from "../../Assets/Image/RiyadSitting.png";

const About = () => {
  return (
    <div id="about" className="container py-12 mx-auto">
      <div className="text-center">
        <p className="text-lg mb-2">Get to Know Me</p>
        <h1 className="text-5xl font-bold text-white">About Me</h1>
      </div>
      <div className="flex  mt-10 flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <img className="lg:max-w-xl about-img mb-6 lg:mb-0 h-[500px] object-cover border border-[#FF014F] mx-auto" src={AboutImg} alt="" />
        </div>
        <div className="lg:w-1/2">
          <p className="text-[#FF014F] text-xl lg:text-2xl">Who am I?</p>
          <h1 className="text-3xl lg:text-4xl my-5 text-white font-bold">
            I am a professional Front-end Developer
          </h1>
          <p className="text-lg lg:text-xl">
            Front-end Developer with proven skills-building professional MERN
            projects. Capable of continuous learning new and updated
            technologies as I possess tremendous zeal about technology.
            Passionate about learning and developing with a desire to apply
            skills. Eger to tackle more complex problems and continue to find
            ways to maximize user efficiency.
          </p>
          <div class="divider container mx-auto my-12"></div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="">
              <p className="text-lg">
                <span className="text-gray-50">Name:</span> Riyad Hossain
              </p>
              <p className="text-lg mt-3 text-[#f02a65ee]">
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
          <div className="flex mt-6 gap-x-7">
              <div><a href="https://drive.google.com/file/d/1UzAP_pzvOhBoJT_cJWLt1EPOk8BOVt7_/view?usp=sharing" target="_blank" rel="noreferrer" className="btn bg-[#FF014F] px-7 text-white border-0 rounded-full font-medium">Download CV</a></div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
