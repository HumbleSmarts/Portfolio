import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGithub,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiMacos /> Macos
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode /> VsCode
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPostman /> Postman
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiSlack /> Slack
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiGithub /> Github
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVercel /> Vercel
      </Col>
    </Row>
  );
}

export default Toolstack;
