import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";

function CheckQueue() {
    return <div className="checkQueue">
        <Header />
        <div className="bookingCard">
            <p className="bookingHeading">Check Queue Status</p>
            <form className="registrationForm" action={true ? "/timing" : "/details"} method="post" >
                    <input type="text" name="nric" placeholder="NRIC"  />
                    <input type="text" name="contactnumber" placeholder="Contact Number" />
                    <div className="bookingNext">
                        <button className="pillButton" >Next</button>
                    </div>
                </form>
        </div>
    </div>
}

export default CheckQueue;