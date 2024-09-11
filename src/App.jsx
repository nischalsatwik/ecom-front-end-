import { useState } from 'react';
import Home from "./Components/Home";
import Secondquestion from './Components/Secondquestion';
import Game from "./Components/Game";
import Nextquestion from './Components/Nextquestion';
import Businesscard from './Components/Businesscard';
import {Route, Routes,useNavigate } from 'react-router-dom'; 
import './App.css';;

function App() {  
  const navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>navigate('/home')}>home</button>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/second" element={<Secondquestion></Secondquestion>}/>
        <Route path="/game"  element={<Game></Game>}/>
        <Route path="/next"  element={<Nextquestion></Nextquestion>}/>
        <Route path="/business"  element={<Businesscard></Businesscard>}/>
      </Routes>
    </div>
  );
}

export default App
