import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome, I'm <span className="purple">Humble Abraham Wisdom </span>
            from <span className="purple"> Delta State, Nigeria.</span>
            <br /> I'm a BSC holder in the field of Computer Science from a
            prestigous university
            <span className="purple"> IAEC-TOGO, </span> also I'm also an
            International Diploma holder in ICT from
            <span className="purple"> Informatics Academy, Singapore, </span>
            <br />
            <br />
            Additionally, I'm currently working as a{" "}
            <span className="purple"> volunteer </span>
            at <span className="purple"> COZAGLOBAL</span> as Software
            Developer. I've also worked as a{" "}
            <span className="purple">volunteer </span>at
            <span className="purple">
              {" "}
              Dunamis International Gosple Centre{" "}
            </span>
            for four (4) years as Chief Technology Officer (CTO) as a volunteer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing and Drumming
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In the world of programming, we're not just writing code; <br />
            we're crafting the future, one algorithm at a time."{" "}
          </p>
          <footer className="blockquote-footer"> Engr. Humble</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
