import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";

function BookingConfirmed() {
    return <div className="confirmation">
        <Header />
        <div className="bookingCard">
            <img src={require("../img/confirmation_tick.png")} className="confirmationTick"></img>
            <p className="bookingHeading">Booking Success!</p>
            <p>Your doctor's appointment for 2.00PM has been confirmed.</p>
            <p>You may check your queue status from the home page.</p>
        </div>
    </div>
}

export default BookingConfirmed;