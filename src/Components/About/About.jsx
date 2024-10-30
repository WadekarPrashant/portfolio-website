import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpeg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Fullstack Developer with professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for Software development is not only reflected in my expertise but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
    <div className="about-skill">
        <p style={{ width: "150px", display: "inline-block" }}>Frontend Web Development</p>
        <hr style={{ width: "80%" }} />
    </div>
    <div className="about-skill">
        <p style={{ width: "150px", display: "inline-block" }}>Backend Web Development</p>
        <hr style={{ width: "70%" }} />
    </div>
    <div className="about-skill">
        <p style={{ width: "150px", display: "inline-block" }}>Android Development</p>
        <hr style={{ width: "75%" }} />
    </div>
    <div className="about-skill">
        <p style={{ width: "150px", display: "inline-block" }}>Machine Learning</p>
        <hr style={{ width: "65%" }} />
    </div>
    <div className="about-skill">
        <p style={{ width: "150px", display: "inline-block" }}>AI</p>
        <hr style={{ width: "50%" }} />
    </div>
    <div className="about-skill">
        <p style={{ width: "150px", display: "inline-block" }}>DevOps</p>
        <hr style={{ width: "40%" }} />
    </div>
</div>

        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>INTERNSHIP</h1>
            <p>EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>9+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>ICPC</h1>
            <p>REGIONALIST</p>
        </div>
      </div>
    </div>
  )
}

export default About
