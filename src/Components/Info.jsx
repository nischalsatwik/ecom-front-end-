import { useNavigate } from "react-router-dom";
function Info(){
    const navigate=useNavigate();
    function handle()
    {
        navigate("/home");
    }
    return(
        <div>
            <h1>I&apos;m Nischal Satwik.</h1>
            <p>I hail from Vizianagaram dst , Andhrapradesh. I&apos;m knowing languages like telugu,hindi,english and I&apos;m learning tamil and Kannada. </p>
            <p>I love watching films of different Genres. Some of the films which I like <span className="RRR">RRR</span><img src="src\Images\RRR.jfif" className="hidden"></img>, Master and KGF</p>
            <p>I play a lot of games on mobile and outdoor too. I play outdoor like Football,Cricket,Badminton and mobile games BGMI</p>
            <p>By the way I&apos;m learning chess this is my id just throw me a freind request we will play together</p>
            <button onClick={handle}>Back</button>
            
        </div>
    );
}
export default Info;