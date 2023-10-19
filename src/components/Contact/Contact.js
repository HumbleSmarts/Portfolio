import React from "react";
import ContactForm from "./ContactForm";
// import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="contact-section" id="contact">
      {/* <span>
        <Particle />
      </span> */}

      <h1>
        <span className="purple">Let's Get in Touch:</span> <br />
        <span> Ways to Connect with Me </span>
      </h1>
      <Row>
        <Col md={6} className="contact-about-social">
          <br />
          <br />
          <br />
          <br />
          <h2>Connect with me on</h2>

          <ul className="contact-about-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/humblesmarts/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.facebook.com/officialhumblesmarts/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  contact-social-icons"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://twitter.com/humblesmarts1/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  contact-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/humblesmarts/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.instagram.com/humblesmarts/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  contact-social-icons"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>

        <Col md={6} style={{ paddingBottom: 50 }}>
          <div>
            <br />
            <br />
            <h2>Get In Touch</h2>
            <ContactForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
