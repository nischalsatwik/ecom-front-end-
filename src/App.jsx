import { useEffect, useState } from 'react';
import Home from "./Components/Home";
import Info from "./Components/Info";
import Secondquestion from './Components/Secondquestion';
import Game from "./Components/Game";
import Nextquestion from './Components/Nextquestion';
import Businesscard from './Components/Businesscard';
import {Route, Routes,useNavigate } from 'react-router-dom'; 
import './App.css';
;
function App() {  
  const navigate=useNavigate();
  function handle(){
    navigate("/home")
  }
  return (
    
    <div>
      <button className='App-home' onClick={handle}>Home</button>
      <Routes>
        <Route path="/home" element={<Home/> }></Route>
        <Route path="/info" element={<Info/> }></Route>
        <Route path="/second" element={<Secondquestion></Secondquestion>}/>
        <Route path="/game"  element={<Game></Game>}/>
        <Route path="/next"  element={<Nextquestion></Nextquestion>}/>
        <Route path="/business"  element={<Businesscard></Businesscard>}/>
      </Routes>
    </div>
  );
}

export default App
