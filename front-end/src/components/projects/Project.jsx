import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
const dummy = [
  {
    "id": 1,
    "title": "Tech Haven Inventory dummy",
    "description": "Manage your eCommerce business effortlessly with Tech Haven Inventory. This platform offers comprehensive tools for tracking stock, processing orders, and analyzing sales data to help you grow and streamline your online store operations.",
    "imageUrl": "https://res.cloudinary.com/dtnehb5zd/image/upload/v1716808458/Screenshot_from_2024-05-27_17-12-54_gvqcpk.png"
  },
  {
    "id": 2,
    "title": "Learnify",
    "description": "Learnify is an interactive platform where students can study various languages, participate in engaging quizzes, and track their learning progress. It fosters a fun and effective learning environment to enhance language acquisition and retention.",
    "imageUrl": "https://res.cloudinary.com/dtnehb5zd/image/upload/v1716808788/Screenshot_from_2024-05-27_17-19-16_f2yomh.png"
  },
  {
    "id": 3,
    "title": "To Let",
    "description": "To Let is a user-friendly platform that allows people to find rental properties like houses, shops, and apartments. It offers detailed listings, tenant reviews, and an easy-to-use search function to help users find the perfect rental.",
    "imageUrl": "https://res.cloudinary.com/dtnehb5zd/image/upload/v1716808767/tolet_zp3b3m.jpg"
  }
]


const Project = () => {
  const [projects, setProjects] = useState(dummy);

  useEffect(() => {
    axios
      .get("http://localhost:8088/projects") // Replace with your API endpoint
      .then((response) => setProjects(response.data.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  return (
    <div id="projects" className="bg-gray-200">
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
