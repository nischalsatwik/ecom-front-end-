import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
export default function Login()
{
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const navigate=useNavigate();
    function handle() {
      const url = "http://localhost:8080/login";
      console.log(username,password);
      const data = { username: username, password: password };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (!response.ok) {
            alert("invalid details");
            throw new Error("Invalid credentials");
          }
          return response.json();
        })
        .then((dot) => {
          console.log("successful");
          console.log(dot);
          localStorage.setItem("user",JSON.stringify(dot));
          localStorage.setItem("username",username);
          console.log(username);
          navigate("/home");
        })
        .catch((error) => {
          alert("invalid details");
          console.error("Fetch error:", error);
        });
    }
  return(
    <div style={{marginTop:"20px"}}>
    <h1>Login</h1>
    <Form className="login-form">
      <Form.Group  className="mb-3 userid" controlId="formBasicEmail">
        <Form.Label className='login-label'>username</Form.Label>
        <FloatingLabel
        controlId="floatingInput"
        label="userid"
        className="mb-3"
      >
        <Form.Control  type="text" placeholder="userid" value={username} onChange={(e)=>setusername(e.target.value)} required />
      </FloatingLabel>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control  type="password" placeholder="Password" value={password}  onChange={(e)=>setpassword(e.target.value)}required/>
      </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="button"  onClick={handle}>
        Login
      </Button>
      <Button variant="primary" type="button" onClick={()=>navigate("/createnew")} >
        Create new account
      </Button>
    </Form>
    </div>
  )
}