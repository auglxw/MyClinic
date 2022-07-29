import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import {Container, Row, Col} from "react-bootstrap";
import Header from "../components/Header";
import Timeline from "../components/Timeline";

function Landing() {
    return <div className="home">
        <Header />
        <Container fluid className="homeContainer">
            <Row className="homeRow">
                <Col lg={6} xs={12} className="taglineCol">
                    <p className="hometitle">Welcome to MyClinic <Icon.Clipboard2Pulse /></p>
                    <p className="homesubtitle">Your Digital Patient Registration Tool</p>
                    <p className="tagline-subtitle">Skip the queue by booking your doctor's appointment online!</p>
                    <ul>
                        <li className="featureListItem"><Icon.CheckCircle /> No physical registration needed</li>
                        <li className="featureListItem"><Icon.CheckCircle /> Select a timeslot that suits your convenience</li>
                        <li className="featureListItem"><Icon.CheckCircle /> No more uncomfortable waits at the clinic</li>
                    </ul>
                </Col>
                <Col lg={6} xs={12} className="timelineCol">
                    <Timeline />
                </Col>
            </Row>
        </Container>
        <div className="getStartedDiv">
            <a href="/usertype" className="getStarted"><span>Get Started <Icon.ChevronDoubleRight /></span></a>
        </div>
    </div>
}

export default Landing;