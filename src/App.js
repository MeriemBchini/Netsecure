import Navbar from './Component/Navbar'
import Homee from './Component/Homee'
import About from './Component/About'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <div>  
         <Navbar/>
        <Routes>
          <Route path='Home' element={<Homee/>} />
          <Route path='About' element={<About></About>}/>
          


        </Routes>
    
   
      
   
      </div>
     
      
    </div>
  );
}

export default App;
