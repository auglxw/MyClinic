import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import {Container} from "react-bootstrap";
import Header from "../components/Header";
import UserOptionButtons from "../components/UserOption";

function UserType() {
    return <Container fluid className="userType">
        <Header />
        <p className="userTypePageTitle">Select An Option</p>
        <UserOptionButtons />
    </Container>
}

export default UserType;