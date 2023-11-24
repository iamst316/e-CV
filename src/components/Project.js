import github from '../img/github.svg'
import gitlab from '../img/gitlab.svg';

export default function(props){
    return(<div id='project-entry'>
        <a target="_blank" href={props.live}><h1 id='project-name'>{props.title}</h1></a>
        <div id='link-tray'>
            {
                props.link[11]=="h" ?

                <a target="_blank" href={props.link}><img src={github} id='github'/></a> :

                <a target="_blank" href={props.link}><img src={gitlab} id='github'/></a> 
            }
            
        </div>
        <ul id='details'>
            {props.details.map((i)=>{
                return <li>{i}</li>
            })}
        </ul>
    </div>)
}