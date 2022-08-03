import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";
import Axios from "axios";

function CheckQueue() {
    const [nric, updateNRIC] = useState('');
    const [contact, updateContact] = useState('');
    const [formComplete, updateFormComplete] = useState(false);
    const [queuestatus, updateStatus] = useState(0);

    async function getStatus(nric, contact) {
        if (nric.length < 9 && contact.length < 8) {
            return updateFormComplete(false);
        }

        updateFormComplete(true);
        let status = await Axios.get("http://localhost:3001/checkqueue", {"nric" : nric, "contact" : contact});
        return updateStatus(status);
    }

    return <div className="checkQueue">
        <Header />
        <div className="bookingCard"> 
            <p className="bookingHeading">Check Queue Status</p>
            <form className="registrationForm" action={formComplete ? "/queuestatus" : "/checkqueue"} >
                    <input type="text" placeholder="NRIC" onChange={(e) => updateNRIC(e.target.value)} />
                    <input type="text" placeholder="Contact Number" onChange={(e) => updateContact(e.target.value)} />
                    <div className="bookingNext">
                        <button className="pillButton" onClick={() => getStatus(nric, contact)} >Next</button>
                    </div>
                </form>
        </div>
    </div>
}

export default CheckQueue;