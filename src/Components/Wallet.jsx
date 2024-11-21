import Navsbar from "./Navbar";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
export default function Wallet()
{
    const[amount,setAmount]=useState(0);
    const username=localStorage.getItem("username");
    const url=`http://localhost:8080/wallet${username}`;
    const amounts=[1000,2000,5000,10000]
    const listitems=amounts.map(
        (values)=><div className="amount-buttons-div" key={values}>
            <Button className="amount-buttons" onClick={()=>handleamount(values)}>{values}</Button>
        </div>
    )
    function handleamount(data){
        const addedamount={"money":data}
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(addedamount),
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Invalid credentials");
              }
              return response.json();
            })
            .then((dot) => {
              console.log("successful");
              alert(`added ${data}`)
              window.location.reload();
            })
            .catch((error) => {
              alert("something is wrong in wallet.jsx");
              console.error("Fetch error:", error);
            });
    }
    
    useEffect(() => {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((dot) => {
            console.log(dot);
            setAmount(dot.money)
            
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
      }, []);
    return(
        <div className="wallet">
<Navsbar></Navsbar>
<h1 className="wallet-h1">Your wallet amount is {amount}</h1>
<h1 className="wallet-h1">Add amount into your wallet</h1>
{listitems}
</div>)
}