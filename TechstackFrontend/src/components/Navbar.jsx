import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Code,
  Menu,
  X,
  User,
  Users,
  Info,
  Folder,
  BookOpen,
  Phone,
  Briefcase,
  LogInIcon,
} from "lucide-react"; // Import icons
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b shadow-md">
      <div className="flex h-16 px-4 md:px-6 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">TechCraft</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {[
            "Teams",
            "Information",
            "Projects",
            "Blogs",
            "About Us",
            "Contact",
          ].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase().replace(" ", "-")}`} // Replace spaces with hyphens
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </NavLink>
          ))}

          {/* Login User Icon */}
          <NavLink
            to="/profile"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <User className="h-6 w-6" />
          </NavLink>
          <NavLink
            to="/login"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LogInIcon className="h-6 w-6" />
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Dropdown Navigation */}
        <div
          className={`absolute top-16 left-0 w-full bg-background shadow-lg transition-all duration-300 ease-in-out ${
            isOpen
              ? "block backdrop-blur-md bg-slate-100 bg-opacity-90"
              : "hidden"
          } md:hidden`}
        >
          <nav className="flex flex-col items-start p-4 space-y-4">
            {[
              { name: "Teams", icon: <Users className="h-5 w-5" /> },
              { name: "Information", icon: <Info className="h-5 w-5" /> },
              { name: "Projects", icon: <Folder className="h-5 w-5" /> },
              { name: "Blogs", icon: <BookOpen className="h-5 w-5" /> },
              { name: "About Us", icon: <Briefcase className="h-5 w-5" /> },
              { name: "Contact", icon: <Phone className="h-5 w-5" /> },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={`/${item.name.toLowerCase().replace(" ", "-")}`} // Replace spaces with hyphens
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}

            {/* Login User Icon for Mobile */}
            <NavLink
              to="/profile"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-5 w-5" />
              <span>User</span>
            </NavLink>
            <NavLink
              to="/login"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <LogInIcon className="h-5 w-5" />
              <span>Login</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
