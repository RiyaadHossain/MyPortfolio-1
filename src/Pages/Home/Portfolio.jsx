import React from "react";
import AutoParts from "../../Assets/Image/AutoParts.png";
import DoctorsPortal from "../../Assets/Image/DoctorsPortal.png";
import ToDoApp from "../../Assets/Image/ToDoApp.png";
import TravelMania from "../../Assets/Image/TravelMania.png";
import LaptopHub from "../../Assets/Image/LaptopHub.png";
import MyWallet from "../../Assets/Image/My Wallet.png"
import DogShop from "../../Assets/Image/Dog-Shop.png"
import NikeReact from "../../Assets/Image/NikeReact.png"
import PolishedEvent from "../../Assets/Image/Polished Event.png"

const Portfolio = () => {
  return (
    <div id="portfolio" className="container mx-auto">
      <div className="text-center">
        <p className="text-lg mb-2">What I made</p>
        <h1 className="text-5xl font-bold text-white">My Portfolio</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">

          {/* Project */}
        <a target="_blank" rel="noreferrer" href="https://auto-parts-001.web.app/" className="p-5 bg-gray-900 rounded-md project-card transition-all ">
          <img className="object-cover overflow-hidden rounded-md" src={AutoParts} alt="" />
          <div className="mt-5">
            <p className="text-[#FF014F]">#1 MERN Project </p>
            <h2 className="text-2xl font-semibold">AutoParts - Manufucturer Website</h2>
          </div>
        </a>

          {/* Project */}
        <a target="_blank" rel="noreferrer" href="https://doctors-portal-003.web.app/" className="p-5 bg-gray-900 rounded-md project-card transition-all ">
          <img className="object-cover rounded-md" src={DoctorsPortal} alt="" />
          <div className="mt-5">
            <p className="text-[#FF014F]">#2 MERN Project </p>
            <h2 className="text-2xl font-semibold">Doctors Portal - Doctors Appointment</h2>
          </div>
        </a>

          {/* Project */}
        <a target="_blank" rel="noreferrer" href="https://laptop-03.web.app/" className="p-5 bg-gray-900 rounded-md project-card transition-all ">
          <img className="object-cover rounded-md" src={LaptopHub} alt="" />
          <div className="mt-5">
            <p className="text-[#FF014F]">#3 Full Stack </p>
            <h2 className="text-2xl font-semibold">Laptop Hub - Warehouse Management</h2>
          </div>
        </a>

          {/* Project */}
        <a target="_blank" rel="noreferrer" href="https://to-do-app-003.web.app/" className="p-5 bg-gray-900 rounded-md project-card transition-all ">
          <img className="object-cover rounded-md" src={ToDoApp} alt="" />
          <div className="mt-5">
            <p className="text-[#FF014F]">#4 React Application </p>
            <h2 className="text-2xl font-semibold">To Do App - Daily Task Manager</h2>
          </div>
        </a>

          {/* Project */}
        <a target="_blank" rel="noreferrer" href="https://common-project-000.web.app/" className="p-5 bg-gray-900 rounded-md project-card transition-all ">
          <img className="object-cover rounded-md" src={TravelMania} alt="" />
          <div className="mt-5">
            <p className="text-[#FF014F]">#5 Front End Project </p>
            <h2 className="text-2xl font-semibold">Travel Mania - Servie Provider</h2>
          </div>
        </a>

          {/* Project */}
        <a target="_blank" rel="noreferrer" href="https://my-wallet-riyad.netlify.app/" className="p-5 bg-gray-900 rounded-md project-card transition-all ">
          <img className="object-cover rounded-md" src={MyWallet} alt="" />
          <div className="mt-5">
            <p className="text-[#FF014F]">#6 JavaScript Project</p>
            <h2 className="text-2xl font-semibold">My Wallet - Calculate Monthly Cost</h2>
          </div>
        </a>

          {/* Project */}
        <a target="_blank" rel="noreferrer" href="https://dog-shop.netlify.app/" className="p-5 bg-gray-900 rounded-md project-card transition-all ">
          <img className="object-cover rounded-md" src={DogShop} alt="" />
          <div className="mt-5">
            <p className="text-[#FF014F]">#7 JavaScript Project</p>
            <h2 className="text-2xl font-semibold">Dog Shop - Buy one Get One Free</h2>
          </div>
        </a>

          {/* Project */}
        <a target="_blank" rel="noreferrer" href="https://convention-center-app.netlify.app/" className="p-5 bg-gray-900 rounded-md project-card transition-all ">
          <img className="object-cover rounded-md" src={PolishedEvent} alt="" />
          <div className="mt-5">
            <p className="text-[#FF014F]">#8 BootStrap Project</p>
            <h2 className="text-2xl font-semibold">Polished Event - Create Your Moment</h2>
          </div>
        </a>

          {/* Project */}
        <a target="_blank" rel="noreferrer" href="https://nike-react-riyad.netlify.app/" className="p-5 bg-gray-900 rounded-md project-card transition-all ">
          <img className="object-cover rounded-md" src={NikeReact} alt="" />
          <div className="mt-5">
            <p className="text-[#FF014F]">#9 BootStrap Project</p>
            <h2 className="text-2xl font-semibold">Penguin Fashion - Ecommerce</h2>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Portfolio;
