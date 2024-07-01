import React from "react";
import { useContext } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { modeContext } from "../ModeContext";

export default function About() {
  const { darkMode } = useContext(modeContext);

  const downloadResume = () => {
    fetch("../myResume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
        window.alert("Thank you  !!");
      });
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="text-center ">
        <p className="text-3xl font-bold mb-5">About me</p>
        <p className="font-semibold text-gray-200">My Introduction</p>
      </div>

      <div className="w-3/4 mx-auto shadow p-4 mt-12 md:flex gap-16">
        <div className="profile h-[20rem] w-[60%]">
          <img
            className="object-contain mt-10 rounded-lg h-full w-full"
            src="images/about-me.jpg"
            alt=""
          />
        </div>

        <div className="info  p-1 mx-10 font-semibold mt-4">
          <p className={``}>
            I'm a web developer and a proggramer with a focus on the MERN stack,
            but still exploring other technologies and frameworks that catch my
            interest! if you're looking for a developer to add to your team, I'd
            love to hear from you!
            <p className={` mt-6 font-light`}>
              currently pursuing B.tech degree from Indian Institute Of
              Information Technology ,Dharwad in computer Science Engineering
            </p>
          </p>

          <div className="md:grid grid-cols-3  gap-6 mt-7">
            <div className="shadow-lg rounded-lg p-3 text-center bg-orange-500">
              <p className="text-3xl  font-bold">2.5+</p>
              <p>Years Experiance In web</p>
            </div>

            <div className="shadow-lg rounded-lg p-3 text-center bg-orange-500">
              <p className="text-3xl  font-bold">8+</p>
              <p>Web Dev Projects</p>
            </div>

            <div className="shadow-lg rounded-lg p-3 text-center bg-orange-500">
              <p className="text-3xl  font-bold">6</p>
              <p>Months of internship experience</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded w-fit p-2 mt-5 bg-purple-500 hover:bg-purple-600 text-white">
            <button className="font-bold" onClick={downloadResume}>
              Download Resume
            </button>
            <AiOutlineDownload size={25} />
          </div>
        </div>
      </div>
    </section>
  );
}
