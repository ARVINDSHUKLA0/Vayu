import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Conact from './Pages/Conact'
import "@fontsource/playfair-display";  
import "@fontsource/lato";  


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
     <> 
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/conact' element={<Conact/>}/>
        </Routes>      
      </BrowserRouter>
     </>
  )
}

export default App
