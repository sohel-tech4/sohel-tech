import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewSingle from './ViewSingle';

const ViewProject = () => {
    const [Projects, setProject] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch('../../../public/projects.json')
            .then(data => data.json())
            .then(data => {
                const filtered = data.filter((d) => d.id === id);
                setProject(filtered);
            })
    }, [])

    return (
        <div>
            {
                Projects.map(Project => <ViewSingle key={Project.id} Project={Project}></ViewSingle>)
            }
        </div>
    );
};

export default ViewProject;