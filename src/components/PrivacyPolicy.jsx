import React from "react";
import { Row, Container } from "react-bootstrap"
import '../CSScomponents/PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <Container>
      <Row className="containerStyle">
        <h1 className="titleText">Penguin Workouts Privacy Policy</h1>
        <h2 className="subText">Personal Data and Identifying Information</h2>
        <p className="bodyText">Penguin Workouts does not collect any personal information. It does not access any data from your phone (HealthKit data included). The app has no login or user accounts; all usage of the app is anonymous.</p>
        <h2 className="subText">App Analytics and Tracking</h2>
        <p className="bodyText">Penguin Workouts does not include any third-party trackers and does not collect any analytics data.</p>
      </Row>


    <Row className="containerStyle">
        <h1 className="titleText">Lightyear Privacy Policy</h1>
        <h2 className="subText">Personal Data and Identifying Information</h2>
        <p className="bodyText">Lightyear does not collect any personal information. Location data is not stored or collected by the app. There are no login or user accounts; all usage of the app is anonymous.</p>
        <h2 className="subText">API: sunrise-sunset.org</h2>
        <p className="bodyText">Lightyear does use the <a href="https://sunrise-sunset.org" className="linkStyle"> sunrise-sunset.org </a> API. Read their privacy policy <a href="https://sunrise-sunset.org/privacy" className="linkStyle"> here. </a></p>
        <h2 className="subText">App Analytics and Tracking</h2>
        <p className="bodyText">Lightyear does not include any third-party trackers and does not collect any analytics data.</p>
      </Row>
  </Container>
  );
}

export default PrivacyPolicy;