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
        title: "Book List",
        link: "https://github.com/iamst316/book-list-ui",
        live: "https://book-list-ui.onrender.com",
        details : [
            "Technologies Used - ReactJS" ,
            "Created Login and Register page in UI",
            "Created Book List component to display present book list"
        ]
    },
    {
        title: "Photo Search",
        link: "https://github.com/iamst316/photo-search",
        live: "https://photo-search-7ctp.onrender.com",
        details : [
            "Technologies Used - ReactJS" ,
            "Created basic UI to search images and bookmark them",
            "Integrated Unsplash API to fetch images"
        ]
    }
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