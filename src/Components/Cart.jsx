import Navsbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from "react";
export default function Cart()
{  const username=localStorage.getItem("username");
    const [data,setdata]=useState([]);
    const [amount,setAmount]=useState(0);
    const items=data.map((item)=>{
        return(
            <div key={item.name} style={{display:"flex", justifyContent:"space-around"}}>
            <h1>{item.name}</h1>
            <h5>{item.price}&#8377;</h5>
            <h5>{item.quantity}</h5>
            <Button onClick={()=>handlepayment(item.price,item.name,item.username)}>Make payment</Button>
            </div>
        )
    })
    
    function handlepayment(price,name,username)
    {
      console.log(`price=${price}, name=${name} , username=${username}`)
      if(amount<price)
      {
        alert("insufficient balance");
        return;
      }
      const url=`http://localhost:8080/cartproducts/${username}/${name}`;
      fetch(url, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          alert("something is wrong");
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
  .then((data) => {console.log(data);
    alert("food item is going to get delivered")
    updateamount(price);
  })
  .catch(error => console.error(error));

    }
    function updateamount(price)
    {
      const updatedamount={"money":price}
  const url3=`http://localhost:8080/updatewallet${username}`;
  fetch(url3, {
      method: "PUT",
      body: JSON.stringify(updatedamount),
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
        alert("money is deducted");
        window.location.reload();
      })
      .catch((error) => {
        alert("something is wrong in wallet.jsx");
        console.error("Fetch error:", error);
      });
    }
    useEffect(() => {
      const url=`http://localhost:8080/cartproducts${username}`;
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((dot) => {
            console.log("successful");
            setdata((dot));
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
          const url2=`http://localhost:8080/wallet${username}`;
          fetch(url2)
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
        <>
<Navsbar></Navsbar>
{items}
</>)
}