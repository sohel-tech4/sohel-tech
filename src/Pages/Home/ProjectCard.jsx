import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ProjectCard = ({ Project }) => {
    const { id, name, image, liveLink, githubClientLink, githubServerLink, details, technologies } = Project

    return (
        <div
            data-aos="flip-left"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"

            className="rounded-lg h-full text-white bg-green-600 bg-opacity-20 hover:">
            <div className='p-2 '>
                <div className="h-72 w-full overflow-auto rounded-lg">
                    <img src={image} alt="Card" className="h-auto w-100%" />
                </div>
                <div className="p-2 pb-10">
                    <div className='flex justify-between items-center'>
                        <h1 className='text-center text-xl font-semibold'>{name}</h1>
                    </div>
                    <div className='mt-2'>
                        <div className='mt-2'>
                            <p className='text-lg'>{details}</p>
                        </div>
                        <div className='text-lg gap-2 flex flex-wrap mt-5'>
                            <p>Technology:</p>
                            <p className='flex gap-2 flex-wrap'>
                                {technologies.map((technology, index) => (
                                    <p className='text-lg px-2 rounded bg-[#1C3A54]' key={index}>{technology}</p>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-evenly">
                        <button className='border-lg font-bold'>
                            <Link target='_blank' to={liveLink}>
                                <h1 className='flex text-center items-center gap-2 hover:bg-green-600 bg-green-700 pt-1 pl-2 pr-2 pb-1 rounded-tr-lg rounded-bl-lg'>
                                    <FaExternalLinkAlt></FaExternalLinkAlt>Live
                                </h1>
                            </Link>
                        </button>
                        <button className='border-lg pt-2 pl-2 pr-2 pb-2 font-bold'>
                            <Link target='_blank' to={githubClientLink}>
                                <h1 className='flex text-center items-center gap-2 hover:bg-green-600 bg-green-700  pt-1 pl-2 pr-2 pb-1 rounded-tr-lg rounded-bl-lg'>
                                    <FaGithub></FaGithub>Client
                                </h1>
                            </Link>
                        </button>
                        {githubServerLink ?
                            <>
                                <button className='border-lg pt-2 pl-2 pr-2 pb-2 font-bold'>
                                    <Link target='_blank' to={githubServerLink}>
                                        <h1 className='flex text-center items-center gap-2 hover:bg-green-600 bg-green-700  pt-1 pl-2 pr-2 pb-1 rounded-tr-lg rounded-bl-lg'>
                                            <FaGithub></FaGithub>Server
                                        </h1>
                                    </Link>
                                </button>
                            </>
                            :
                            <></>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;