import { useState } from "react";
import '../css/Skills.css'

export default function(){
    let [skills,setSkills] = useState([
        "Data Structures & Algorithms",
        "Python",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Django",
        "HTML/CSS"
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