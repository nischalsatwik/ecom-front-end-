import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Create() {
  const [repass,setrepass]=useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    number: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleFirstnameChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "") {
      // Clear the firstname property from the state object
      setData({ ...data, firstname: "" });
    } else {
      // Update the state with the new value
      setData({ ...data, firstname: newValue });
    }
  };

  const handleLastnameChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "") {
      // Clear the lastname property from the state object
      setData({ ...data, lastname: "" });
    } else {
      // Update the state with the new value
      setData({ ...data, lastname: newValue });
    }
  };

  const handleUsernameChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "") {
      // Clear the username property from the state object
      setData({ ...data, username: "" });
    } else {
      // Update the state with the new value
      setData({ ...data, username: newValue });
    }
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "") {
      // Clear the password property from the state object
      setData({ ...data, password: "" });
    } else {
      // Update the state with the new value
      setData({ ...data, password: newValue });
    }
  };

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "") {
      // Clear the email property from the state object
      setData({ ...data, email: "" });
    } else {
      // Update the state with the new value
      setData({ ...data, email: newValue });
    }
  };

  const handlePhoneChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "") {
      // Clear the phone property from the state object
      setData({ ...data, number: "" });
    } else {
      // Update the state with the new value
      setData({ ...data, number: newValue });
    }
  };
  function handlesubmit()
  {
    console.log("handle submit");
    if(data.password!==repass)
    {
      alert("your password is not matching. Please renenter them");
      setData({ ...data, password:""  });
      setrepass("");
      return 
    }
    
        const url="http://localhost:8080/create";
        const member=data;
        console.log(member);
        console.log(data.firstname,data.lastname);
        fetch(url, {
          method: "POST",
          body: JSON.stringify(member),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => {
            if (!response.ok) {
              alert("Please re enter your details");
              throw new Error("Invalid credentials");
            }
            return response.json();
          })
          .then((dot) => {
            console.log("successful");
            console.log(dot);
            alert("new user created please remember your username and password");
            navigate("/");
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
  }

  return (
    <div className="create-div">
      <h1>Create</h1>
      <Form className="create-form">
        <Form.Group className="mb-3" >
          <Form.Label>Enter First name</Form.Label>
          <Form.Control type="text" placeholder="First name" onChange={handleFirstnameChange} required  />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Enter Last name</Form.Label>
          <Form.Control type="text" placeholder="Last name" onChange={handleLastnameChange} required  />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Create User name</Form.Label>
          <Form.Control type="text" placeholder="User name" onChange={handleUsernameChange} required />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="enter password" onChange={handlePasswordChange} required />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Re enter-Password</Form.Label>
          <Form.Control type="password" placeholder="re enter password" onChange={(e)=>setrepass(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder="enter your email" onChange={handleEmailChange} required />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>phone number</Form.Label>
          <Form.Control type="number" placeholder="enter your phone number" onChange={handlePhoneChange} required />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handlesubmit}>
          Submit
        </Button>
        <Button variant="primary" type="button" onClick={()=>navigate("/")}>
          Back
        </Button>
      </Form>
    </div>
  );
}