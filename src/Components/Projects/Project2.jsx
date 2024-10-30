import React, { useEffect } from 'react';  // Added useEffect import
import Contact from '../Contact/Contact';

const Project2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component is mounted
  }, []);

  return (
    <div>
      <h1>Project 2</h1>
      <p>This is the description of Project 2.</p>
      <Contact />
    </div>
  );
};

export default Project2;
