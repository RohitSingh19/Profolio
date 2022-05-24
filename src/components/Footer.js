import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
          <h3>Made with ❤️ by <a href="https://www.linkedin.com/in/rohit-singh19/"
                  target="_blank" style={{color:'white', textDecoration: 'none'}}> 
                  <strong className="multi-color-text">Rohit Singh</strong></a> </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
