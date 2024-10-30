import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
import profile_img from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Prashant Wadekar,</span> Software developer based in India.</h1>
      <p>An energetic and motivated professional with a passion for problem-solving and a commitment to delivering high-quality results. Possessing an excellent ability to create project plans that align with business objectives, while maintaining visibility and motivating teams to success. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero