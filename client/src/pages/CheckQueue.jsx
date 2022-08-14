import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateQueueStatus } from "../actions.js";
import Axios from "axios";

function CheckQueue() {
    const dispatch = useDispatch();
    const [nric, updateNRIC] = useState('');
    const [contact, updateContact] = useState('');
    const [formComplete, updateFormComplete] = useState(false);
    let navigate = useNavigate();

    async function getStatus() {
        if (nric.length < 9 || contact.length < 8) {
            return updateFormComplete(false);
        }

        await Axios.post("http://localhost:3001/checkqueue", {"nric" : nric, "contact" : contact}). then((res) => {
            dispatch(updateQueueStatus({'status': res.data.status, 'timing': res.data.timing}))
        });

        return updateFormComplete(true);
    }

    useEffect(() => {
        formComplete && navigate("/queuestatus"); /* navigate to the queue status page when form is successfully submitted */
    });

    return <div className="checkQueue">
        <Header />
        <div className="bookingCard"> 
            <p className="bookingHeading">Check Queue Status</p>
            <div className="registrationForm" >
                <input type="text" placeholder="NRIC" onChange={(e) => updateNRIC(e.target.value)} />
                <input type="text" placeholder="Contact Number" onChange={(e) => updateContact(e.target.value)} />
                <div className="bookingNext">
                    <button className="pillButton" onClick={getStatus} >Next</button>
                </div>
            </div>
        </div>
    </div>
}

export default CheckQueue;