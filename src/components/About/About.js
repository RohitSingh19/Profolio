import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaHackerrank,
  FaGithubSquare,
  FaLinkedin,
  FaDev,
  FaMedium,
  FaInstagram,
  FaFacebookSquare,
  FaIdCard,
  FaBookReader
} from "react-icons/fa";
import workExp from './work-exp.json';
import education from './education.json';
import skillsIcons from './skills.json';


function About() {

  const getWorkItems = (workItems) => (
    workItems.map((work, i)=>(<li key={i}>{workItems[i]}</li>))
  )
  
  const getProjectData = (projects) => (
    projects.map((p) => (
      <React.Fragment key={p.projectTitle}>
      <strong>
          <u>{p.projectTitle}</u>
      </strong>
      <br /><br />
      <ul className="timeline-list">
        {getWorkItems(p.workItems)}
      </ul>
      </React.Fragment>
    ))
  )

  const getVerticalTimelineItemsForWork = workExp.map(data => 
    (
      <VerticalTimelineElement
       key={data.id}
       contentStyle={{
        background: "white",
        color: "#87209e"
      }}
       contentArrowStyle={{
        borderRight: "7px solid white",
      }}
       iconStyle={{
        background: "#87209e",
        color: "#fff",
      }} 
       icon={<FaIdCard />}>
      <h3 style={{ color: "#1b1a2ea9" }}>{data.jobTitle}</h3>
      <h6 style={{ color: "#1b1a2ea9" }}>{data.companyName} <b>({data.duration})</b>
      </h6>
      <br />
       {getProjectData(data.projects)}
      </VerticalTimelineElement>
    ));

  
    const getVerticalTimelineItemsForEducation = education.map(data => 
      (
        <VerticalTimelineElement
         key={data.id}
         contentStyle={{
          background: "white",
          color: "#87209e"
        }}
         contentArrowStyle={{
          borderRight: "7px solid white",
        }}
         iconStyle={{
          background: "#87209e",
          color: "#fff",
        }} 
         icon={<FaBookReader />}>
        <h3 style={{ color: "#1b1a2ea9" }}>{data.name}</h3>
        <h6 style={{ color: "#1b1a2ea9" }}> {data.institue} <b>({data.duration})</b>
        </h6>
        <br />
        </VerticalTimelineElement>
      ));

  
  const getSkillsIcons  = skillsIcons.map(data => (
      <li key={data.id} className="tech-icon" title={data.skillName}>
          <i className={data.iconClass}></i>
      </li>
  ))
   

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col
            md={12}
            xs={12}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <Row>
              <Col md={12} xs={12}>
                <h1>
                  <strong>Work Expierence</strong>
                </h1>
                <VerticalTimeline>
                  {getVerticalTimelineItemsForWork}
                </VerticalTimeline>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={12} xs={12}>
                <h1>
                  <strong>Education</strong>
                </h1>
                <VerticalTimeline>
                  {getVerticalTimelineItemsForEducation}
                </VerticalTimeline>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
              <Col md={6} xs={12}>
                <h1>
                  <strong>Tech Stack/Skills</strong>
                </h1>
                <Row>
                  <Col md={12}>
                    <ul>{getSkillsIcons}</ul>
                  </Col>
                </Row>
              </Col>
              <Col md={6} xs={12}>
                <h1>
                  <strong>Social Profiles</strong>
                </h1>
                <Row>
                  <Col md={12}>
                  <ul>
                  <li className="tech-icon">
                  <a
                    href="https://www.hackerrank.com/Rohit_chiki/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <FaHackerrank/>
                    </a>
                  </li>
                  <li className="tech-icon">
                  <a
                    href="https://github.com/RohitSingh19/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <FaGithubSquare/>
                    </a>
                  </li>
                  <li className="tech-icon">
                    <a
                    href="https://www.linkedin.com/in/rohit-singh19/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <FaLinkedin/>
                    </a>
                  </li>
                  <li className="tech-icon">
                  <a
                    href="https://www.facebook.com/profile.php?id=100004338127318"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <FaFacebookSquare/>
                    </a>
                  </li>
                  <li className="tech-icon">
                  <a
                    href="https://dev.to/rohitsingh09/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <FaDev/>
                    </a>
                  </li>
                  <li className="tech-icon">
                  <a
                    href="https://medium.com/@rohitsinghwd1993/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <FaMedium/>
                    </a>
                  </li>
                  <li className="tech-icon">
                  <a
                    href="https://www.instagram.com/rohit_chiki/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <FaInstagram/>
                    </a>
                  </li>
                </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

