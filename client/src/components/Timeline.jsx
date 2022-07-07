import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import {Container, Row, Col} from "react-bootstrap";

function Timeline() {
    return <Container fluid>
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
    </Container>
}

export default Timeline;