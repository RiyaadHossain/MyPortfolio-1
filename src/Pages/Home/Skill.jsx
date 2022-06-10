import React from "react";
import { BsFillAwardFill } from "react-icons/bs";

const Skill = () => {
  return (
    <div id="skill" className="container py-12 mx-auto">
      <div className="text-center mb-11">
        <p className="text-lg mb-2">What I can Do</p>
        <h1 className="text-5xl font-bold text-white">My Skill</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ====================================== Front end ======================================*/}
        <div className=" skill-box p-12 rounded-md">
          <div className="">
            <h3 className="text-2xl text-center font-bold mt-6 mb-8 text-white">
              Front End
            </h3>
            <div className="flex justify-evenly  mt-3 items-center">
              {/* One Side */}
              <div>
                <div>
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> HTML 5
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> BootStrap 5
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> JavaScript
                  </p>
                  <span className="text-xs ml-6">intermediate</span>
                </div>
              </div>
              {/* Two Side */}
              <div>
                <div>
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> CSS 3
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Tailwind
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> React.js
                  </p>
                  <span className="text-xs ml-6">intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ====================================== Backen end ======================================*/}
        <div className=" skill-box p-12 rounded-md">
          <div className="">
            <h3 className="text-2xl text-center font-bold mt-6 mb-8 text-white">
              Backend End
            </h3>
            <div className="flex justify-evenly  mt-3 items-center">
              {/* One Side */}
              <div>
                <div>
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Node
                  </p>
                  <span className="text-xs ml-6">Beginner</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Express.js
                  </p>
                  <span className="text-xs ml-6">Intermediate</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Firebase
                  </p>
                  <span className="text-xs ml-6">Intermediate</span>
                </div>
              </div>
              {/* Two Side */}
              <div>
                <div>
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Nodemon
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> MongoDB
                  </p>
                  <span className="text-xs ml-6">Beginner</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> JWT Token
                  </p>
                  <span className="text-xs ml-6">Beginner</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ====================================== Technologies ======================================*/}
        <div className=" skill-box p-12 rounded-md">
          <div className="">
            <h3 className="text-2xl text-center font-bold mt-6 mb-8 text-white">
              Technologies
            </h3>
            <div className="flex justify-evenly  mt-3 items-center">
              {/* One Side */}
              <div>
                <div>
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Git
                  </p>
                  <span className="text-xs ml-6">Intermediate</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Netlify
                  </p>
                  <span className="text-xs ml-6">Intermediate</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Heroku
                  </p>
                  <span className="text-xs ml-6">Beginner</span>
                </div>
              </div>
              {/* Two Side */}
              <div className="textcen">
                <div>
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> GitHub
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Postman
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Figma
                  </p>
                  <span className="text-xs ml-6">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* ====================================== React ======================================*/}
        <div className=" skill-box p-12 rounded-md">
          <div className="">
            <h3 className="text-2xl text-center font-bold mt-6 mb-8 text-white">
              React Tools
            </h3>
            <div className="flex justify-evenly  mt-3 items-center">
              {/* One Side */}
              <div>
                <div>
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> JSX
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> React Router
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> React Form
                  </p>
                  <span className="text-xs ml-6">Beginner</span>
                </div>
              </div>
              {/* Two Side */}
              <div className="textcen">
                <div>
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> React Hook
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Context API 
                  </p>
                  <span className="text-xs ml-6">Intermediate</span>
                </div>
                <div className="mt-3">
                  <p className="text-lg font-semibold flex items-center">
                    <BsFillAwardFill className="mr-2 text-[#d72a5e]" /> Components
                  </p>
                  <span className="text-xs ml-6">Advance</span>
                </div>
              </div>
            </div>
          </div>
        </div>


       


      </div>
    </div>
  );
};

export default Skill;
