import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
function Businesscard(){
    return(
        <div className="busy">
            <div className="busy-busy">
            <img className="busy-img" src="src\Images\nischal.jpeg"></img>
            <h1>Jhadtheela Sai Nischal Satwik</h1>
            <h3>Software engineer</h3>
            <div className="busy-body-div">
                <button className="busy-body-div-email"><a href="mailto:nischalsatwik31@gmail.com">Email</a></button>
                <button className="busy-body-div-link"><a className='busy-body-div-link' href="https://in.linkedin.com/in/sai-nischal-satwik-jhadtheela-912375196">Linkedin</a></button>
            </div>
            <h2 className='busy-about'>About</h2>
            <p>Results-oriented software engineer with an experience of 2.5 years<br></br> designing and developing innovative solutions.Proficient in programming<br></br> languages Java, Python, Javscript and frameworks React and Springboot. <br></br>Passionate about crafting scalable and efficient software that exceeds user<br></br> expectations. I assure you that I will always be an asset but not a liability. </p>
            <h2 className='busy-skill'>Skills</h2>
            <ul>
                <li>Python,Java,Javascript, Agile,MS Excel</li>
                <li>Spring boot,React,MYSQL,GIT</li>
                <li>Teamwork</li>
                <li>Time Management</li>
                <li>Leadership</li>
                <li>Effective Communication</li>
            </ul>
            <font-awesome-icon icon="square-instagram" />
            </div>
        </div>
    )
 }
 export default Businesscard