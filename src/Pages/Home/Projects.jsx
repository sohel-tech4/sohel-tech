import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
const Projects = () => {

    const [AllProject, setAllProject] = useState([])

    useEffect(() => {
        fetch("projects.json")
            .then(data => data.json())
            .then(data => {
                setAllProject(data);
            })
    }, []);


    return (
        <div className='pt-24'>
            <h1 className='text-2xl md:text-4xl mb-10 text-center font-semibold'>Projects I’ve done</h1>
            <div className='grid p-2 mb-56 md:grid-cols-3 gap-5 justify-center items-center container mx-auto'>
                {AllProject.map((Project) => {
                    return <ProjectCard key={Project.id} Project={Project}>
                    </ProjectCard>
                })}
            </div>
        </div>
    );
};

export default Projects;