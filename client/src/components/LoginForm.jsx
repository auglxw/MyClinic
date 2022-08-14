import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { Form, Button } from "react-bootstrap";

function Loginform() {
    return <div className="loginform">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className="loginformlabel">Username</Form.Label>
                <Form.Control placeholder="Enter Username" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="loginformlabel">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
        </Form>
        <button className="loginButton">Log In</button>
    </div>
}

export default Loginform;