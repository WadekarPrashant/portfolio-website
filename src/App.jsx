import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Project1 from './Components/Projects/Project1'; // Import each project file
import Project2 from './Components/Projects/Project2'; // Import each project file

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Route for the home/landing page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <MyWork />
                <Services />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Routes for individual project pages */}
          <Route path="/projects/1" element={<Project1 />} />
          <Route path="/projects/2" element={<Project2 />} />
          {/* Add more project routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
