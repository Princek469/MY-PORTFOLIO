import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1> <p>
            Hi, my name is <b>Prince Kumar Jha</b> and I am from Noida, India. I'm a <b>Software Developer</b> and a final year college student pursuing <b>BTech in Computer Science Engineering</b>. <br/><br/>
            I have gained hands-on experience in designing, developing, and implementing software applications through my internship as a <b>software developer</b> at Tata Advanced Systems Limited. During my time there, I contributed to optimizing software processes and solving complex problems, which enhanced my ability to adapt to evolving project requirements. <br/><br/>
            I am passionate about creating original projects with beautiful designs, and you can check out some of my work in the projects section. I am also <b>open</b> to new collaborations or opportunities where I can contribute and grow. Feel free to connect with me.<br/>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Java' />
        <Skills skill='C++' />
        <Skills skill='Python' />
        <Skills skill='OOP' />
        <Skills skill='DSA' />
        <Skills skill='SQL' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Redux' />
        <Skills skill='Firebase' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Qt' />
      </div>
    </>
  )
}

export default About;