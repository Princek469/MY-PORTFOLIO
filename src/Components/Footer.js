import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <h4>Developed by Prince Kumar Jha</h4>
      <h4>Copyright &copy; 2024 MY-PORTFOLIO</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Princek469?tab=repositories" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/prince-kumar-jha-347373247/" target='_blank'><FaLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer