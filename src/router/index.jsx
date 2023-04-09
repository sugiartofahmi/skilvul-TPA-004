import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";
import Blog from "../views/Blog";
import Navbar from "../components/Navbar";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default Router;
