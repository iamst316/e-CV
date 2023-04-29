import "../css/WorkExp.css";
import WorkEntry from './WorkEntry'
import {useState} from 'react'
export default function(){

    let [workArr, setArr] = useState([{
        company:"Nobious Business Automation",
        role: "Software Engineer Trainee",
        start : 'Feb 2022',
        end: 'Jun 2022',
        details : [
            "Learned new frameworks - Angular, Springboot",
            "Implemented and integrated changes to codebase",
            "Practised extensive debugging",
            "Provided KT to relatively green members"
        ]
    }])
    console.log(workArr)

    return(<div id='work-main'>
        <h1>Work Experience</h1>
        <div id='work-list'>
            {workArr.map((i)=>{
                return <WorkEntry company={i.company} role={i.role} start={i.start} end={i.end} details={i.details}  />
            })}
        </div>
    </div>)
}