import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";

function QueueStatus() {
    const [queueStatus, updateStatus] = useState(2);

    const statuses = ['In Queue', 'Completed', 'Not Found'];
    const statement = ["You have a doctor's appointment at", "You have seen the doctor at", "No records found!"];
    const elaboration = ["Please head down to the clinic 15 minutes before your appointment. Your slot will be forfeited if you are not here 5 minutes after the start time.", "Take care and rest well!", "Please register through our website or contact our staff."];
    return <div className="queueStatus">
        <Header />
        <div className="bookingCard">
            {queueStatus == 0 || queueStatus == 1 && <img src={require("../img/calendar.png")} className="queueStatusPic"></img>}
            {queueStatus == 2 && <img src={require("../img/notfound.png")} className="queueStatusPic"></img>}
            <p className="bookingHeading">Queue Status: {statuses[queueStatus]}</p>
            <p>{statement[queueStatus]}</p>
            <p>{elaboration[queueStatus]}</p>
        </div>
    </div>
}

export default QueueStatus;