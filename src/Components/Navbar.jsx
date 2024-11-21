import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import profile from '../assets/person-circle.svg'
function Navsbar(){
    const navigate=useNavigate();
    
    function logout(){
      const d=confirm("Are you sure want to log out");
      if(d===true)
      {
        localStorage.clear();
        navigate("/");
      }
    }
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand ><Button variant="primary" onClick={()=>navigate("/home")}>Food</Button></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Button name='cart' variant="primary" onClick={()=>navigate("/cart")}>Your Cart</Button></Nav.Link>
            <Nav.Link ><Button variant="primary" onClick={()=>navigate("/wallet")}>Your Wallet</Button></Nav.Link>
            
            <Nav.Link><Button variant="primary" type="button" onClick={logout}>Log out</Button></Nav.Link>
           <Nav.Link><Button onClick={()=>navigate("/profile")} name="profile"><img src={profile}></img></Button></Nav.Link>
           <Nav.Link ><input></input><Button>Search</Button></Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
      
        </>
    );
}
export default Navsbar;