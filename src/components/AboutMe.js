import pic from '../img/pic.jpg'
import '../css/AboutMe.css'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
export default function(){
    return(<>
        <h1>About Me</h1>
        <hr />
        <div id='details'>
            <p id='text'>I have been interested in computer science since I started playing chess in the 2020 COVID-19 pandemic, and have built up an unmatched passion for the field. I try to gain  experience in software development and research from internships, projects, and competitions. I graduated from the BML Munjal University with a Bachelor of Technology in Mechanical Engineering.</p>
            <img id='pic' src={pic} />
        </div>
        <span id='link-tray'>
            <span><img id='linkedin' src={linkedin} /></span>
            <span><img src={github} id='github'/></span>
        </span>        
    </>)
}