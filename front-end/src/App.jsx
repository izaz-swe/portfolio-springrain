import Home from "./components/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Project/>
     <About/>
     <Contact/>
    </>
  );
}

export default App;
