import React from "react";
import Scroller from "./Scroller";
import Skills from "./Skills";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineGoogle } from "react-icons/ai";

import './home.css'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { modeContext } from "../ModeContext";

function Home() {

  const { darkMode } = useContext(modeContext);

  return (
    <div className="h-[70vh]">

      <div className="home md:w-3/4 w-[90%] md:flex mx-auto  p-2 md:mt-28 mt-10">

        <div className="flex gap-5">

          <div className="contact-me-sec flex px-4 w-1/5 h-64">
            <div className="flex-col gap-10 my-auto">
              <a href={'https://www.linkedin.com/in/chaitnya-giri-87b180228/'}>
                <FiLinkedin size={23} className="text-purple-600 cursor-pointer" />
              </a>
              <a href={'https://github.com/chaitnya23'}>
                <FiGithub size={23} className="mt-8 text-purple-600 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/chaitnyaofficial_23_/?hl=en">
                <FiInstagram size={23} className="mt-8 text-purple-600 cursor-pointer" />
              </a>
  

            </div>

          </div>

          <div className="mr-10 profile-img">
            <div></div>
         
          </div>

        </div>

        <div className={` ${!darkMode ? "text-gray-600" : "text-gray-200"} details md:ml-10 md:mt-0 mt-16 md:w-2/5`}>
          <p className="text-4xl font-bold">Hi ,I'am Chaitnya</p>
          <p className="font-semibold mt-4 text-lg">Full stack developer</p>
          <p className="mt-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Ea quaerat perspiciatis veniam unde enim quibusdam.</p>

          <button>Contact Me</button>
        </div>


      </div>
    </div>
  );
}

export default Home;
