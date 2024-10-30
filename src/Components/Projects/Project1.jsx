import React, { useEffect } from 'react';
import Contact from '../Contact/Contact';
import './Project1.css'; // Import CSS file for styling

const Project1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="project-page">
      {/* Project Header Section */}
      <header className="project-header">
        <h1>Project 1: Currencee</h1>
        <p className="project-subtitle">A currency conversion platform that simplifies international transactions.</p>
        <img src="/path-to-your-image/currencee-header.png" alt="Project 1" className="project-header-image" />
      </header>

      {/* Project Overview Section */}
      <section className="project-overview">
        <h2>Overview</h2>
        <p>This project involved creating an easy-to-use platform that offers real-time currency conversion, historical data, and personalized user settings. The platform was built using React, Node.js, and integrated with external APIs for real-time data.</p>
        <p>The goal was to make international financial transactions easier for users by offering transparent rates and an intuitive user experience.</p>
      </section>

      {/* Project Features Section */}
      <section className="project-features">
        <h2>Key Features</h2>
        <ul>
          <li>Real-time currency conversion with support for multiple currencies.</li>
          <li>Historical exchange rate data for analysis.</li>
          <li>Customizable notifications for exchange rate changes.</li>
          <li>Secure transactions and multi-factor authentication for users.</li>
        </ul>
      </section>

      {/* Project Technologies Section */}
      <section className="project-technologies">
        <h2>Technologies Used</h2>
        <div className="tech-icons">
          <img src="/path-to-your-image/react-logo.png" alt="React" />
          <img src="/path-to-your-image/nodejs-logo.png" alt="Node.js" />
          <img src="/path-to-your-image/api-logo.png" alt="API Integration" />
        </div>
      </section>

      {/* Call to Action (Contact Section) */}
      <section className="project-contact">
        <h2>Interested in learning more?</h2>
        <p>Feel free to reach out if you want to collaborate or discuss more about this project.</p>
        <Contact />
      </section>
    </div>
  );
};

export default Project1;
