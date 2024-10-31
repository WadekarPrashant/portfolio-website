import React, { useEffect } from 'react';
import Contact from '../Contact/Contact';
import './Project1.css'; // Import CSS file for styling
import Landing_Page from '../../assets/Projects images/Spot Round/main_page.jpeg'
const Project1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="project-page">
      {/* Project Header Section */}
      <header className="project-header">
        <h1>Spot Round Web App</h1>
        <p className="project-subtitle">A platform demo for managing spot round admissions.</p>
        <img src={Landing_Page} alt="Spot Round Landing Page" className="project-header-image" />
      </header>

      {/* Login/Signup and Student Profile Page */}
      <section className="project-section">
        <h2>Login/Signup and Student Profile Page</h2>
        <img src="/path-to-your-image/login-signup.png" alt="Login/Signup Page" />
        <p className="heading-small">Features Implemented:</p>
        <ul>
          <li>Secure login and signup.</li>
          <li>Student profile page to retrieve student info.</li>
          <li>Allowing only PDF files for upload for consistency.</li>
          <li>Fixed size for upload to ensure cost efficiency.</li>
        </ul>
      </section>

      {/* Student Dashboard */}
      <section className="project-section">
        <h2>Student Dashboard</h2>
        <img src="/path-to-your-image/student-dashboard.png" alt="Student Dashboard" />
        <p className="heading-small">Features Implemented:</p>
        <ul>
          <li>Personalized dashboard for each registered student.</li>
          <li>Displays all info about the student.</li>
          <li>Displays eligible colleges based on percentile achieved and course chosen.</li>
          <li>Filter feature to sort colleges based on location.</li>
          <li>Apply Now feature to apply to colleges.</li>
          <li>Quick Action feature to edit own info.</li>
        </ul>
      </section>

      {/* Admin Dashboard */}
      <section className="project-section">
        <h2>Admin Dashboard</h2>
        <img src="/path-to-your-image/admin-dashboard.png" alt="Admin Dashboard" />
        <p className="heading-small">Features Implemented:</p>
        <ul>
          <li>Manage students and colleges.</li>
          <li>Displays list of all signed-up students.</li>
          <li>Displays list of students with applied colleges.</li>
          <li>Option to verify students and edit their info.</li>
          <li>Displays colleges with a graph showing number of seats available.</li>
          <li>Displays registered colleges with option to edit and delete entries.</li>
        </ul>
      </section>

        <Contact />

    </div>
  );
};

export default Project1;
