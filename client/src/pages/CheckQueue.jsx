import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";
import Axios from "axios";

function CheckQueue() {
    async function getStatus(nric, contact) {
        let status = await Axios.get("http://localhost:3001/checkqueue", {"nric" : nric, "contact" : contact});
        return status;
    }

    return <div className="checkQueue">
        <Header />
        <div className="bookingCard"> 
            <p className="bookingHeading">Check Queue Status</p>
            <form className="registrationForm" action={true ? "/queuestatus" : "/checkqueue"} >
                    <input type="text" placeholder="NRIC"  />
                    <input type="text" placeholder="Contact Number" />
                    <div className="bookingNext">
                        <button className="pillButton" >Next</button>
                    </div>
                </form>
        </div>
    </div>
}

export default CheckQueue;