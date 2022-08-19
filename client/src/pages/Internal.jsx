import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import Header from "../components/Header";

function Internal() {
    const [functionality, setFunctionality] = useState("Dashboard");

    return <div>
    <Header />
    <nav className="internalNav">
        <a className={functionality == "Dashboard" ? "selectedInternalNavLink" : "internalNavLink"} href="#" onClick={() => {setFunctionality("Dashboard")}} >Dashboard</a>
        <a className={functionality == "Bookings" ? "selectedInternalNavLink" : "internalNavLink"}  href="#" onClick={() => {setFunctionality("Bookings")}} >View Bookings</a>
        <a className={functionality == "Timings" ? "selectedInternalNavLink" : "internalNavLink"}  href="#" onClick={() => {setFunctionality("Timings")}} >Update Timings</a>
    </nav>
    </div>
}

export default Internal;