import React from 'react'
import ProjectBox from '../components/project-box'
import Project from '../components/project-box'
import projects from '../data/projects_data'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import ProjectCard from '../components/project-card';

export default function Projects() {

    const practiceProjects = [
        {
            name:"Tripster - Trip expense calculator cum organiser",
            hostedLink:"https://tripster-trip-expense-calculator-tool.vercel.app/",
            repoLink:"https://github.com/chaitnya23/tripster-trip-expense-calculator-tool"
        },
        {
            name:"Todo app",
            hostedLink:"",
            repoLink:"https://github.com/chaitnya23/todo-list-react-app"
        },
        {
            name:"newsmonk - a news preview website",
            hostedLink:"",
            repoLink:"https://github.com/chaitnya23/react_newsmonk"
        },
        {
            name:"Netflix clone UI ",
            hostedLink:"https://vigilant-mayer-dfb225.netlify.app",
            repoLink:"https://github.com/chaitnya23/react_newsmonk"
        },
      
    ]
    return (
        <section id='projects' className=' pb-5 pt-3 mt-8 text-white'>

            <div className=" mx-auto ">
                <div className="my-16">
                    <p className="text-center text-4xl font-bold">Projects</p>
                    <p className="font-semibold text-center text-gray-400 mt-5 ">My Most Recent Work</p>
                </div>

                <div className=" md:flex flex-wrap gap-8 justify-center w-[70%] m-auto">


                    {
                        projects.map((ele, idx) => {
                            return (
                                <ProjectCard  {...ele} key={idx} />

                            )
                        })
                    }
                    <div className='p-6 bg-white rounded-lg shadow-lg  h-[28rem] md:w-[18rem] w-full '>
                        <div>
                        <p className="font-bold text-lg mb-8 border-b-2">Some pratice projects</p>

                        {
                            practiceProjects.map((pro,i)=>(
                                <a href={pro.hostedLink?pro.hostedLink:pro.repoLink}>
                                <p className="font-semibold my-3 text-blue-900 hover:text-blue-600">{pro.name}</p>
                                </a>
                            ))
                        }
                        </div>
                    </div>


                </div>


            </div>


        </section>
    )
}
