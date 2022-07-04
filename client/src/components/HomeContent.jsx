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
                <Col lg={{span:4, order:1}} xs={{span:8, order:2}} className="taglineCol">
                <div className="taglineContent">
                    <p className="tagline-title">SKIP THE QUEUE!</p>
                    <p className="tagline-subtitle">Book your doctor's appointment online</p>
                    <ul>
                        <li className="featureListItem"><Icon.CheckCircle />  No physical registration needed</li>
                        <li className="featureListItem"><Icon.CheckCircle />  Select a timeslot that suits your convenience</li>
                        <li className="featureListItem"><Icon.CheckCircle />  No more uncomfortable waits at the clinic</li>
                    </ul>
                </div>
                </Col>
                <Col lg={{span:8, order:2}} xs={{span:12, order:1}} className="homeClipartCol">
                    <img src={require("../img/doctor_clipart.png")} alt="clinic clipart" className="clinic_img"></img>
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