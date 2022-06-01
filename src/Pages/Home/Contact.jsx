import React from "react";
import { BsFillPersonFill, BsWhatsapp } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <p className="text-lg mb-2">Get in Touch</p>
        <h1 className="text-5xl font-bold text-white">Contact with Me</h1>
      </div>
      <div className="flex justify-between gap-20 mt-12 items-center">
        <div className="w-1/2">
          <form action="">
            <div className="flex items-center gap-5 mb-5 justify-between">
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered w-full bg-slate-700"
              />
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered w-full bg-slate-700"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              class="input input-bordered block border-2 w-full bg-slate-700 mb-5"
            />
            <textarea
              class="textarea textarea-bordered w-full block resize-none bg-slate-700 min-h-[250px]"
              placeholder="Your Message"
            ></textarea>
            <button className="btn rounded-full bg-[#FF014F] font-medium px-8 mt-5 border-none text-gray-50">Send Message</button>
          </form>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl text-white font-semibold">Message Me</h3>
          <p className="my-3 mb-6">
            I am here to listen to you. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Similique, eveniet alias vel dolorum ex laudantium
            natus eos voluptates illum in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ducimus?
          </p>
          <div>
            <div className="flex mt-5 items-center gap-8">
              <BsFillPersonFill className="text-3xl text-[#FF014F]"/>
              <div className="">
                <p className="text-white font-semibold">Name</p>
                <span>Riyad Hossain</span>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-8">
              <HiLocationMarker className="text-3xl text-[#FF014F]"/>
              <div className="">
                <p className="text-white font-semibold">Location</p>
                <span>Khulna, Bangladesh</span>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-8">
              <BsWhatsapp className="text-3xl text-[#FF014F]"/>
              <div className="">
                <p className="text-white font-semibold">WhatsApp</p>
                <span>+880 01703790978</span>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-8">
              <MdAlternateEmail className="text-3xl text-[#FF014F]"/>
              <div className="">
                <p className="text-white font-semibold">Email</p>
                <span>riyadhossain.dev@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
