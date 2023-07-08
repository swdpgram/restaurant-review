import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { Restaurant } from './Restaurant/Restaurant'


function App() {
  
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/restaurant/:name" element={<Restaurant />} /> 
      </Routes>
    </>
  )
}

export default App
