import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails } from "../actions.js";

function Timing() {
    const [state, setState] = useState({time: "0", formComplete: 0});
    const morningTimeslots = ["09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45"];
    const afternoonTimeslots = ["14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45"];
    const eveningTimeslots = ["19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45"];
    const patientDetails = useSelector(state => state.details)
    const dispatch = useDispatch();

    function handleClick(event, timeChosen) {
        event.preventDefault();
        timeChosen = timeChosen == state.time ? "0" : timeChosen;
        var complete = timeChosen == "0" ? 0 : 1;
        return setState({time: timeChosen, formComplete: complete});
    }

    function handleSubmit() {
        if (state.formComplete == 1) {
            return dispatch(updateDetails({...patientDetails, 'timing': state.time}));
        }
    }

    return <div className="timeslot">
        <Header />
        <div className="timeslotContent">
            <div className="bookingCard">
            <form action={state.formComplete == 1 ? "/bookingconfirmed" : "/timing"}>
                    <p className="bookingHeading">Available Time Slots</p>
                    <div className="timeslotPeriod">
                        <p>Morning</p>
                        <div className="timeslotButtons">
                            {morningTimeslots.map(function(timing, id) { return <button className={state.time == timing ? "pillButton selected" : "pillButton"} key = {id} onClick={(e)=>handleClick(e, timing)}>{timing}</button>})}
                        </div>
                    </div>
                    <hr />
                    <div className="timeslotPeriod">
                        <p>Afternoon</p>
                        <div className="timeslotButtons">
                            {afternoonTimeslots.map(function(timing, id) { return <button className={state.time == timing ? "pillButton selected" : "pillButton"} key = {id} onClick={(e)=>handleClick(e, timing)}>{timing}</button>})}
                        </div>
                    </div>
                    <hr />
                    <div className="timeslotPeriod">
                        <p>Evening</p>
                        <div className="timeslotButtons">
                            {eveningTimeslots.map(function(timing, id) { return <button className={state.time == timing ? "pillButton selected" : "pillButton"} key = {id} onClick={(e)=>handleClick(e, timing)}>{timing}</button>})}
                        </div>
                    </div>
                    <div className="bookingNext">
                            <button className="pillButton" onClick={handleSubmit}>Submit</button>
                    </div>
            </form>
            </div>
        </div>
    </div>
}

export default Timing;