import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImBlog } from "react-icons/im";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by <b className="purple">Engr. Humble</b> </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} <b className="purple">HS</b> </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/humblesmarts"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/humblesmarts1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/humblesmarts/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/humblesmarts/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li className="social-icons">
              <a href="https://humblesmarts.com.ng/"
                 style={{color: "white"}}
                 target="_blank"
                 rel="noopener noreferrer"
                >
                <ImBlog style={{ marginBottom: "2px" }} /> Blog
              </a>
            </li>

                {/* <Nav.Item>
                <Nav.Link
                href="https://humblesmarts.com.ng/"
                target="_blank"
                rel="noreferrer"
                >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                </Nav.Link>
                </Nav.Item> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
