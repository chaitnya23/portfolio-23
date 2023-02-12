import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className=' mt-12 bg-purple-500 relative h-64'>
            <div className="w-3/4 mx-auto absolute md:top-12 top-5 md:left-52 left-20 md:flex gap-32">

                <div className="text-white">
                    <p className="text-3xl font-bold ">Chaitnya</p>
                    <p className="text-sm font-semibold mt-4">Fullstack web Developer</p>
                </div>

                <ul className="md:flex my-2 gap-6 font-semibold text-white">
                    <li>Projects </li>
                    <li>Contact Me</li>
                    <li>About me</li>
                </ul>

                <div className="icons flex gap-3">
                
                    <FaFacebookF color='white' />
                    <FaInstagram color='white' />
                    <FaGithub color='white' />

                </div>
            </div>
        </div>
    )
}
