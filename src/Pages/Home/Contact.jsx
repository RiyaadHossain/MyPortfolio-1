import React from "react";
import { BsFillPersonFill, BsWhatsapp } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto">
      <div className="text-center">
        <p className="text-lg mb-2">Get in Touch</p>
        <h1 className="text-5xl font-bold text-white">Contact with Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-20 mt-12 ">
        <div className="lg:w-1/2">
          <form action="https://formsubmit.co/riyadhossain.dev@gmail.com" method="POST">
            <div className="flex items-center gap-5 mb-5 justify-between">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                class="input input-bordered w-full bg-[#121b31]"
              />
              <input
                type="text"
                name="Email"
                placeholder="Email"
                class="input input-bordered w-full bg-[#121b31]"
              />
            </div>
            <input
              type="text"
              name="Subject"
              placeholder="Subject"
              class="input input-bordered block border-2 w-full bg-[#121b31] mb-5"
            />
            <textarea
              name="Message"
              class="textarea textarea-bordered w-full block resize-none bg-[#121b31] min-h-[250px]"
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full bg-[#FF014F] font-medium px-8 mt-5 border-none text-gray-50"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-2xl text-[#FF014F] font-semibold">Message Me</h3>
          <p className="my-3 mb-6">
            If you have any offer, queries, suggetions, opinion, objection -
            feel free to let me know through email, phone or any other socila
            media platform that I have shared in my portfolio.
          </p>
          <div>
            <div className="flex mt-5 items-center gap-8">
              <BsFillPersonFill className="text-3xl text-[#FF014F]" />
              <div className="">
                <p className="text-white font-semibold">Name</p>
                <span>Riyad Hossain</span>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-8">
              <HiLocationMarker className="text-3xl text-[#FF014F]" />
              <div className="">
                <p className="text-white font-semibold">Location</p>
                <span>Khulna, Bangladesh</span>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-8">
              <BsWhatsapp className="text-3xl text-[#FF014F]" />
              <div className="">
                <p className="text-white font-semibold">WhatsApp</p>
                <span>+880 01703790978</span>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-8">
              <MdAlternateEmail className="text-3xl text-[#FF014F]" />
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
