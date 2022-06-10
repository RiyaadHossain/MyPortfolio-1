import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import "./App.css";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Other/Blog";
import ProjectsDetails from "./Pages/Other/ProjectsDetails";
import About from "./Pages/Home/About";
import Contact from "./Pages/Home/Contact";
import Portfolio from "./Pages/Home/Portfolio";
import Skill from "./Pages/Home/Skill";

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project-details/:id" element={<ProjectsDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
