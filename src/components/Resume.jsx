import '../CSScomponents/Resume.css'
import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import resumePDF from "../files/ARilling.pdf"

export default function Resume ()
{
  return (
    <Container>
      <Col className="box">
        <Row className="resumeCategoryHeader" style={{ borderColor: "red" }}><h2>Education</h2></Row>

        <Row className="resumeItemBody" style={{ borderColor: "red" }}  >
          <Col>
            <Row><h3 className="resumeTitleText">University of Wisconsin — Madison</h3></Row>
            <Row><h4 className="resumeSubtitleText"><u>GPA</u>: 3.927</h4></Row>
            <Row><h4 className="resumeSubtitleText"><u>Majors</u>: Computer Science (B.S.) and Finance (B.S.)</h4></Row>
            <Row><h4 className="resumeSubtitleText"><u>Graduation</u>: December 2023</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Relevant Business Coursework</li>
              <ul>
                <li>Derivative Securities</li>
                <li>Asset Pricing and Leverage</li>
                <li>Corporate Finance</li>
                <li>Investment Theory, Financial Markets and Economic Activity</li>
                <li>Introduction to Finance, Financial Reporting I</li>
                <li>Introductory Managerial Accounting, Introductory Financial Accounting</li>
                <li>Business Analytics I & II</li>
                <li>Microeconomics, Macroeconomics</li>
              </ul>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Relevant Computer Science Coursework</li>
              <ul>
                <li>Building User Interfaces</li>
                <li>Algorithms</li>
                <li>Theory of Programming Language Design</li>
                <li>Database Management Systems</li>
                <li>Computer Graphics</li>
                <li>Linear Algebra, Statistics</li>
                <li>Introduction to Human Computer Interaction</li>
                <li>Programming I, II & III (in Java)</li>
                <li>Machine Organization and Programming (in C and Assembly)</li>
              </ul>
            </ul>
          </Col>
        </Row>

        <Row className="resumeCategoryHeader" style={{ borderColor: "aqua" }}><h2>Experience</h2></Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Software Engineering Intern, Charles Schwab</h3></Row>
            <Row><h4 className="resumeSubtitleText">June 2023 - Present</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Clarified the support structure of security margin data by creating a new cloud-based, .NET service that exclusively handled database write functionality.</li>
              <li>Gathered requirements, implemented, tested, and released to production portfolio margin eligibility features to enhance order management and loan origination workflows.</li>
              <li>Identified and fixed a security margin data look up bug which impacted pledged asset loan origination.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Software Engineering Intern, Charles Schwab</h3></Row>
            <Row><h4 className="resumeSubtitleText">June 2022 - August 2022</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Architected new options expiration assignment risk monitoring alerts that created cases for customer accounts with risky options spreads and implemented the backend logic using .NET and C#.</li>
              <li>Utilized knowledge of options to gather requirements from business users for new options assignment risk alerts.</li>
              <li>Developed a workflow to display new assignment risk alerts to end users by parsing case data from the option expiration service's backend with PEGA.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Teaching Assistant, Professor Sebastien Plante</h3></Row>
            <Row><h4 className="resumeSubtitleText">January 2022 - May 2022</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Animated and edited over a dozen 5-15 minute videos covering financial concepts such as feasible and efficient portfolios, short selling, and the statistical analysis of equities.</li>
              <li>Designed graphics and assets to illustrate investing concepts.</li>
              <li>Assisted in the restructuring of course content to utilize Python for teaching investment theory.</li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Personal Projects</h3></Row>
            <Row><h4 className="resumeSubtitleText">October 2020 - Present</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Created <a className="resume" href="/projects/options-visualizer" style={{ color: 'aqua' }}>Options Visualizer</a>, a website that visualizes custom options spreads, using ReactJS.</li>
              <li>Built <a className="resume" href="/projects/fintools" style={{ color: 'aqua' }}>FinTools</a>, a website that consolidates several useful tools for financial calculations, including calculating options payoffs and greeks using the Black-Scholes model</li>
              <li>Created Penguin Workouts, a pleasantly designed and user configurable workout app on iOS built with Swift and SwiftUI.</li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Software Engineering Intern, Wells Fargo</h3></Row>
            <Row><h4 className="resumeSubtitleText">June 2021 - August 2021</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Automated over 20 UI test cases across several workflows to decrease manual testing, utilizing Selenium.</li>
              <li>Created an automated workflow for scanning and validating the contents of auto-generated PDFs.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeCategoryHeader" style={{ borderColor: "rgb(79, 126, 255)" }}><h2>Skills and Certifications</h2></Row>

        <Row className="resumeItemBody" style={{ borderColor: "rgb(79, 126, 255)" }}>
          <Col>
            <h3>Programming Languages</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript / HTML / CSS</li>
              <li>SQL</li>
              <li>C# / .NET</li>
              <li>C / C++</li>
            </ul>
          </Col>

          <Col>
            <h3>Software Proficiencies</h3>
            <ul>
              <li>Figma</li>
              <li>Git (GitHub and Bitbucket)</li>
              <li>Jira</li>
              <li>IDEs: Visual Studio, JetBrains IDEs, Xcode, Eclipse, VS Code</li>
              <li>Excel / Powerpoint</li>
            </ul>
          </Col>

          <Col>
            <h3>Skills and Tools</h3>
            <ul>
              <li>Git (GitHub, Bitbucket)</li>
              <li>Agile</li>
              <li>Object oriented programming</li>
              <li>SOLID design principles</li>
              <li>ReactJS</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="resumeECAandMoreColR">
            <Row className="resumeCategoryHeader" style={{ borderColor: 'lightgreen' }}><h2>Extra-Curricular Activities</h2></Row>
            <Row className="resumeItemBody" style={{ borderColor: 'lightgreen' }}><h3 className="resumeSubtitleText">UW - Madison Track Club | September 2019 - Present</h3></Row>
          </Col>
          <Col className="resumeECAandMoreColL">
            <Row className="resumeCategoryHeader" style={{ borderColor: 'orange' }}><h2>More</h2></Row>
            <Row className="resumeItemBody" style={{ borderColor: 'orange' }}>
              <Col>Click <a className="resume" href={resumePDF} download="ARilling.pdf" style={{ color: 'orange' }}>here</a> to download resume.</Col>
            </Row>
          </Col>
        </Row>
      </Col>


    </Container>
  )
}
