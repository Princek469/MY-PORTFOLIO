import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiSqlite, SiHtml5, SiCss3,   SiRedux, SiFirebase } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        'C++': <CgCPlusPlus />,
        'Javascript': <DiJavascript1 />,
        'Python' : <FaPython />,
        'Firebase' : <SiFirebase />,
        'React': <FaReact />,
        'Git': <FaGitAlt />,
        'Github': <FaGithub />,
        'SQL': <SiSqlite />,
        'HTML': <SiHtml5 />,
        'CSS': <SiCss3 />,
        'Java': "Java",
        'OOP': "OOP", // You can use the Java icon for OOP as well
        'Redux': <SiRedux />,
        'DSA' : "DSA",
        'Qt' : "Qt(C++)"
    }
    
    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    )
}

export default Skills;