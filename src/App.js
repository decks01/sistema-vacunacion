import React from 'react';
import { 
  Routes,
  Route
} from "react-router-dom";
import Cita from './views/Cita';
import Home from './views/Home';

function App()  {
  
    return (
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/Cita" element={<Cita />} />      
      </Routes>
 
    );
  }


export default App;
