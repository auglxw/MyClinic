import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

function Loginform() {
    let navigate = useNavigate();
    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");
    const [authenticated, updateAuthentication] = useState(false);

    function authenticate() {
        if (username==process.env.REACT_APP_LOGIN_USERNAME && password==process.env.REACT_APP_LOGIN_PASSWORD) { /* checks if username and password match */
            updateAuthentication(true);
        }
    }

    useEffect(() => {
        authenticated && navigate("/"); /*navigate to targeted page if autheticated */
    });

    return <div className="loginform">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className="loginformlabel">Username</Form.Label>
                <Form.Control onChange={(e) => {updateUsername(e.target.value)}} placeholder="Enter Username" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="loginformlabel">Password</Form.Label>
                <Form.Control onChange={(e) => {updatePassword(e.target.value)}} type="password" placeholder="Enter Password" />
            </Form.Group>
        </Form>
        <button onClick={authenticate} className="loginButton" >Log In</button>
    </div>
}

export default Loginform;