import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../component/Home'
import Signup from '../component/signup'
import Reset from '../component/Reset'



function App() {
  return (
    <Router>
    <div>      
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/reset' element={<Reset/>}/>
          </Routes>    
    </div>       
    </Router>
  )
}

export default App