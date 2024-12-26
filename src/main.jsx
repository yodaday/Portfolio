import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/portfolio";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Project from "./components/project/project"; // Import the new Project component
import SocialMedia from "./social_media";
import "./index.css";

// Home component
function Home() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <p>
        Hi there! I am Ayush Dangol. I am a Java Full Stack Developer. I have
        been working in this field for 2 years. I have worked on various
        projects and have gained a lot of experience. I am always eager to learn
        new technologies and explore new things. I am passionate about
        photography and love to capture moments. I am looking forward to working
        on new projects and collaborating with new people. Feel free to contact
        me if you have any queries or want to collaborate on a project. I am
        always open to new opportunities.
      </p>
    </>
  );
}

// Render the root component with routing
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Project />} />{" "}
          <Route path="/contact" element={<Contact />} />
          <Route path="/social" element={<SocialMedia />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </StrictMode>
);
