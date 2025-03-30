import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Code, Menu, X } from "lucide-react";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b shadow-md">
      <div className="container flex h-16 px-4 md:px-6 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">TechCraft</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
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
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
