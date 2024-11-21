import Navsbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import plusicon from "../assets/add_photo_alternate_outlined.svg"
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
export default function Profile()
{
  const [show, setShow] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
    const [showinputs,setShowinputs]=useState(false);
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const username=localStorage.getItem("username");
    const [email,setemail]=useState("");
    const [phone,setPhone]=useState("");
    const [connection,setConnection]=useState(true);
    const url=`http://localhost:8080/profile${username}`;   
  
    useEffect(() => {
        fetch(url)
          .then((response) => {
            setConnection(true);
            return response.json();
          })
          .then((dot) => {
            console.log("successful");
            console.log(dot);
            setFirstname(dot.User.firstname);
            setLastname(dot.User.lastname);
            setemail(dot.User.email);
            setPhone(dot.User.number);
          })
          .catch((error) => {
            console.error("Fetch error:", error);
            setConnection(false);
          });
          const fetchImage = async () => {
            try {
                const response = await axios.get(
                   `http://localhost:8080/profile-pic/${username}`,
                    { responseType: "blob" }
                );
                setImageUrl(URL.createObjectURL(response.data));
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        };
        fetchImage();
      }, []);
    if(!connection)
    {
        return(
            <h1>Connection is not established</h1>
        )
    }
    function handlesubmit()
    {
        const data={email:email,number:phone,firstname:firstname,lastname:lastname};
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => {
              if (!response.ok) {
                alert("enter the details again");
                throw new Error("Invalid credentials");
              }
              return response.json();
            })
            .then((dot) => {
              console.log("successful");
              console.log(dot);
              setShowinputs(prev=>!prev);
            })
            .catch((error) => {
              alert("invalid details");
              console.error("Fetch error:", error);
            });
    }
    function handledelete(){
      axios.delete(`http://localhost:8080/deleteimage/${username}`)
      .then((response)=>{
        console.log(response)
        alert("pic deleted");
        window.location.reload();
        
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    const handleImage = async (e) => {
      e.preventDefault();
      const file = e.target.files[0];
      console.log(file);
      if (file) {
          const formData = new FormData();
          formData.append("imageFile", file);

          try {
              const response = await axios.put(`http://localhost:8080/uploadingimage/${username}`, formData);
              console.log("Image added", response.data);
              alert("Image added successfully");

              // Update the imageUrl to show the new uploaded image
              setImageUrl(URL.createObjectURL(file));
          } catch (error) {
              console.error("Error uploading image:", error);
              alert("Problem in uploading image");
          }
      }
  };
    return(
        <>
<Navsbar></Navsbar>
<div className="profile">
{showinputs &&<>
<label className="profile-label">Firstname</label>
<input className="profile-input" type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}></input>
<br></br>
<label className="profile-label">lastname</label>
<input className="profile-input" type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)}></input>
<br></br>
<label className="profile-label">Email</label>
<input className="profile-input" type="text" value={email} onChange={(e)=>setemail(e.target.value)}></input>
<br></br>
<label className="profile-label">number</label>
<input className="profile-input"  type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
<br></br>
<Button className="profile-submit" onClick={handlesubmit}>Submit</Button>
</>}
{!showinputs&&<>
  <input type="file" className="hidden hidden-input" id="uploadFile" onChange={handleImage} />
  {imageUrl === '' ? (
                <label htmlFor="uploadFile">
                    <img src={plusicon} alt="Upload" className="profile-pic" />
                </label>
            ) : (
                <img src={imageUrl} className="profile-pic" alt="Profile" onClick={handleShow} />
            )}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black",margin:"0 auto"}}>Your Profile Pic</Modal.Title>
        </Modal.Header>
        <img src={imageUrl} className="profile-pic-modal" alt="Profile Modal" />
        <Modal.Footer>
        <input type="file" className="hidden hidden-input" id="uploadFileModal" onChange={handleImage} />
                    <label htmlFor="uploadFileModal" style={{ color: "black", cursor: "pointer" }}>Choose new image</label>
                    <Button variant="secondary" onClick={handledelete}>
                        delete
                    </Button>
        </Modal.Footer>
      </Modal>
<h1 className="profile-h1">{firstname} {lastname}</h1>
<h1 className="profile-h1" >{username}</h1>
<h1 className="profile-h1" >{email}</h1>
<h1 className="profile-h1" >{phone}</h1>
<Button onClick={()=>setShowinputs(prev=>!prev)} className="profile-edit">Edit</Button></>}
</div>
</>)
}