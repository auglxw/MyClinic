import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import {Container, Row, Col, Button} from "react-bootstrap";

function Header() {
    return <div>
        <p className="header-title">MyClinic <Icon.Clipboard2Pulse /></p>
    </div>
}

function HomeContent() {
    return <Container className="homeContainer">
        <Row>
            <Col lg={{span:7, order:1}} xs={{span:12, order:2}} className="taglineCol">
                <p className="tagline-title">MAKE WAITING COMFORTABLE!</p>
                <p className="tagline-subtitle">Book your doctor's appointment online</p>
                <div>
                    <Button variant="outline-secondary" className="homeButton">Register Now</Button>
                    <Button variant="outline-secondary" className="homeButton">Check Queue Status</Button>
                    <Button variant="outline-secondary" className="homeButton">Check Prescription</Button>
                </div>
            </Col>
            <Col lg={{span:5, order:2}} xs={{span:12, order:1}}>
                <img src={require("../img/clinic_clipart.png")} alt="clinic clipart" className="clinic_img"></img>
            </Col>
        </Row>
    </Container>
}

export {HomeContent, Header};