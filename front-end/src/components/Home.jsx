import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      id="home"
      className="container mx-auto flex items-center justify-center lg:w-[100%] h-[60vh] relative"
    >
      <div className="text-center">
        <h2 className="text-xl">Hi, I'm</h2>
        <h2 className="text-3xl my-2">Izaz Ahmmed Tuhin</h2>
        <p>I design and build things.</p>
        <div className="flex justify-center gap-3">
          <button className="px-[20px] py-[5px] rounded mt-6 border border-[#1484da] transition-all duration-600 ease-in-out hover:bg-[#1484da]">
            Download
          </button>
          <Link spy={true} smooth={true} offset={-50} duration={500} to="about">
            <button className="px-[20px] py-[5px] rounded mt-6 bg-[#1484da] border border-[#1484da] transition-all duration-600 ease-in-out hover:bg-transparent">
              Contact
            </button>
          </Link>
        </div>
        <div className="mt-5 cursor-pointer">
          <Link spy={true} smooth={true} offset={-50} duration={500} to="about">
            <FontAwesomeIcon icon={faAnglesDown} className="text-2xl" />
          </Link>
        </div>
        <div className="text-white flex gap-2 flex-col sm:flex-row mt-5 justify-center items-center">
          <FiGithub className="bg-gray-900 p-[6px] text-3xl rounded" />
          <FaLinkedin className="bg-gray-900 p-[6px] text-3xl rounded" />
          <FaFacebook className="bg-gray-900 p-[6px] text-3xl rounded" />
          <FaInstagram className="bg-gray-900 p-[6px] text-3xl rounded" />
        </div>
      </div>
    </div>
  );
}

export default Home;
