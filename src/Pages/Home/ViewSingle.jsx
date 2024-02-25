import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ViewSingle = ({ Project }) => {
    const { id, name, image, liveLink, githubClientLink, githubServerLink, details, technologies } = Project

    return (
        <div className='p-2 '>
            <div className="h-72 w-full  rounded-lg">
                <img src={image} alt="Card" className="" />
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-center text-xl font-semibold'>{name}</h1>
                <div className="flex ">
                    <button className='border-lg font-bold'>
                        <Link target='_blank' to={liveLink}>
                            <h1 className='flex text-center items-center gap-2 bg-black pt-1 pl-2 pr-2 pb-1 rounded-tr-lg rounded-bl-lg'>
                                <FaExternalLinkAlt></FaExternalLinkAlt>Live
                            </h1>
                        </Link>
                    </button>
                    <button className='border-lg pt-2 pl-2 pr-2 pb-2 font-bold'>
                        <Link target='_blank' to={githubClientLink}>
                            <h1 className='flex text-center items-center gap-2 bg-black pt-1 pl-2 pr-2 pb-1 rounded-tr-lg rounded-bl-lg'>
                                <FaGithub></FaGithub>Client
                            </h1>
                        </Link>
                    </button>
                    <button className='border-lg pt-2 pl-2 pr-2 pb-2 font-bold'>
                        <Link target='_blank' to={githubServerLink}>
                            <h1 className='flex text-center items-center gap-2 bg-black pt-1 pl-2 pr-2 pb-1 rounded-tr-lg rounded-bl-lg'>
                                <FaGithub></FaGithub>Server
                            </h1>
                        </Link>
                    </button>
                </div>
            </div>
            <div className='mt-5'>
                <div className='text-center'>
                        <h1 className='uppercase underline text-xl'>Technologies:</h1>
                        <h1 className='text-lg'>{technologies}</h1>
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='uppercase underline text-xl'>Details:</h1>
                        <h1 className='text-lg text-left'>{details}</h1>
                    </div>
                </div>

        </div>
    );
};

export default ViewSingle;