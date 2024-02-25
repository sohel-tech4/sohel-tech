import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Developer from './Developer';
const Home = () => {
    return (
        <div className='container mx-auto pt-28'>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"

                className='md:flex justify-center items-center gap-10'>

                <div

                    className='text-center md:text-left'>
                    <p className='md:text-3xl text-2xl'>Hey there, my name is</p>
                    <h1 className='text-green-500 font-bold text-5xl md:text-6xl py-5'>Sohel Rana</h1>
                    <h1 className='md:text-4xl text-2xl mb-5'>
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer', 1000,
                                'MERN Stack Developer', 1000,
                                'Full Stack Developer', 1000,
                                'React Developer', 1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: "34px", display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='md:text-2xl text-xl mb-5'>I am Sohel Rana. I am a front-end web developer. I have been working in this sector for the past 1+ years. I consider coding as the most important thing in my life. I love to tackle complex problems.</p>

                    {/* <div className='md:flex md:text-center md:items-center gap-5'>
                        <button className='border-2 m-2 border-green-600 border-lg pt-2 pl-2 pr-2 pb-2 text-left rounded-tr-lg rounded-bl-lg font-bold hover:bg-green-600 '>
                            <Link target='_blank' to="https://drive.google.com/file/d/1wOzwdpKHsViJnQVv8hHcF4c71ehXeHyU/view?usp=sharing">
                                <h1 className='bg-green-600  pt-1 pl-2 pr-2 pb-1 rounded-tr-lg rounded-bl-lg'>RESUME</h1>
                            </Link>
                        </button>
                        <button className='border-2 m-2 border-green-600 border-lg pt-2 pl-2 pr-2 pb-2 text-left rounded-tr-lg rounded-bl-lg font-bold hover:bg-green-600 '>
                            <Link target='_blank' to="https://github.com/soheltech4">
                                <h1 className='flex text-center  items-center gap-2 bg-green-600 pt-1 pl-2 pr-2 pb-1 rounded-tr-lg rounded-bl-lg'>
                                    <FaGithub></FaGithub>GitHub
                                </h1>
                            </Link>
                        </button>
                        <button className='border-2 m-2 border-green-600 border-lg pt-2 pl-2 pr-2 pb-2 text-left rounded-tr-lg rounded-bl-lg font-bold hover:bg-green-600 '>
                            <Link target='_blank' to="https://www.linkedin.com/in/soheltech">
                                <h1 className='flex text-center  items-center gap-2 bg-green-600 pt-1 pl-2 pr-2 pb-1 rounded-tr-lg rounded-bl-lg'>
                                    <FaLinkedin></FaLinkedin>Linkedin
                                </h1>
                            </Link>
                        </button>
                    </div> */}
                </div>
                <div className='w-full'>
                    <Developer></Developer>
                </div>
            </div>
        </div>
    );
};

export default Home;
