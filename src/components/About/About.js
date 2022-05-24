import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { FaHackerrank, FaGithubSquare, FaLinkedin, FaDev, FaMedium, FaInstagram, FaFacebookSquare }
from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            xs={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
        <Row>
          <Col md={12} xs={12}>
             <h1><strong>Work Expierence</strong></h1>
          </Col>
        </Row>
            <Timeline lineColor={"#ddd"}>
              <TimelineItem
                key="001"
                dateText="01/2021 – PRESENT"
                dateInnerStyle={{ background: "#be50f4", color: "white" }}
                bodyContainerStyle={{
                  background: "#ddd",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3 style={{ color: "#2d1950" }}>Software Developer L2</h3>
                <h5 style={{ color: "#2d1950" }}>
                  Xceedance Consulting India Pvt Ltd
                </h5>
                <br />
                <strong>
                  <u>Insurance Domain Project</u>
                </strong>
                <ul>
                  <li>
                    Created recurring jobs using Hangfire to automate the tasks.
                  </li>
                  <li>
                    Implemented notification system that sends Email to users.
                  </li>
                  <li>
                    Built REST APIs to provide back-end services for
                    application.
                  </li>
                  <li>
                    Implemented State Design Pattern for the Rating Engine.
                  </li>
                  <li>
                    Fixed bugs from production and Sonar Cube to improve the
                    performance of application upto 50%.
                  </li>
                  <li>Designed UI for interactive Dashboard.</li>
                  <li>
                    Integration of Third Party APIs to support the functionality
                    of system.
                  </li>
                </ul>
              </TimelineItem>
              <TimelineItem
                key="002"
                dateText="04/2018 – 10/2020"
                dateInnerStyle={{ background: "#be50f4", color: "white" }}
                bodyContainerStyle={{
                  background: "#ddd",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3 style={{ color: "#2d1950" }}>Software Developer</h3>
                <h5 style={{ color: "#2d1950" }}>
                  IP Integrated Services Pvt. Ltd.
                </h5>
                <br />
                <strong>
                  <u>Warehouse Management System</u>
                </strong>
                <ul>
                  <li>Built REST APIs to support the mobile application.</li>
                  <li>
                    Designed and developed reports to provide inventory data
                  </li>
                  <li>Write Unit Test Cases</li>
                  <li>
                    Improved the existing code that reduces the application
                    startup time upto 50%
                  </li>
                  <li>
                    Integrated the system with Tata Cliq APIs for data exchange.
                  </li>
                  <li>
                    Worked efficiently with the Product Team to understand
                    buisness requirements and translate them into code.
                  </li>
                </ul>
                <br />
                <strong>
                  <u>Transport Management System</u>
                </strong>
                <ul>
                  <li>Created Stored Procedures to generate reports</li>
                  <li>
                    Implemented functionality to download invoices for
                    transactions
                  </li>
                  <li>Tested software for bugs and fixed them</li>
                  <li>Designed web pages.</li>
                </ul>
              </TimelineItem>
            </Timeline>
          </Col>
          <Col
            md={4}
            xs={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Row>
              <Col md={12} xs={12}>
              <h1><strong>Tech Stack/Skills</strong></h1>                
              </Col>
            </Row>
            <br/><br/><br/>
            <Row>
              <Col md={12}>
                <ul>
                  <li className="tech-icon">
                    <i class="devicon-csharp-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-azure-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-dotnetcore-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-git-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-html5-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-javascript-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-microsoftsqlserver-plain-wordmark"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-bootstrap-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-css3-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-java-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-firebase-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-npm-original-wordmark"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-typescript-plain"></i>
                  </li>
                  <li className="tech-icon">
                    <i class="devicon-vscode-plain"></i>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={4}
            xs={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Row>
              <Col md={12} xs={12}>
              <h1><strong>Social Profiles</strong></h1>                
              </Col>
            </Row>
            <br/><br/><br/>
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
          <Col
            md={8}
            xs={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
        <Row>
          <Col md={12} xs={12}>
             <h1><strong>Education</strong></h1>
          </Col>
        </Row>
            <Timeline lineColor={"#ddd"}>
              <TimelineItem
                key="001"
                dateText="2015-2018"
                dateInnerStyle={{ background: "#be50f4", color: "white" }}
                bodyContainerStyle={{
                  background: "#ddd",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <h4 style={{ color: "#2d1950" }}>Master's in Computer Application (MCA)</h4>
                <br />
                <h5 style={{ color: "#2d1950" }}>
                  Maharshi Dayanand University, Rohtak
                </h5>
              </TimelineItem>
              <TimelineItem
                key="001"
                dateText="2012-2015"
                dateInnerStyle={{ background: "#be50f4", color: "white" }}
                bodyContainerStyle={{
                  background: "#ddd",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <h4 style={{ color: "#2d1950" }}>Bachelors's in Computer Application (BCA)</h4>
                <br />
                <h5 style={{ color: "#2d1950" }}>
                  Maharshi Dayanand University, Rohtak
                </h5>
              </TimelineItem>
              <TimelineItem
                key="001"
                dateText="2011"
                dateInnerStyle={{ background: "#be50f4", color: "white" }}
                bodyContainerStyle={{
                  background: "#ddd",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <h4 style={{ color: "#2d1950" }}>Senior Secondary</h4>
                <br />
                <h5 style={{ color: "#2d1950" }}>
                    Hans Raj Public High School, Gurgaon (HR)
                </h5>
              </TimelineItem>
            </Timeline>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
