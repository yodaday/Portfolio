import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navigation.css";

export function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/portfolio">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navigation;
