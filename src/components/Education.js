// import "../css/WorkExp.css";
import EdEntry from './EdEntry'
import {useState} from 'react'
import '../css/Education.css';


export default function(){

    let [edArr, setArr] = useState([{
        school: "10x Academy",
        degree: "Full-Stack Developer Bootcamp",
        duration: "Sept 2022 - May 2023",
        details : [
            
        ]
    },
    {
        school: "BML Munjal University",
        degree: "B.Tech in Mechanical Engineering",
        duration: "Aug 2016 - Sept 2020",
        details : [
            "CGPA - 7.17/10"
        ]
    },
    {
        school: "The Millennium School",
        degree: "Senior Secondary - Class XII",
        duration: "2014 - 2015",
        details : [
            "Percentage - 92%"
        ]
    },
    {
        school: "The Millennium School",
        degree: "Secondary - Class X",
        duration: "2012 - 2013",
        details : [
            "CGPA- 10/10"
        ]
    },
])
    // console.log(workArr)
    
    return(<div id='ed-main'>
        <h1 id='ed-main-title'>Education</h1>
        <hr />
        <div id='ed-list'>
            {edArr.map((i)=>{
                return <EdEntry school={i.school} degree={i.degree} duration={i.duration} details={i.details} />
            })}
        </div>
    </div>)
}