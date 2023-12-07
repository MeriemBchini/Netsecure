import Navbar from './Component/Navbar'
import Homee from './Component/Homee'
import About from './Component/About'
import Login from './Component/connect/Login' 
import Signup from './Component/signup'
import Form from './Component/Form'
import './App.css'
import {  Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">   
      <div>  
         <Navbar/>
        <Routes>
          <Route path='/'  element={<Homee/>} />
          <Route path="/Home" element={<Homee />} />
          <Route path='About' element={<About></About>}/>
          <Route path='/Login' element={<Login></Login>}/>
          <Route path='/Form' element={<Form></Form>}/>
          <Route path='/signup' element={<Signup></Signup>}/>
          


        </Routes>
    
   
      
   
      </div>
     
      
    </div>
  );
}

export default App;
