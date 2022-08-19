import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { updateQueueStatus } from "../actions";
import { useNavigate } from "react-router-dom";

function QueueStatus() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const queuestate = useSelector(state => state.queueStatus);
    const [status, updateStatus] = useState(queuestate.status);
    const [timing, updateTiming] = useState(queuestate.timing);
    const [backToHome, updateBackToHome] = useState(false);

    function returnHome() {
        dispatch(updateQueueStatus([])); /* set queue status state back to default */
        return updateBackToHome(true);
    }

    useEffect(() => {
        backToHome && navigate("/"); /* navigate to the queue status page when form is successfully submitted */
    });

    const statuses = ['In Queue', 'Not Found'];
    const statement = ["You have a doctor's appointment at " + timing + ".", "No records found!"];
    const elaboration = ["Please head down to the clinic 15 minutes before your appointment. Your slot will be forfeited if you are not here 5 minutes after the start time.", "Please register through our website or contact our staff."];
    return <div className="queueStatus">
        <Header />
        <div className="bookingCard">
            {status == 0 && <img src={require("../img/calendar.png")} className="queueStatusPic"></img>}
            {status == 1 && <img src={require("../img/notfound.png")} className="queueStatusPic"></img>}
            <p className="bookingHeading">Queue Status: {statuses[status]}</p>
            <p>{statement[status]}</p>
            <p>{elaboration[status]}</p>
            <button onClick={returnHome} className="confirmationButton" >Back To Home</button>
        </div>
    </div>
}

export default QueueStatus;