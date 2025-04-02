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
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserDetailsForm from "./pages/UserDetailsForm";
import EditProfile from "./components/EditProfile";
import AddBlog from "./pages/AddBlog";
import BlogDetails from "./pages/BlogDetails";

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
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-details" element={<UserDetailsForm />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        {/* Updated path */}
      </Routes>
    </>
  );
};

export default App;
