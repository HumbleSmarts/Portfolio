import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={9} className="home-header">
              <h1 style={{ paddingBottom: 20 }} className="heading">
                Hi!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Humble Abraham</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <Container fluid className="home-about-section" id="about">
      <Container>
      <br/><br/>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              INTRODUCTION <span className="purple"> ABOUT </span> MYSELF
            </h1>
            <p className="home-about-body">
                I build accessible, inclusive products and digital experiences for the web 
                <b className="purple"> (and occasionally designing) </b>exceptional digital experiences, 
                with a background of cinematography.

              <br />
              <br />I am fluent in Technologies like
              <i>
                <b className="purple"> Python, Javascript, Bootstrap, HTML and CSS. </b>
              </i>
              <br />
                      <br />
                      My field of Interest's are building new &nbsp;
                      <i>
                      <b className="purple">Web Technologies and Products </b> and
                      also in areas related to{" "}
                      <b className="purple">
                        AI and Blockchain.
                      </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Django</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          
          <Col md={4} style={{ paddingBottom: 20 }}>
            <Tilt>
            <br/><br/><br/><br/><br/>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Tilt>
              
            </Col>
         
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          
            <h2>
              FEEL FREE TO <span className="purple">CONNECT </span>WITH ME 
            </h2>
            
            <h3>Find me on</h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/humblesmarts/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/humblesmart1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/humblesmarts/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
      </Container>
    </section>
  );
}

export default Home;
