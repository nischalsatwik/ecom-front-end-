/* eslint-disable react/prop-types */
import {useState} from "react";
function Home(){
    const [vis,setVis]=useState(true);

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
                {vis&&<div className="home-vis"><h1><span className="home-first">Hello what&apos;s your name !</span> </h1>
                <div className="Home-ip-enter">
                    <input type="text" maxLength={10} className="home-ip" onChange={(e)=>setinput(e.target.value)} ></input>
                    <button className="home-enter" onClick={handle}>Enter</button>
                </div></div>}
                {!vis&&<div className="home-made">
                    <h1 className="home-head">Welcome {inputname} you can click on the following</h1> 
                    <ul className="home-ul">
                        <li className="home-details"><span className="home-just">Info</span> to know about myself</li>
                        <li className="home-details"><span className="home-just">Workexperience and Project</span> to know about my previous projects which I've worked</li>
                        <li className="home-details"><span className="home-just">Acheivement</span> to know what I have acheived until now.</li>
                        <li className="home-details"><span className="home-just">Business card</span> to contact me through social media or email</li>
                        <li className="home-details"><span className="home-just">Games and Quiz</span> to have some fun</li>
                    </ul>
                </div>}
                    {!vis &&<p className="home-final">"If <span className="home-final-span">Determination</span> and <span className="home-final-span">Dedication</span> comes together then <span className="home-final-span">Justification</span>
                    automatically comes to your life"</p>}
        </div>
    );
 }
 export default Home