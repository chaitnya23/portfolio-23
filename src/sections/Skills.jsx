import React from "react";
import { BiCode } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import SkillBox from "../components/skill-box";
import { data, skills_data } from "../data/skills_data";

function Skills() {
  return (
    <section id="skills" className="text-white">
      <div className="my-16">
        <p className="text-center text-4xl font-bold">Skills & Experiences</p>
      </div>

      <div className="flex justify-center gap-16">
        <div className="w-[35%] gap-8  grid grid-cols-4 justify-center">
          {skills_data.map((ele) => {
            return (
              <div className="flex-col items-center justify-center  gap-6">
                <div
                  className={` w-24 h-24 p-3 flex-col items-center  ${
                    ele.bg ? ele.bg : "bg-black"
                  } mx-auto rounded-full`}
                >
                  <img
                    className={`w-full h-full m-auto object-contain`}
                    src={ele.img}
                    alt=""
                  />
                </div>
                <p className="font-semibold text-center">{ele.name}</p>
              </div>
            );
          })}
        </div>

        <div className="">
          <div className="relative group cursor-pointer">
            <div className="mb-10 ">
              <p className="font-bold text-xl mb-2">Web Developer Intern</p>
              <div className="flex ">
                <p className="font-semibold text-lg text-blue-300">
                  2 November 2023 To
                </p>
                <p className="font-semibold text-lg text-blue-300 ml-2">
                  {" "}
                  28 February 2024
                </p>
              </div>
              <p className=" text-lg text-gray-100">
                Stakesmen , Hyderabad
              </p>
            </div>

            <div className="absolute hidden group-hover:block w-[20rem] shadow-lg top-10 -right-[15rem] shadow-gray-400 z-[100] bg-white p-3">
              <p className="text-gray-500 text-center">
                Worked in both frontend and backend team with tech stack
                react,node js ,mongo db to build a fintech related project named
                kuber to increase user profits in stock market investments with Shoonya and angel one providers
              </p>
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <div>
              <p className="font-bold text-xl mb-2">SDE Intern</p>
              <div className="flex ">
                <p className="font-semibold text-lg text-blue-300">
                  2 March 2024 To
                </p>
                <p className="font-semibold text-lg text-blue-300 ml-2">
                  28 May 2024
                </p>
              </div>
              <p className=" text-lg text-gray-100">
                Beanbyte Software ,Jaipur
              </p>
            </div>
            <div className="absolute hidden group-hover:block w-[20rem] shadow-lg top-10 -right-[15rem] shadow-gray-400 z-[100] bg-white p-3">
              <p className="text-gray-500 text-center">
                Worked in frontend team with react js and Mantise UI to build a
                Management software to manage the stocks,product and finances
                for petroleam bussinesses named as petrobyte
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
