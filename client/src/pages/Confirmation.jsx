import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Axios from "axios";

function BookingConfirmed() {
    const patientDetails = useSelector(state => state.details)

    function postData() {
        console.log(patientDetails);
        Axios.post("http://localhost:3001/timing", patientDetails);
    }

    return <div className="confirmation">
        <Header />
        <div className="bookingCard">
            <form action="/" onSubmit={postData}>
                <img src={require("../img/confirmation_tick.png")} className="confirmationTick"></img>
                <p className="bookingHeading">Booking Success!</p>
                <p>Your doctor's appointment for {patientDetails.timing} has been confirmed.</p>
                <p>You may check your queue status from the home page.</p>
                <button type="submit" className="confirmationButton">Return to Home Page</button>
            </form>
        </div>
    </div>
}

export default BookingConfirmed;