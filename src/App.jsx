<<<<<<< HEAD
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
=======
import {BroweserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BroweserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </BroweserRouter>
  );
}

export default App;
>>>>>>> 77a3741f25f9d23b2d9ecbb5a2993a19dda84808
