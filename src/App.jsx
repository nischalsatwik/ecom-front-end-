import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Create from "./Components/Create"
import Login from "./Components/Login"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Wallet from "./Components/Wallet"
import Profile from "./Components/Profile"
import { Route,Routes} from 'react-router-dom';
function App() { 
  return (
    <>
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/createnew" element={<Create></Create>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/wallet" element={<Wallet></Wallet>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
    </Routes>
    </>
  );
}

export default App
