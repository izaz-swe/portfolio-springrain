import React, { useState } from 'react'

const ProjectCard = ({project}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + "...";
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-scale-down rounded py-3"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700">
          {isExpanded
            ? project.description
            : truncateText(project.description, 40)}
        </p>
        <button
          onClick={handleToggle}
          className="text-blue-500 hover:underline mt-2"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default ProjectCard