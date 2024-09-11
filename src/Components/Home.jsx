import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    return(
        <div className="home">
            <h1 className="home-head">What do you want to visit</h1>
            <button className="home-Info" onClick={()=>navigate("/second")}>Info</button>
            <button className="home-workexp">Work experience</button> 
        </div>
    )
 }
 export default Home