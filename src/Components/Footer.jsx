import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-slate-900 mt-16">
      <div className="flex gap-5 container mx-auto py-16">
        <div className="w-3/6">
          <h3 className="uppercase text-white text-xl">My Career</h3>
          <p className="my-6 font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            obcaecati inventore quibusdam! Neque nesciunt commodi numquam aut
            voluptatum quisquam? Dicta!
          </p>
          <p className="font-thin">
            Copyright ©2022 All rights reserved | This portfolio is made with ❤
            by <br /> <span className="text-[#FF014F]">Riyad</span>
          </p>
        </div>
        <div className="w-2/6">
          <h3 className="uppercase text-white text-xl">Newsletter</h3>
          <p className="mt-6 font-thin">Stay updated with my latest blog</p>
          <div class="form-control rounded-none">
            <div class="input-group mt-5">
              <input
                type="text"
                placeholder="Drop Your E-mail"
                class="input bg-slate-600 text-black"
              />
              <button class="btn btn-square hover:bg-[#7d0328]">
                <BsArrowRight className="" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/6">
          <h3 className="uppercase text-white text-xl">Follow Me</h3>
          <p className="mt-6 font-thin">Let's Be Social</p>
          <div className="flex items-center gap-5 mt-3">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/riyaad-hossain/">
              <AiFillLinkedin className="text-3xl hover:text-[#FF014F] hover:translate-y-1 transition-all" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/Riyaad_Hossain">
              <AiFillTwitterCircle className="text-3xl hover:text-[#FF014F] hover:translate-y-1 transition-all" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/RiyaadHossain">
              <AiFillGithub className="text-3xl hover:text-[#FF014F] hover:translate-y-1 transition-all" />
            </a>
            <a target="_blank" rel="noreferrer" href="/">
              <AiFillFacebook className="text-3xl hover:text-[#FF014F] hover:translate-y-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
