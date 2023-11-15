import { useState } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Record from './components/Record'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <div className="wrap">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/record' element={<Record />}/>
          <Route path='contact' element={<Contact />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
