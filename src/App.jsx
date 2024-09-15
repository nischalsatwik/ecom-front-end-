import Home from "./Components/Home";
import Info from "./Components/Info";
import Workexp from './Components/Workexp';
import Game from "./Components/Game";
import NumberGame  from "./Components/Games and Quiz/NumberGame";
import Tictactoe from "./Components/Games and Quiz/Tictactoe";
import Achievments from './Components/Achievements';
import Businesscard from './Components/Businesscard';
import {Route, Routes } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import Navbar from "./Components/Navbar"
;
function App() {  
  return (
    
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home/> }></Route>
        <Route path="/info" element={<Info/> }></Route>
        <Route path="/work" element={<Workexp></Workexp>}/>
        <Route path="/game"  element={<Game></Game>}/>
        <Route path="/achievements"  element={<Achievments></Achievments>}/>
        <Route path="/business"  element={<Businesscard></Businesscard>}/>
        <Route path="/game/Numbergame" element={<NumberGame></NumberGame>}/>
        <Route path="/game/Tictactoe" element={<Tictactoe></Tictactoe>}/>
      </Routes>
    </div>
  );
}

export default App
