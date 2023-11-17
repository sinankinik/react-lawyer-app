import React from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  )
}