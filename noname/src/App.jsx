import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import Information from "./pages/Information";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/information" element={<Information />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;
