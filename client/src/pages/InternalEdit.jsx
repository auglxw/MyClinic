import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Form, Col, Row, Container } from "react-bootstrap";
import Header from "../components/Header";
import { useSelector } from "react-redux";

function InternalEdit() {
    const patient = useSelector(state => state.selectedPatient);
    const [details, setDetails] = useState({
        name: patient.name,
        contact: patient.contact,
        nric: patient.nric,
        dob: patient.dob,
        condition: patient.condition,
        visited: patient.visited,
        status: patient.status,
    });

    function updateDetails(e, type) {
        var temp = details;
        if (type == "name") {
            temp.name = e.target.value;
        }
        else if (type == "contact") {
            temp.contact = e.target.value;
        }
        else if (type == "nric") {
            temp.nric = e.target.value;
        }
        else if (type == "dob") {
            temp.dob = e.target.value;
        }
        else if (type == "condition") {
            temp.condition = e.target.value;
        }
        else if (type == "visited") {
            temp.visited = e.target.value;
        }
        else if (type == "status") {
            temp.status = e.target.value;
        }
        setDetails(temp);
    }

    return <div>
        <Header />
        <p>Patient Profile</p>
        <Form>
        <Container fluid>
            <Row>
                <Col lg={6}>
                <Form.Group className="mb-3">
                    <Form.Label className="loginformlabel">Name</Form.Label>
                    <Form.Control onChange={(e) => {updateDetails(e, "name")}} value={details.name} />
                </Form.Group>
                </Col>
                <Col lg={6}>
                <Form.Group className="mb-3">
                    <Form.Label className="loginformlabel">Contact</Form.Label>
                    <Form.Control onChange={(e) => {updateDetails(e, "contact")}} value={details.contact} />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                <Form.Group className="mb-3">
                    <Form.Label className="loginformlabel">NRIC</Form.Label>
                    <Form.Control onChange={(e) => {updateDetails(e, "nric")}} value={details.nric} />
                </Form.Group>
                </Col>
                <Col lg={6}>
                <Form.Group className="mb-3">
                    <Form.Label className="loginformlabel">Date Of Birth</Form.Label>
                    <Form.Control onChange={(e) => {updateDetails(e, "dob")}} value={details.dob} />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                <Form.Group className="mb-3">
                    <Form.Label className="loginformlabel">Condition</Form.Label>
                    <Form.Control onChange={(e) => {updateDetails(e, "condition")}} value={details.condition} />
                </Form.Group>
                </Col>
                <Col lg={6}>
                <Form.Group className="mb-3">
                    <Form.Label className="loginformlabel">Visited Before</Form.Label>
                    <Form.Control onChange={(e) => {updateDetails(e, "visited")}} value={details.visited} />
                </Form.Group>
                </Col>
            </Row>
            <Col lg={6}>
            <Form.Group className="mb-3">
                <Form.Label className="loginformlabel">Queue Status</Form.Label>
                <Form.Control onChange={(e) => {updateDetails(e, "status")}} value={details.status} />
            </Form.Group>
            </Col>
            </Container>
            <button>Save Changes</button>
        </Form>
    </div>
}

export default InternalEdit;