// import "../css/WorkExp.css";
import Project from './Project'
import {useState} from 'react'
import '../css/Projects.css';



export default function(){

    let [projectArr, setArr] = useState([{
        title: "Laundry Cart",
        link: "https://github.com/iamst316/laundry-cart-ui",
        live: "https://full-ui-iamst316.onrender.com",
        details : [
            "Technologies Used - ReactJS, NodeJS, ExpressJS, Mongoose,MongoDB" ,
            "Implemented new order and checkout components in UI",
            "Made appropriate endpoints to serve API in backend",
            "Created extensive schemas and user models in MongoDB",
            "Implemented frontend routes using react-router"
        ]
    },
    {
        title: "UI Gallery",
        link: "https://github.com/iamst316/ui-gallery",
        live: "https://iamst316.github.io/ui-gallery/",
        details : [
            "Technologies Used - ReactJS" ,
            "A showcase of my UI Designs and Functional Components",
            "A playground for me to exercise my newly gained skills."
        ]
    },
    {
        title: "Inventory Management System",
        link: "https://gitlab.com/iamshubham316/inventory-management-system",
        
        details : [
            "Technologies Used - ReactJS" ,
            "Created Login and Register page in UI",
            "Created Book List component to display present book list"
        ]
    },
    
])
    // console.log(workArr)
    
    return(<div id='project-main'>
        <h1 id='project-main-title'>Projects</h1>
        <hr />
        <div id='project-list'>
            {projectArr.map((i)=>{
                return <Project title={i.title} link={i.link} live={i.live} details={i.details}  />
            })}
        </div>
    </div>)
}