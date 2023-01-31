import React from "react";
// import { ReactDOM } from "react";
import { Routes } from "react-router-dom";
import {Route} from "react-router-dom"
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";

function App() { 

  return(
    <div className='app'>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/nav" element={<Nav/>}/>
   
 

  

   </Routes>
  
    </div>
  )
  }

export default App;

