import React, {useState, useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import myImg from "../../Assets/badge.png";
import Tilt from "react-parallax-tilt";
import {AiFillGithub,AiFillInstagram,AiFillFacebook, AiFillTwitterCircle} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiBot } from "react-icons/bi";
import axios from 'axios';
import ModalPopUp from "../ModalPopUp";

function Home() {

 const [modalShow, setModalShow] = useState(false);
 const [randomData, setrandonData] = useState([]);

  const getrandomData = async () => {
    const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
    setrandonData(res);
  };
  
  useEffect(() => {
    getrandomData();
  }, [modalShow]);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ROHIT SINGH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Few words about <span className="multi-color-text"> myself! </span> 
            </h1>
            <p className="home-about-body">
              <br /> From starting off with the simple <b className="purple">Hello World</b> example to solving <b className="purple">complex real-world </b> problems,
              my programming journey has been amazing. Despite knowing some of the best things from the <b className="purple">Programming World </b> I still consider myself a learner. <br /> 
              <br />I'm currently working as <b className="purple">Software Enginner A2 </b> in <b className="purple"> EPAM Systems</b> and my technical skills include
              <i>
                <b className="purple"> OOP, Data Structures and Algorithms, Rest API, C#, Java, .Net Core, SQL, Azure, Git, CI/CD, Angular and ReactJs. </b>
              </i>
              <br />
              <br />
                I like making fun & interactive things with code and also love to talk & write about those things.
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              You can <span className="purple">connect </span>with me on below social channels!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RohitSingh19"
                  target="_blank"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100004338127318"
                  target="_blank"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              {/* <li className="social-icons" title="Click here to know a random fact!">
                <Button className="icon-colour" 
                variant="primary" onClick={() => setModalShow(true)}>
                <BiBot /> 
                  </Button>
              </li> */}
              <li className="social-icons">
              <a
                  href="https://twitter.com/singh_rohit09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                 <AiFillTwitterCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohit-singh19/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/singh.rohit1909/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>

    

      <ModalPopUp
        show={modalShow}
        text={randomData?.data?.text}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
}

export default Home;
