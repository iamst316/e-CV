
/*
    company name -- str
    role --str
    start -- str
    end --str
    details -- []
*/

export default function(props){
    return(<div id='entry'>
        <h1 id='company-name'>{props.company}</h1>
        <div id='tenure-tray'>
            <span id='role'><i>{props.role}</i></span>
            <span id='duration'>{props.start}-{props.end}</span>
        </div>
        <ul id='details'>
            {props.details.map((i)=>{
                return <li>{i}</li>
            })}
        </ul>
    </div>)
}