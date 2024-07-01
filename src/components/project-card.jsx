import React from 'react'

export default function ProjectCard({siteLink,repoLink, poster,title,description }) {
    return (
        <a href={repoLink}>
        <div className='p-6 bg-white text-black rounded-lg shadow-lg  h-[28rem] md:w-[18rem] w-full hover:scale-105 transition-all duration-500 cursor-pointer'>
            <div>
                <img src={poster} className='h-[15rem] w-full object-cover rounded-md' alt="" />
                <p className='font-bold text-center my-3 text-lg'>{title}</p>
                <p>{description}</p>
            </div>
        </div>
        </a>
    )
}
