import { useNavigate } from "react-router-dom"
function Nextquestion(){
    const navigate=useNavigate();
    return(
        <div>
            <h1>Final Question</h1>
            <button>gone</button>
            <button onClick={()=>navigate('business')}> businesscard</button>
        </div>
    )
 }
 export default Nextquestion