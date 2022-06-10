import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const { id } = useParams();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, [setProjects]);

  console.log(projects);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default ProjectsDetails;
