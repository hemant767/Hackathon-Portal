import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import HomePage from '../Pages/HomePage'
import Basic from './Form'
import SubDetail from '../Pages/SubDetail'

const App = () => {
  return (

    
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} /> 
        <Route path="/subDetail" element={<SubDetail/>} />
        <Route path="/submission"  element={<Basic/>} />
        
        
        
        
      </Routes>
    </Router>

    

    
  )
}

export default App