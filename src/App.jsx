import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from "./Pages/AboutUs"
import Blogs from './Pages/Blogs';
import Services from './Pages/Services';
import Contact from './Pages/ContactUs';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App