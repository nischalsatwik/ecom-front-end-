import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function NumberGame(){
    const navigate=useNavigate();
    const p1=["Your guess is right. The random number chosen is: ","you have guessed in ","your guess is high","your guess is low"];
    const [p2,setP2]=useState(0);
    const [p3,setP3]=useState([]);
    const [Count,setCount]=useState(0);
    const [randomNumber, setRandomNumber] = useState(null);
    const [p5,setp5]=useState("");
    const [disable,setDisable]=useState(false);
    console.log("Random number=",randomNumber);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);
    function calculate()
    {
        setCount(prev=>prev+1)
        if(Count===6)
        {
             setp5(p1[1]);
            setP3[null];
            setP2(prev=>prev);
            setDisable(true);
        }
        else if(p2==randomNumber)
        {
            console.log("equal");
            setp5(p1[0]+" "+randomNumber);
            setDisable(true);

        }
        else if(p2>randomNumber)
        {
            console.log("more");
            setp5(p1[2]);
            setP3([...p3,p2]);
            setP2(prev=>prev);
        }
        else{
            setp5(p1[3]);
            setP3([...p3,p2]);
            setP2(prev=>prev);
        }
    }
    
    return(<div>
        <h1>Guess the number</h1>
        <p>Find the number between 1 to 100 and click on guess. Below your guesses will be listed and your guess will be told that it's high or low and you will be given 7 chances. Try your best</p>
        <input type="text"  onChange={e=>setP2(e.target.value)} ></input>
        <button className='game-show' onClick={calculate} disabled={disable? true : false}>Guess</button>
        <p>{p5}</p>
        <h1>{p3.join(",")}</h1>
        {disable &&(
            <>
        <button onClick={()=>window.location.reload()}>Yes</button>
        <button onClick={()=>navigate("/game")}>Back</button>
        </>)
}
    </div>
        );      
}