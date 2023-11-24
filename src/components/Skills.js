import { useState } from "react";
import '../css/Skills.css'

export default function(){
    let [skills,setSkills] = useState([
        "Data Structures & Algorithms",
        "Python",
        "JavaScript",
        "Java",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Django",
        "HTML5/CSS3",
        "Angular",
        "Spring Boot",
        "SQL",
        "PHP",
        "GSAP"
    ])
    
    return(<div id='skills-main'>
        <h1 id='skills-title'>
            Skills
        </h1>
        <hr />
        <ul id='skills-list'>
            {skills.map((i)=>{
                return <li id='skill'>{i}</li>
            })}
        </ul>
    </div>)
}