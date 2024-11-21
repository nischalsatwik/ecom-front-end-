import Navsbar from "./Navbar";
import FoodCard from "./FoodCard"
import Idli from "../Images/Idli.jfif"
import Poori from "../Images/Poori.jfif"
import OnionDosa from "../Images/Onion dosa.jfif"
import OnionUtappam from "../Images/Onion utappam.jfif"
import Pongal from "../Images/Pongal.jfif"
import Vada from "../Images/Vada.jfif"
import Masaladosa from "../Images/Masala Dosa.jfif"
import Chapati from "../Images/Chapati.jfif"
import Paratha from "../Images/Paratha.jfif"
import { useEffect,useState } from "react";
export default function Home(){
    const username=localStorage.getItem("username");
    const [lastname,setLastname]=useState("");
    const [firstname,setFirstname]=useState("");

    const url=`http://localhost:8080/profile${username}`;
    useEffect(() => {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((dot) => {
            setFirstname(dot.User.firstname);
            setLastname(dot.User.lastname);
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
      }, []);
    return(
        <>
        <Navsbar></Navsbar>
        <h1>Welcome {firstname} {lastname} Please select the food and quantity you want.</h1>
        <div className="main snaps-inline">
       <FoodCard title="Idli" img={Idli} price={40}></FoodCard>
       <FoodCard title="Poori" img={Poori} price={50}></FoodCard>
       <FoodCard title="Onion Dosa" img={OnionDosa} price={60}></FoodCard>
       <FoodCard title="Onion Utappam" img={OnionUtappam} price={70}></FoodCard>
       <FoodCard title="Pongal" img={Pongal} price={40}></FoodCard>
       <FoodCard title="Vada" img={Vada} price={50}></FoodCard>
       <FoodCard title="Masala Dosa" img={Masaladosa} price={65}></FoodCard>
       <FoodCard title="Chapati" img={Chapati} price={50}></FoodCard>
       <FoodCard title="Paratha" img={Paratha} price={60}></FoodCard>
       </div>
        </>
    )
}