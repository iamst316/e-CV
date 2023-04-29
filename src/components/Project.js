
/*
    title : str
    details = []
*/

export default function(props){
    return(<div id='project-entry'>
        <a target="_blank" href={props.live}><h1 id='project-name'>{props.title}</h1></a>
        <div id='link-tray'>
            <a target="_blank" href={props.github}>Link</a> 
        </div>
        <ul id='details'>
            {props.details.map((i)=>{
                return <li>{i}</li>
            })}
        </ul>
    </div>)
}