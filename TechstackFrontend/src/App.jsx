import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import Information from "./pages/Information";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component
import Blogs from "./pages/Blogs";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import CreateTeamPage from "./pages/CreateTeamPage";

const App = () => {
  return (
    <>
      <ScrollToTop /> {/* Add this component to handle scrolling */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/information" element={<Information />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<Aboutus />} /> {/* Updated path */}
        <Route path="/contact" element={<Contact />} /> {/* Updated path */}
        <Route path="/create-team" element={<CreateTeamPage />} />{" "}
        {/* Updated path */}
      </Routes>
    </>
  );
};

export default App;
