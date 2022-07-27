import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import {Container, Row, Col, Card} from "react-bootstrap";
import Header from "../components/Header";
import Timeline from "../components/Timeline";

function UserType() {
    return <Container fluid className="userType">
        <Header />
        <Row className="userTypeRow">
            <Col lg={6} xs={12} className="userTypeCol">
                <div className="userTypeCard">
                    <h1>Book Appointment</h1>
                </div>
            </Col>
            <Col lg={6} xs={12} className="userTypeCol">
                <div className="userTypeCard">
                    <h1>Check Queue</h1>
                </div>
            </Col>
        </Row>
    </Container>
}

export default UserType;