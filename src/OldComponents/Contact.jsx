import "../CSScomponents/About.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import me from "../images/me.png"

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

function About() {
  return (
    <Container>
      <Row>
        <Col className="aboutTextStyle"><img src={me} alt="Ally" className="mePicture"/></Col>
        <Col className="aboutTextStyle">
          <Row className="boxStyle">
            <Col>
              <h1>Contact me</h1>
              <h2>
                <ul>
                  <li><Mailto email="anrilling@wisc.edu" obfuscate={true}>Email</Mailto></li>
                  <li>‎<a href="https://www.linkedin.com/in/allyrilling/">LinkedIn</a></li>
                </ul>
              </h2>
            </Col>

          </Row>

          <Row className="boxStyle"><h1><Mailto email="anrilling@wisc.edu" obfuscate={true}>Email me </Mailto>‏‏‎‎or check out my‎‏‏‎‏‏‎ ‎<a href="https://www.linkedin.com/in/allyrilling/">LinkedIn</a>!</h1></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;