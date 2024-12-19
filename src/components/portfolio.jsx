import React from "react";
import "./portfolio.css";

function Portfolio() {
  return (
    <div>
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
        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Git</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>
            Email:<a href="mailto:meiayush@gmail.com">ayush</a>
          </li>
          <li>
            Phone:<a href="tel">484848484</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
