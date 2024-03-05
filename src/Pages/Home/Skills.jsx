import React, { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
AOS.init();

const Skills = () => {

    const [Frontend, setFrontend] = useState([])
    const [Backend, setBackend] = useState([])
    const [Tolls, setTolls] = useState([])
    const [Others, setOthers] = useState([])

    useEffect(() => {
        fetch("skills.json")
            .then(data => data.json())
            .then(data => {

                const frontendSkills = data.filter(skill => skill?.category === "Frontend");
                const backendSkills = data.filter(skill => skill?.category === "Backend");
                const tollsSkills = data.filter(skill => skill?.category === "Tolls");
                const othersSkills = data.filter(skill => skill?.category === "Others");
                setFrontend(frontendSkills);
                setBackend(backendSkills);
                setTolls(tollsSkills);
                setOthers(othersSkills);
            })
    }, []);

    return (
        <>
            <div className='container mx-auto pt-20 mb-28'>
                <h1 className='pt-5 mb-5 text-2xl md:text-4xl text-center font-semibold'>My Professional Skills</h1>
                <Tabs className="container mx-auto p-5">
                    <TabList className="flex flex-wrap gap-3 items-center mb-10 text-white">
                        <Tab className="bg-green-600 px-5 rounded-md py-2"><button>Frontend</button></Tab>
                        <Tab className="bg-green-600 px-5 rounded-md py-2"><button>Backend</button></Tab>
                        <Tab className="bg-green-600 px-5 rounded-md py-2"><button>Tolls</button></Tab>
                        <Tab className="bg-green-600 px-5 rounded-md py-2"><button>Other</button></Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5 md:grid-cols-7 gap-y-10 items-center'>
                            {Frontend.map((skill) => {
                                return <SkillsCard key={skill.length} skill={skill}></SkillsCard>
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel>
                            <div className='grid grid-cols-3 gap-5 md:grid-cols-7 gap-y-10 items-center'>
                                {Backend.map((skill) => {
                                    return <SkillsCard key={skill.length} skill={skill}></SkillsCard>
                                })}
                            </div>
                    </TabPanel>
                    <TabPanel>
                            <div className='grid grid-cols-3 gap-5 md:grid-cols-7 gap-y-10 items-center'>
                                {Tolls.map((skill) => {
                                    return <SkillsCard key={skill.length} skill={skill}></SkillsCard>
                                })}
                            </div>
                    </TabPanel>
                    <TabPanel>
                            <div className='grid grid-cols-3 gap-5 md:grid-cols-7 gap-y-10 items-center'>
                                {Others.map((skill) => {
                                    return <SkillsCard key={skill.length} skill={skill}></SkillsCard>
                                })}
                            </div>
                    </TabPanel>
                </Tabs>
            </div>


        </>
    );
};

export default Skills;
