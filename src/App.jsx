import { useState,useEffect,useRef } from 'react'
import Hero from './components/Hero';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Parallax from './components/Parallax';
import About from './components/About';
import NaviBar from './components/NaviBar';
import Project from './components/Project';
import Skills from './components/Skills';


function App() {
  useEffect(() => {
    document.title = "Portfolio";

    //const link = document.createElement("link");
    // link.rel = "icon";
    // link.href = "public/favicon.ico";

    // document.head.appendChild(link);

    // return () => {
    //   document.head.removeChild(link);
    // };
  }, []);

  
  return (
    
      <Router>
        <NaviBar />
        {/* Routes Configuration */}
        <Routes>
          {/* Hero and Parallax are on the home route */}
          <Route path="/" element={
            <>
              <Hero />
              <Parallax />
              <Project/>
              <Skills/>
            </>
          } />
          {/* About page has its own route */}
          <Route path="/about" element={
            <>
            <About />
            <Parallax/>
            </>} />
        </Routes>
      </Router>
    );
}

export default App;