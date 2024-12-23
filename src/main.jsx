import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/portfolio";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Project from "./components/project/project"; // Import the new Project component

// Home component
function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

// Render the root component with routing
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div style={{ backgroundColor: "skyblue", minHeight: "100vh" }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Project />} />{" "}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </StrictMode>
);
