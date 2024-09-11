import { useNavigate } from "react-router-dom"
function Businesscard(){
    const navigate=useNavigate();
    return(
        <div>
            <h1>Just a business card</h1>
        <button onClick={()=>navigate("/home")}>Home</button>
        </div>
    )
 }
 export default Businesscard