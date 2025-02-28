import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import Footer from "./components/Footer/Footer";
import BookACall from "./components/BookACall/BookACall";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/bookacall" element={<BookACall />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
