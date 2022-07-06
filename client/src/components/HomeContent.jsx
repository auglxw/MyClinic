import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import {Container, Row, Col, Button} from "react-bootstrap";
import Header from "./Header";

function HomeContent() {
    return <div className="home">
        <Header />
        <Container fluid className="homeContainer">
            <Row className="homeRow">
                <Col lg={{span:6, order:1}} xs={{span:12, order:1}} className="taglineCol">
                    <div>
                        <img src={require("../img/doctor_clipart.png")} alt="clinic clipart" className="clinic_clipart"/>
                    </div>
                    <p className="hometitle">Welcome to MyClinic <Icon.Clipboard2Pulse /></p>
                    <p className="homesubtitle">Your Digital Patient Registration Tool</p>
                    <p className="tagline-subtitle">Skip the queue by booking your doctor's appointment online!</p>
                    <ul>
                        <li className="featureListItem"><Icon.CheckCircle /> <t />No physical registration needed</li>
                        <li className="featureListItem"><Icon.CheckCircle />  Select a timeslot that suits your convenience</li>
                        <li className="featureListItem"><Icon.CheckCircle />  No more uncomfortable waits at the clinic</li>
                    </ul>
                </Col>
                <Col lg={{span:6, order:2}} xs={{span:12, order:2}} className="timelineCol">
                    <Row className="timeline">
                        <Col className="timelineLines" xs="1">
                            <div className="circle"></div>
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className="line"></div>
                            <div className="circle"></div>
                        </Col>
                        <Col xs="5" className="timelineWords">
                            <p className="wordsWithBottomMargin">Provide us with your details</p>
                            <p className="wordsWithBottomMargin">Choose an available time slot</p>
                            <p className="wordsWithBottomMargin">Receive a confirmation email</p>
                            <p>Head down to the clinic at the designated timing</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <div className="getStartedDiv">
            <a href="#" className="getStarted"><span>Get Started <Icon.ChevronDoubleRight /></span></a>
        </div>
    </div>
}

function Registration() {
    return <div>
        <a href="#" className="getStarted"><span>Get Started <Icon.ChevronDoubleRight /></span></a>
        <Container fluid className="timeline">
            <div className="line"></div>
        </Container>
    </div>
}

export default HomeContent;