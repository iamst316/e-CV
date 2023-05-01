import { useState } from "react"
import '../css/SideIndex.css'

export default function(){
  let [tabArr, setTab] = useState([
    "About Me",
    "Contact Me",
    "Work Experience",
    "Projects",
    "Education",
    "Skills"
  ])
  let [posArr, setPos] = useState([
    114,
    435.28125,
    673.28125,
    898.28125,
    1580.140625,
    1983.140625
  ])
  // let i = document.getElementById('about-main').getBoundingClientRect();

  // console.log(i.top);
    return(<div id='index-main'>
      {tabArr.map((i,idx)=>{
        return <div id='tab' onClick={()=>{
          window.scroll({
            top:posArr[idx],
            behavior: "smooth"
          })
        }}>{i}</div>
      })}
    </div>)
}
