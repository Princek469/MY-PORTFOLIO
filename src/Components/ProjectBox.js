import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectName }) => {
  // Project Descriptions and Links
  const desc = {

    SuperResolutionDesc : "A cross-platform application built using Qt C++ that integrates a Python backend for image super-resolution. It enhances image quality efficiently by leveraging advanced processing techniques and seamless backend integration.",
    SuperResolutionGithub : "https://github.com/your-username/SuperResolution",

    BudgetFriendlyDesc : "A budget management application built using React JS with Firebase authentication. It allows users to securely log in and track their expenses, set budgets, and manage finances effectively in an organized manner",
    BudgetFriendlyGithub: "https://github.com/Princek469?tab=repositories",

    RogFreeDesc: "A website that shows over seven specialized yoga postures for specific diseases or health problems.Built using HTML, CSS and Javascript",
    RogFreeGithub: "https://github.com/Princek469/rog-mukt",

    MemoryGameDesc: "A fun and interactive game that tests your memory by matching pairs of cards. Built using HTML, CSS, and JavaScript for a smooth experience.",
    MemoryGameGithub: "https://github.com/Princek469/memory-remember",

    RockPaperScissorsDesc: "A classic Rock Paper Scissors game that allows you to play against the computer with instant results and a clean user interface.",
    RockPaperScissorsGithub: "https://github.com/Princek469/rock-paper-scissor",

    PasswordGeneratorDesc : "A simple and customizable password generator built using HTML, CSS, and JavaScript. It allows users to create strong passwords by selecting the desired length, including numbers, special characters, and letters to enhance security",
    PasswordGeneratorGithub: "https://github.com/Princek469/password-generator",
  };

  // Show GitHub link only if available
  let showGithub = desc[projectName + 'Github'] ? '' : 'none';

  return (
    <div className='projectBox'>
      <div>
        <h3>{projectName}</h3>
        <p className='desc'>{desc[projectName + 'Desc']}</p>

        {/* GitHub Button */}
        <a 
          style={{ display: showGithub }} 
          href={desc[projectName + 'Github']} 
          target='_blank' 
          rel="noopener noreferrer"
        >
          <button className='projectbtn'>
            <FaGithub /> Github
          </button>
        </a>

        {/* Demo Button (conditionally displayed if available) */}
        <a 
          style={{ display: 'none' }} 
          href={desc[projectName + 'Website']} 
          target='_blank' 
          rel="noopener noreferrer"
        >
          <button className='projectbtn'>
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
