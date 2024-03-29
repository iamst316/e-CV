import { useState } from "react"
import '../css/SideIndex.css'


export default function(){
  let [tabArr, setTab] = useState([
    {
      tab: "About Me",
      link: "#about-main"
    },
    {
      tab: "Contact Me",
      link: "#contact-main"
    },
    {
      tab: "Work Experience",
      link: "#work-main"
    },
    {
      tab: "Projects",
      link: "#project-main"
    },
    {
      tab: "Education",
      link: "#ed-main"
    },
    {
      tab: "Skills",
      link: "#skills-main"
    },
    
    // "Contact Me",
    // "Work Experience",
    // "Projects",
    // "Education",
  ])
  let [posArr, setPos] = useState([
    114,
    435.28125,
    673.28125,
    898.28125,
    1580.140625,
    1983.140625
  ])
  
    return(<div id='index-main'>
      {tabArr.map((i,idx)=>{
        return <div id='tab' onClick={()=>{
          
        }}><a href={i.link}>{i.tab}</a></div>
      })}
    </div>)
}
