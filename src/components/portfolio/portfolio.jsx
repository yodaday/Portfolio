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
          project. I am always open to new opportunities. <br />
          <br />
          Experience in complete Software Development Life Cycle (SDLC) starting
          from requirement analysis, design, development, coding, testing,
          debugging, and implementation. ♦ Good knowledge and experience on J2EE
          technologies such as Java, JSP/Servlets, Struts 2.0, JPA, Hibernate,
          EJB, JMS, Web Services, WSAD, RAD, MySQL, DB2, Postgres, Dojo, AJAX. ♦
          Experience working with Agile Methodology. ♦ Good knowledge of
          Database Connectivity (JDBC) for Databases like Oracle, SQL Server,
          MySQL, MS Access. ♦ Exposure in Web/Application Servers such as Apache
          Tomcat and IBM WebSphere. ♦ Knowledge on Microservices and Spring
          Boot. ♦ Experience of handling/creating/monitoring Docker
          images/builds on multiple PROD servers with Docker compose. ♦ Designed
          and developed core business model and business rules within the
          application using Java and J2EE technologies. ♦ Experience in using
          Web Services with the help of WSDL to get the data with different
          rentals. ♦ Solid experience in deploying JEE components on Apache
          Tomcat, and WebSphere application servers. ♦ Pro`icient in developing
          various open-source frameworks like Struts, Spring, JSF, and ORM
          Technology like Hibernate. ♦ Expertise in continuous build and
          deployment tools like Jenkins and release process. ♦ Strong
          interpersonal and communication skills and self-motivated individuals.
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
