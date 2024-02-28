import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Personal = () => {
    return (
        <div
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"

            className='md:flex pt-20 justify-center items-center gap-20'>
            <div>
                <img src="/my photo.PNG" className='' alt="" />
            </div>
            <div
                className='text-center md:text-left p-3'>
                <p className='md:text-2xl text-xl mb-5'>As a web development fresher focusing on React.js, I am eager to apply my knowledge and skills to create compelling web applications. I have a solid foundation in JavaScript and have recently gained experience working with React.js, which has sparked my passion for front-end development. I am well-versed in JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind, and Bootstrap, enabling me to build dynamic and engaging web applications.</p>
                <div className='text-2xl mt-5 mb-5 md:text-left text-center'>
                    <button className='mr-5 border p-2 rounded-full hover:text-green-600 hover:border-green-600'><Link to="https://www.linkedin.com/in/soheltech" target='_blank'><FaLinkedinIn /></Link></button>
                    <button className='mr-5 border p-2 rounded-full hover:text-green-600 hover:border-green-600'><Link to="https://github.com/sohel-tech4" target='_blank'><FaGithub /></Link></button>
                    <button className='mr-5 border p-2 rounded-full hover:text-green-600 hover:border-green-600'><Link to="https://wa.me/qr/I4W5JCCE36W6E1" target='_blank'><FaWhatsapp /></Link></button>
                    <button className='mr-5 border p-2 rounded-full hover:text-green-600 hover:border-green-600'><Link to="https://t.me/bdsohel97" target='_blank'><FaTelegram /></Link></button>
                    <button className='mr-5 border p-2 rounded-full hover:text-green-600 hover:border-green-600'><Link to="https://www.facebook.com/soheltech4" target='_blank'><FaFacebook /></Link></button>
                </div>
            </div>
            
        </div>
    );
};

export default Personal;