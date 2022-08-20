import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";
import Header from "../components/Header";
import { useSelector } from "react-redux";

function InternalEdit() {
    const patient = useSelector(state => state.selectedPatient);

    return <div>
        <h1>{patient.name}</h1>
        <h1>{patient.contact}</h1>
        <h1>{patient.nric}</h1>
        <h1>{patient.condition}</h1>
        <h1>{patient.status}</h1>
    </div>
}

export default InternalEdit;