import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails } from "../actions.js";
import Axios from "axios";

function BookingConfirmed() {
    const dispatch = useDispatch();
    const patientDetails = useSelector(state => state.details);
    const [timing, updateTiming] = useState(patientDetails.timing);

    async function postData() {
        dispatch(updateDetails([]));
        Axios.post("http://localhost:3001/timing", patientDetails);
    }

    return <div className="confirmation">
        <Header />
        <div className="bookingCard">
            <form action="/" onSubmit={postData}>
                <img src={require("../img/confirmation_tick.png")} className="confirmationTick"></img>
                <p className="bookingHeading">Booking Success!</p>
                <p>Your doctor's appointment for {timing} has been confirmed.</p>
                <p>You may check your queue status from the home page.</p>
                <button type="submit" className="confirmationButton">Return to Home Page</button>
            </form>
        </div>
    </div>
}

export default BookingConfirmed;