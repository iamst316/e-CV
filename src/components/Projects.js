// import "../css/WorkExp.css";
import Project from './Project'
import {useState} from 'react'
export default function(){

    let [projectArr, setArr] = useState([{
        title: "Laundry Cart",
        link: "https://github.com/iamst316/laundry-cart-ui",
        live: "/",
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
        live: "/",
        details : [
            "Technologies Used - ReactJS" ,
            "Created Login and Register page in UI",
            "Created Book List component to display present book list"
        ]
    },
    {
        title: "Photo Search",
        link: "https://github.com/iamst316/photo-search",
        live: "/",
        details : [
            "Technologies Used - ReactJS" ,
            "Created basic UI to search images and bookmark them",
            "Integrated Unsplash API to fetch images"
        ]
    }
])
    // console.log(workArr)

    return(<div id='project-main'>
        <h1>Projects</h1>
        <div id='project-list'>
            {projectArr.map((i)=>{
                return <Project title={i.title} link={i.link} live={i.live} details={i.details}  />
            })}
        </div>
    </div>)
}