import {useNavigate} from 'react-router-dom';
function Navbar(){
    const navigate=useNavigate();
    return(
        <div className="navbar">
            <button className='App-home' onClick={()=>navigate("/home")}>Home</button>
            <button onClick={()=>navigate("/info")}>Info</button>
            <button onClick={()=>navigate("/work")}>Work experience and Project</button>
            <button onClick={()=>navigate("/achievements")}>Achievements</button>
            <button onClick={()=>navigate("/business")}>Business card</button>
            <button onClick={()=>navigate("/game")}>Games and Quiz</button>
        </div>
    );
}
export default Navbar;