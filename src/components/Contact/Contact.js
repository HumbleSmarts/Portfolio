import React from 'react';
import ContactForm from "./ContactForm";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
// import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
  
  } from "react-icons/ai";
  import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FormItem } from './FormItem';


function Contact(){
    return(
        <Container fluid className="contact-section" id="contact">

            <Particle />
            <Container>
            <h1><span className='purple'>Let's Get in Touch:</span> <br />Ways to Connect with Me</h1>
            <Row >
                <Col md={6} className="contact-about-social" >
                <br/><br/><br/><br/>
                    <h2>
                        Connect with me on  
                    </h2>
        
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
                        <li className="contact-icons" >
                            <a
                            href="https://www.facebook.com/officailhumblesmarts/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  contact-social-icons"
                            >
                                <FaFacebook />
                            </a>
                        </li>
                        <li className="contact-icons">
                            <a
                            href="https://twitter.com/humblesmart1/"
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

                <Col md={6} style={{ paddingBottom: 20 }}>
                    <div>
                        <br/><br/>
                        <h2>Get In Touch</h2>

                        <ContactForm />
                    </div>
              
            </Col>
            </Row>

            </Container>
        </Container>
    );

}


export default Contact;