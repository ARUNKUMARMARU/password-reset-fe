import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import Sign from './component/Sign'
import Reset from './component/Reset'



function App() {
  return (
    <Router>
    <div>      
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Sign' element={<Sign/>}/>
            <Route path='/requestlink' element={<Reset/>}/>
          </Routes>    
    </div>       
    </Router>
  )
}

export default App