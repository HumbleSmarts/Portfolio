import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calc from "../../Assets/Projects/calc.png";
import emotion from "../../Assets/Projects/emotion.png";
import per from "../../Assets/Projects/per.png";
import loginapp from "../../Assets/Projects/loginapp.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ims from "../../Assets/Projects/ims.png";
import light from "../../Assets/Projects/light.png";

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
              imgPath={light}
              isBlog={false}
              title="Buy Light "
              description="Developed Front-End Development for Buy Light: Created a feature-rich and user-friendly front- end interface for an e-commerce platform, duplicating the functionality and design components of BuyPower.ng. Utilized cutting-edge web technology and responsive design concepts to provide consistent user experiences across multiple devices. To improve user engagement and satisfaction, I implemented easy navigation, and dynamic content presentation, all of which contribute to a smooth and visually appealing buying experience for online customers. Using React JS and Tailwind CSS."
              // ghLink="https://github.com/humblesmarts/"
              demoLink="https://buylight.vercel.app"
            />
          </Col>
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
              demoLink="https://loginauthe.vercel.app/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={per}
              isBlog={false}
              title="Portfolio Website"
              description="The Complete Customizable Software Developer Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer"
              ghLink="https://github.com/humblesmarts/portfolio/"
              demoLink="https://humblesmarts.vercel.app/"
            />
          </Col>

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
