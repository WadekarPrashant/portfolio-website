import React from 'react';
import { useParams } from 'react-router-dom';
import mywork_data from '../../assets/mywork_data'; // Adjust path if needed

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = mywork_data.find((work) => work.w_no === parseInt(id)); // Find the project by ID

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.w_name}</h1>
      <img src={project.w_img} alt={project.w_name} />
      <p>{project.w_full_desc}</p>
    </div>
  );
};

export default ProjectDetails;
