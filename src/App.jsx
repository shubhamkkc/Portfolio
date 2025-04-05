import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import { useEffect } from "react";
import {userDetail} from "./constants/index.js";
const App = () =>{
    useEffect(() => {
        document.title = userDetail.Name;
      }, []);
    return(
        <main className="max-w-7xl mx-auto">
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Experience/>
            <Contact/>
            <Footer/>
        </main>
    )
}

export default App