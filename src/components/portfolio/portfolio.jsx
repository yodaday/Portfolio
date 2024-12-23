import React from "react";
import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import "./portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1 className="title">Ayush Dangol</h1>
      </header>

      <section>
        <p>
          Hi there! I am Ayush Dangol. I am a Java Full Stack Developer. I have
          been working in this field for 2 years. I have worked on various
          projects and have gained a lot of experience. I am always eager to
          learn new technologies and explore new things. I am passionate about
          photography and love to capture moments. I am looking forward to
          working on new projects and collaborating with new people. Feel free
          to contact me if you have any queries or want to collaborate on a
          project. I am always open to new opportunities.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>
            <FaJava size={50} /> Java
          </li>
          <li>
            <SiSpringboot size={50} /> Spring Boot
          </li>
          <li>
            <FaReact size={50} /> React
          </li>
          <li>
            <SiHtml5 size={50} /> HTML
          </li>
          <li>
            <SiCss3 size={50} /> CSS
          </li>
          <li>
            <SiJavascript size={50} /> JavaScript
          </li>
          <li>
            <SiMysql size={50} /> MySQL
          </li>
          <li>
            <FaGitAlt size={50} /> Git
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
