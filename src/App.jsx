import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import BookACall from "./pages/BookACall/BookACall";
import Project from "./pages/project/ProjectPage";
import About from "./pages/about/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookacall" element={<BookACall />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
