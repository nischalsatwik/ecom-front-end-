import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    return(
        <div>
            <h1>What do you want to visit</h1>
            <button onClick={()=>navigate("/second")}>Info</button>
            <button>Work experience</button> 
        </div>
    )
 }
 export default Home