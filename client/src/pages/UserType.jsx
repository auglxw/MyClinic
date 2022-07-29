import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import {Container, Row, Col, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function UserType() {
    return <Container fluid className="userType">
        <Header />
        <p className="userTypePageTitle">Select An Option</p>
        <Row className="userTypeRow">
            <Col lg={6} xs={12} className="userTypeCol">
                <Link to="/details">
                    <button className="userTypeCard">
                        <img src={require("../img/doctor_consult.png")} className="userTypePic"></img>
                        <p>Book Doctor's Appointment</p>
                    </button>
                </Link>
            </Col>
            <Col lg={6} xs={12} className="userTypeCol">
                <Link to="/details">
                    <button className="userTypeCard">
                        <img src={require("../img/queue-waiting.jpeg")} className="userTypePic"></img>
                        <p>Check Queue Status</p>
                    </button>
                </Link>
            </Col>
        </Row>
    </Container>
}

export default UserType;