import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";
import Header from "../components/Header";

function Internal() {
    const [functionality, setFunctionality] = useState("Dashboard");
    const [data, setData] = useState([]);
    var count = 1;

    async function retrieveData() { /* function to make psot reqquest to retrieve patient data from database */
        await Axios.post("http://localhost:3001/internal").then((response) => {setData(response.data);}).catch((err)=>{console.log(err)});
    }

    useEffect(() => {
        retrieveData();
    }, []) /* [] as second argument so that this effect is not dependent on state to avoid endless post request calls */

    return <div>
    <Header />
    <nav className="internalNav">
        <a className={functionality == "Dashboard" ? "selectedInternalNavLink" : "internalNavLink"} href="#" onClick={() => {setFunctionality("Dashboard")}} >Dashboard</a>
        <a className={functionality == "Bookings" ? "selectedInternalNavLink" : "internalNavLink"}  href="#" onClick={() => {setFunctionality("Bookings")}} >View Bookings</a>
        <a className={functionality == "Timings" ? "selectedInternalNavLink" : "internalNavLink"}  href="#" onClick={() => {setFunctionality("Timings")}} >Update Timings</a>
    </nav>
    <div className="bookingsTable">
        <Table striped bordered hover variant="dark" >
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Patient Name</th>
                    <th>Contact</th>
                    <th>NRIC</th>
                    <th>Appointment Timing</th>
                    <th>Condition</th>
                    <th>Visited Before</th>
                    <th>Queue Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(patient => <tr key={patient._id}>
                    <td>{count++}</td>
                    <td>{patient.name}</td>
                    <td>{patient.contact}</td>
                    <td>{patient.nric}</td>
                    <td>{patient.timing}</td>
                    <td>{patient.condition}</td>
                    <td>{patient.visited}</td>
                    <td>{patient.status}</td>
                    <td><a href="/internaledit">Edit</a></td>
                </tr>)}
            </tbody>
        </Table>
    </div>
    </div>
}

export default Internal;