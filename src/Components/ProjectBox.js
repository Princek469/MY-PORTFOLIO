import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectName }) => {
  // Project Descriptions and Links
  const desc = {
    SuperResolutionDesc: "A cross-platform application built using Qt C++ that integrates a Python backend for image super-resolution. It enhances image quality efficiently by leveraging advanced processing techniques and seamless backend integration.",
    SuperResolutionGithub: "https://github.com/Princek469/Super-Resolution", // Add website link

    BudgetFriendlyDesc: "A budget management application built using React JS and tailwind css with Firebase authentication. It allows users to securely log in and track their expenses, set budgets, and manage finances effectively in an organized manner and they can also show the history of expenses",
    BudgetFriendlyGithub: "https://github.com/Princek469/Budget-Friendly",
    BudgetFriendlyWebsite: "https://budget-friendly.vercel.app/", // Add website link

    RogFreeDesc: "A website that shows over seven specialized yoga postures for specific diseases or health problems. Built using HTML, CSS and Javascript",
    RogFreeGithub: "https://github.com/Princek469/rog-mukt",
    RogFreeWebsite: "https://rog-mukt.vercel.app/", // Add website link

    MemoryGameDesc: "A fun and interactive game that tests your memory by matching pairs of cards. Built using HTML, CSS, and JavaScript for a smooth experience.",
    MemoryGameGithub: "https://github.com/Princek469/memory-remember",
    MemoryGameWebsite: "https://memory-remember.vercel.app/", // Add website link

    RockPaperScissorsDesc: "A classic Rock Paper Scissors game that allows you to play against the computer with instant results and a clean user interface.",
    RockPaperScissorsGithub: "https://github.com/Princek469/rock-paper-scissor",
    RockPaperScissorsWebsite: "https://rock-paper-scissor-beryl-tau.vercel.app/", // Add website link

    PasswordGeneratorDesc: "A simple and customizable password generator built using HTML, CSS, and JavaScript. It allows users to create strong passwords by selecting the desired length, including numbers, special characters, and letters to enhance security",
    PasswordGeneratorGithub: "https://github.com/Princek469/password-generator",
    PasswordGeneratorWebsite: "https://password-generator-hhtx.vercel.app/", // Add website link
  };

  // Show GitHub link only if available
  let showGithub = desc[projectName + 'Github'] ? '' : 'none';
  // Show Demo link only if available
  let showDemo = desc[projectName + 'Website'] ? '' : 'none';

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

        {/* Demo Button */}
        <a 
          style={{ display: showDemo }} 
          href={desc[projectName + 'Website']} 
          target='_blank' 
          rel="noopener noreferrer"
        >
          <button className='viewBtn'>
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;