import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SkillsCard = ({ skill }) => {
    return (    
        
        <div

            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"

            className='bg-green-600 bg-opacity-10 p-2 border-green-600 rounded-lg md:h-44 h-32 w-24 md:w-32 text-center grid'>
            <img className='md:w-28 w-24 flex justify-start container mx-auto p-5 text-center transition-transform duration-300 transform hover:scale-110' src={skill.image} alt="" />
            <h1 className='absolute bottom-0 left-0 w-full mb-2 uppercase'>{skill.name}</h1>
        </div>
    );
};

export default SkillsCard;