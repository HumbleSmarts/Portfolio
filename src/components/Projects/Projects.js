import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calc from "../../Assets/Projects/calc.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import loginapp from "../../Assets/Projects/loginapp.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ims from "../../Assets/Projects/ims.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ims}
              isBlog={false}
              title="Institute Management System"
              description="Developed web-based institute management, where student can carry out most activites done in a school,
                        capable of handling admission processes, online lectures, result
                        dashboard, student complain management, Admin dashboard, Student dashboard, lecturer
                        dashboard,  build with Python, Django, and Django rest framework JavaScript. Have features which allows 
                        user for realtime messaging, enroll for courses, take permittions, aprove permittion by the 
                        admin or lecturer as well as supports attendence marking."
              ghLink="https://github.com/humblesmarts/ims"
              demoLink="https://github.com/humblesmarts/ims"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loginapp}
              isBlog={false}
              title="Authentication App"
              description="Authenticate web app that alows user and to provide correct login details 
                          or deny any access to the protected data based on their authentication using react 
                          router dom programmed in Reactjs"
              ghLink="https://github.com/humblesmarts/Loginapp/"
              demoLink="https://humblesmarts.github.io/loginapp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hospital Locator"
              description="Realtime hospital finder build with Python, Django and API which feeds data from 
                          Google map to locate a hospital close to you the content. 
                          Accuracy is 99.9 persent."
              ghLink="https://github.com/HumbleSmarts/Blog-app"
              demoLink="https://humblesmarts.github.io/Blog-app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" Code Editor"
              description="Online code and markdown editor build with react.js. 
                          Online Editor which supports html, css, and js code with instant view of website. 
                          Online markdown editor for building README file which supports GFM, Custom Html tags with 
                          toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/humblesmarts/Editor.io"
              demoLink="https://humblesmarts.github.io/editor.io/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="React Calculator "
              description="A simple web-based calculator built with Reactjs for performing basic arithmetic operations."
              ghLink="https://github.com/HumbleSmarts/Reacts-Calculator"
              demoLink="https://humblesmarts.github.io/Reacts-Calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Movie Recomendation System"
              description="Using 'API' for the develpoment a recommentdation system of build in Python, Flash framework. 
                          scribing data from IDMB and thus helping recommends movie based on users
                          preference."
              ghLink="https://github.com/humblesmarts/AI_For_Social_Good"
              demoLink="https://github.com/humblesmarts/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Database Design For a School"
              description="Design of an advanced database system for a school is a 
              comprehensive solution for school management, catering to the diverse 
              needs of administrators, teachers, and students. This database system was
              implemented using a relational database management system (RDBMS)."
              ghLink="https://github.com/humblesmarts/database"
              // demoLink="https://humblesmarts.github.io/Blog-app/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
