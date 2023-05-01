
/*
    title : str
    details = []
*/

export default function (props) {
    return (<div id='ed-entry'>
        <h1 id='school-name'>{props.school}</h1>
        <div id='ed-tray'>
            <span id='ed-degree'><i>{props.degree}</i></span>
            <span id='ed-duration'>&#9642; {props.duration}</span>
        </div>
        <ul id='ed-details'>
            {props.details.map((i) => {
                return <li>{i}</li>
            })}
        </ul>
    </div>)
}