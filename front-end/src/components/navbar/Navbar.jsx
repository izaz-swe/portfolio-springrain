import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
function Navbar() {
  const [click, setClick] = useState(false);
  const content = (
    <>
      <div className="lg:hidden absolute top-16 w-full left-0 right-0 bg-slate-900">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} offset={-50} duration={500} to="home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Home
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            to="projects"
          >
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Projects
            </li>
          </Link>

          <Link spy={true} smooth={true} offset={-50} duration={500} to="about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              About
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            to="contact"
          >
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-slate-900 h-10vh flex justify-between text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <img className='w-36' src={logo} alt="logo" />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                to="home"
              >
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  {" "}
                  Home
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                to="projects"
              >
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  {" "}
                  Projects
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                to="about"
              >
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  {" "}
                  About
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                to="contact"
              >
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  {" "}
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block md:hidden transition"
          onClick={() => setClick(!click)}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
