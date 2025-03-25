import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Code, Menu, X } from "lucide-react";
import "../App.css";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="fixed top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 ml-10 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <NavLink to="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="inline-block text-lg pr-10 font-bold">
                TechCraft
              </span>
            </NavLink>
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <nav
            className={`flex-col md:flex md:flex-row md:items-center md:space-x-10 absolute md:static top-16 left-0 w-full bg-background/95 md:bg-transparent p-4 md:p-0 transition-transform duration-200 ease-in-out ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <NavLink
              to="/services"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
            </NavLink>
            <NavLink
              to="/process"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Process
            </NavLink>
            <NavLink
              to="/portfolio"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/testimonials"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </NavLink>
          </nav>
          <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
            <Button Text="Get Started" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
