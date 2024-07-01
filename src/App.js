import { useRef ,useContext } from "react";
import Home from "./sections/Home";
import "./App.css";
import Scroller from "./sections/Scroller";
import Skills from "./sections/Skills";

import { modeContext } from './ModeContext';
import Projects from "./sections/Projects";
import Navbar from "./sections/Navbar";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Services from "./sections/services";
import ServiceBoxPopup from "./components/service-box-popup";
import About from "./sections/About";
import PromoteBox from "./components/PromoteBox";

function App() {
  
  const {darkMode ,setdarkMode} = useContext(modeContext);

  return (
    <div className="App" >
    
        <Navbar/>
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
