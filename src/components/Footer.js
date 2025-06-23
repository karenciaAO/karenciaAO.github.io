import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/contact-img.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer" style={{ marginTop: "20px" }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-start">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/karen-araque/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/karenciaAO"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://medium.com/@karenaraqueo"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Thank you for visiting my website</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }} />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
