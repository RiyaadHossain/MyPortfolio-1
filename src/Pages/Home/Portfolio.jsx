import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, [setProjects]);

  return (
    <div id="portfolio" className="container py-12 mx-auto">
      <div className="text-center">
        <p className="text-lg mb-2">What I made</p>
        <h1 className="text-5xl font-bold text-white">My Portfolio</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects?.map((project) => (
          <div
            key={project?.id}
            rel="noreferrer"
            className="p-5 bg-gray-900 rounded-md project-card transition-all "
          >
            <img
              className="object-cover overflow-hidden rounded-md"
              src={project?.img}
              alt=""
            />
            <div className="mt-5">
              <p className="text-[#FF014F]">{project?.tech} </p>
              <h2 className="text-2xl font-semibold">{project?.name}</h2>
            </div>
            <div className="text-center mt-5">
              <Link
                to={`/project-details/${project?.id}`}
                className="btn btn-primary bg-[#FF014F] border-0"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
