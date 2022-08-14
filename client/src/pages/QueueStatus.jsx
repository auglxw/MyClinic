import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

function QueueStatus() {
    const queuestate = useSelector(state => state.queueStatus);
    const queueStatus = queuestate.status;
    const queuetiming = queuestate.timing;

    const statuses = ['In Queue', 'Not Found'];
    const statement = ["You have a doctor's appointment at " + queuetiming + ".", "No records found!"];
    const elaboration = ["Please head down to the clinic 15 minutes before your appointment. Your slot will be forfeited if you are not here 5 minutes after the start time.", "Please register through our website or contact our staff."];
    return <div className="queueStatus">
        <Header />
        <div className="bookingCard">
            {queueStatus == 0 && <img src={require("../img/calendar.png")} className="queueStatusPic"></img>}
            {queueStatus == 1 && <img src={require("../img/notfound.png")} className="queueStatusPic"></img>}
            <p className="bookingHeading">Queue Status: {statuses[queueStatus]}</p>
            <p>{statement[queueStatus]}</p>
            <p>{elaboration[queueStatus]}</p>
        </div>
    </div>
}

export default QueueStatus;