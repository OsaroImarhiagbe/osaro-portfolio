import { useEffect,lazy,Suspense } from 'react'
import Hero from './components/Hero';
import { HashRouter as Router,Routes, Route } from "react-router-dom";
import Parallax from './components/Parallax';
import About from './components/About';
import NaviBar from './components/NaviBar';
import Project from './components/Project';
import Skills from './components/Skills';
import Cloud_Page from './components/Cloud_Page';
import Contact from './components/Contact';
import Portfolio_page from './components/Portfolio_page';
import WeatherApp_page from './components/WeatherApp_page';
import DevGuide_page from './components/DevGuide_page';

function App() {
  useEffect(() => {
    document.title = "Portfolio";

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
          <Route path="#/about" element={
            <>
            <About />
            </>} />
            {/* Cloud Page has its own Route */}
            <Route path='/cloud_page' element={
              <Cloud_Page/>
            }
            />
            {/* Contact has its own Route*/}
            <Route path='/contact' element={
              <Contact/>
            }/>
            {/* Portfolio page has its own route */}
            <Route path='/portfolio_page' element={
              <Portfolio_page/>
            }
            />
            {/* Weather App page has its own route */}
            <Route path='/weatherapp_page' element={
              <WeatherApp_page/>
            }
            />
            <Route path='/devguides_page' element={
              <DevGuide_page/>
            }/>
        </Routes>
      </Router>
    );
}

export default App;