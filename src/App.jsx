import { useState } from 'react';
import Home from "./Components/Home";
import Secondquestion from './Components/Secondquestion';
import Game from "./Components/Game";
import Nextquestion from './Components/Nextquestion';
import Businesscard from './Components/Businesscard';
import {Link,Route, Routes } from 'react-router-dom'; 
import './App.css';;

function App() {  
  return (
    <div>
      <ul>
        <li>
          <Link to="*" >Home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="*" element={<Home></Home>}></Route>
        <Route path="/second" element={<Secondquestion></Secondquestion>}/>
        <Route path="/game"  element={<Game></Game>}/>
        <Route path="/next"  element={<Nextquestion></Nextquestion>}/>
        <Route path="/business"  element={<Businesscard></Businesscard>}/>
      </Routes>
    </div>
  );
}

export default App
