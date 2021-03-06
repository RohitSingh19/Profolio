import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CustomCard from "../CustomCard/CustomCard";
import axios from 'axios';
import PROJECT_DATA from "./ProjectData";

function Projects() {

  const projects = PROJECT_DATA.map((d) => (
    <Col md={4} className="project-card">
      <CustomCard
        imgPath={d.imgPath}
        isBlog={false}
        title={d.title}
        link={d.link}
        description={d.description}
      />
    </Col>
  ));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
