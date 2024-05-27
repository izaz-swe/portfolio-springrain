import React, { useEffect, useState } from "react";
import profile from "../../assets/images/profile.png";
import axios from "axios";
const dummy = {
  description:
    "I'm Izaz Ahmmed Tuhin, and I graduated from the Department of Software Engineering at Daffodil International University. I am interested in the fields of Cyber Security and Software Engineering. I am outgoing, dedicated, and open-minded. I'm passionate about my work, constantly learning new technologies, and always ready for new challenges.",
  key: "1",
  subtitle:
    "Elevating Web Applications with Robust and Scalable Server-Side Solutions.",
  title: "From Dummy Data",
};
function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState(dummy);
  
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + "...";
  };

  useEffect(() => {
    axios
      .get("http://localhost:8088/about/1") // Replace with your API endpoint
      .then((response) => setData(response.data.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  return (
    <div className="py-14 relative" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h2>
        <div className="flex items-center justify-between lg:justify-evenly flex-col md:flex-row">
          <div className="md:w-[60%]  mb-5 px-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="text-2xl font-semibold text-[#0468AF]">
                {data.title}
              </span>
              <br />
              <span className="text-xl text-slate-700">{data.subtitle}</span>
              <br />
              <br />
            </p>
            <p className="text-justify text-gray-600">
              {isExpanded
                ? data.description
                : truncateText(data.description, 100)}
              <br />
              <button
                onClick={handleToggle}
                className="text-blue-500 hover:underline mt-2"
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            </p>

            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full text-lg shadow-md hover:bg-blue-700 transition duration-300">
              Hire me
            </button>
          </div>
          <div>
            <img
              src={profile}
              alt="Profile"
              className=" h-auto md:h-52 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
