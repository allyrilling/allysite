import "../CSScomponents/AppDevelopment.css";
import React from "react";
import { Row, Col, Container, Nav, Navbar } from "react-bootstrap"
import icon from "../images/penguinicon.svg"
import favicon from "../images/mylogo.svg"
import ovLogo from "../images/ovLogo.svg"
import jslogo from "../images/jslogo.svg"
import reactlogo from "../images/reactlogo.svg"
import rnlogo from "../images/rnlogo.svg"
import dialogflowlogo from "../images/dflogo.svg"
import lightyearicon from "../images/lightyearicon.svg"
import iplogo from "../images/iplogo.svg"
import gralogo from '../images/gralogo.svg';
import ProjectMini from "./ProjectMini";

function Projects ()
{
  return (
    <Container>

      <Col>
        <Row className="headerContainer"><h1>Personal Projects</h1></Row>
        <Row className="rowContainer">
          <Col className='projectMini'><a href="/projects/options-visualizer"><ProjectMini icon={ovLogo} name="Options Visualizer" description="Website" /></a></Col>
          <Col className='projectMini'><a href="/projects/site"><ProjectMini icon={favicon} name="This Site" description="Portfolio Website" /></a></Col>
          <Col className='projectMini'><a href="/projects/penguinworkouts" ><ProjectMini icon={icon} name="Penguin Workouts" description="iOS App" /></a></Col>
          <Col className='projectMini'><a href="/projects/lightyear"><ProjectMini icon={lightyearicon} name="Lightyear" description="iOS App" /></a></Col>
        </Row>

        {/* <Row className="headerContainer"><h1>Designs and Prototypes</h1></Row>
        <Row>
          <a href="/projects/"><ProjectMini icon={icon} name="Loop" description="watchOS/iOS App" /></a>
          <a href="/projects/"><ProjectMini icon={icon} name="Loop Icons" description="Alternate icons for Loop." /></a>
        </Row> */}

        <Row className="headerContainer"><h1>School Projects</h1></Row>
        <Row className="rowContainer">
          <Col className='projectMini'><a href="/projects/javascript"><ProjectMini icon={jslogo} name="JS ɑ/β" description="CS571 Class Project" /></a></Col>
          <Col className='projectMini'><a href="/projects/react"><ProjectMini icon={reactlogo} name="React ɑ/β" description="CS571 Class Project" /></a></Col>
          <Col className='projectMini'><a href="/projects/reactnative"><ProjectMini icon={rnlogo} name="React Native ɑ/β" description="CS571 Class Project" /></a></Col>
          <Col className='projectMini'><a href="/projects/dialogflow"> <ProjectMini icon={dialogflowlogo} name="Dialogflow" description="CS571 Class Project" /></a></Col>
          <Col className='projectMini'><a href="/projects/cs570"><ProjectMini icon={iplogo} name="High Fidelity Prototypes" description="CS570 Class Projects" /></a></Col>
          <Col className='projectMini'><a href="/projects/cs559"><ProjectMini icon={gralogo} name="Graphics Projects" description="CS559 Class Projects" /></a></Col>
        </Row>
      </Col>

    </Container >


  );
}

export default Projects;
