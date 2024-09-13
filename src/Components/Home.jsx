/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {useState} from "react";
function Home(){
    const [vis,setVis]=useState(true);
    console.log(vis);
       const navigate=useNavigate();
       const [inputname,setinput]=useState();
       function handle()
       {
        if(inputname==="")
        {
            alert("name must be filled");
        }
        else{
        setVis(false);
        }
       }
    return(
        <div className="home">
            {vis&&<><h1>Hello what&apos;s your name  </h1>
            <div className="Home-ip-enter">
            <input type="text" maxLength={10} className="home-ip" onChange={(e)=>setinput(e.target.value)}></input>
            <button className="home-enter" onClick={handle}>Enter</button>
            </div></>}
            {!vis&&<><h1 className="home-head">What do you want to visit {inputname}</h1>
            <button className="home-Info" onClick={()=>navigate("/Info")} style={{ transition: 'all 0.5s ease-in-out' }}>Info</button>
            <button className="home-workexp" >Work experience and Projects</button> 
            <button>Achievements</button>
            <button>Games</button></>}
        </div>
    )
 }
 export default Home