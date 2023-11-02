import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiDjango,
  DiJavascript1,
  DiPython,
  DiGit,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiFirebase,
  SiNumpy,
  SiPytorch,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> Python
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> Reactjs
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> Mysql
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango /> Django
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> Javascript
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> Git
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> NodeJs
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /> Firebase
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> Postgresql
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch /> Pytorch
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy /> Numpy
      </Col>
    </Row>
  );
}

export default Techstack;
