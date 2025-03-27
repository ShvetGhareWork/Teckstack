import { Code } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <NavLink href="/" className="flex items-center space-x-2">
                <Code className="h-6 w-6" />
                <span className="font-bold">TechCraft</span>
              </NavLink>
              <p className="text-sm text-muted-foreground">
                We craft exceptional web and mobile applications using
                cutting-edge technologies.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Mobile Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    UI/UX Design
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Backend Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Custom Software
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Our Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Terms of Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Cookie Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} TechCraft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
