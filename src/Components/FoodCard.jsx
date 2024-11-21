/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import plus from "../assets/plus-circle.svg"
import minus from "../assets/dash-circle.svg"
import { useState } from 'react';
export default function FoodCard({price,title,img})
{
  const username=localStorage.getItem("username");
    const [count,setCount]=useState(1);
    function add()
    {
        setCount(prev=>prev+1);
    }
    function sub(){
        setCount(prev=>prev-1);
    }
    function handleclick(){
      const url = "http://localhost:8080/cart";
      const data={name:title,username:username,price:price,quantity:count}
      console.log(data);
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
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
        .then(() => {
          alert("food added succesfully");
          console.log("successful");
        })
        .catch((error) => {
          alert("invalid details");
          console.error("Fetch error:", error);
        });
    }
    return(
    <>
     <Card className="info-card" style={{ width: '16rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{color:"white"}}>{title}</Card.Title>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <Button onClick={handleclick} style={{padding:"3px 10px",fontSize:"15px",height:"40px",display:"inline-block",marginTop:"10px"}} variant="primary">Add to Cart</Button>
       {(count>1)?<Button style={{padding:"3px 1px",fontSize:"15px",height:"30px",display:"inline-block",marginTop:"17px"}}  onClick={sub}><img  src={minus}></img></Button>:null}
        <Button style={{padding:"3px 2px",fontSize:"15px",height:"30px",display:"inline-block",marginTop:"17px"}} onClick={add}><img  src={plus}></img></Button>
        <p style={{color:"white",display:"inline-block",marginTop:"20px",marginLeft:"5px"}}>{count}</p>
        </div>
        <Card.Text style={{color:"white"}}>{price}&#8377; each</Card.Text>
      </Card.Body>
    </Card>
    </>);
}