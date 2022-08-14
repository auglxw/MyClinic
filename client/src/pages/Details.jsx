import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { updateDetails } from "../actions.js";

function Details() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [nric, setNRIC] = useState("");
    const [contact, setContact] = useState("");
    const [dob, setDOB] = useState("");
    const [condition, setCondition] = useState("");
    const [visited, setVisited] = useState("");
    const [formComplete, checkComplete] = useState(false);
    
    const handleChange = (event) => {
        event.preventDefault();
        return setVisited(event.target.value);
    }

    const handleSubmit = () => {
        const fields = [name, nric, contact, dob, condition, visited];
        for (let i = 0; i < fields.length; i++) {
            if (fields[i] == "") {
                return checkComplete(false);
            }
        }

        checkComplete(true);

        return dispatch(updateDetails({
            'name': name,
            'nric': nric,
            'contact': contact,
            'dateOfBirth': dob,
            'condition': condition,
            'visited': visited
        }));
    }

    return <div className="registration">
        <Header />
        <div className="registrationContent">
            <div className="bookingCard">
                <p className="bookingHeading">Patient Details</p>
                <form className="registrationForm" action={formComplete ? "/timing" : "/details"} >
                    <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
                    <input type="text" placeholder="NRIC" onChange={(e)=>setNRIC(e.target.value)} />
                    <div className="registrationDOB">
                        <span>Date Of Birth:</span>
                        <input type="date" onChange={(e)=>setDOB(e.target.value)} />
                    </div>
                    <input type="text" placeholder="Contact Number" onChange={(e)=>setContact(e.target.value)} />
                    <input type="text" placeholder="Brief Description of Condition" onChange={(e)=>setCondition(e.target.value)} />
                    <div className="visitedPatient">
                        <p>Have you visited us before?</p>
                        <button className={visited=="true" ? "pillButton selected" : "pillButton"} value="true" onClick={handleChange} >Yes</button>
                        <button className={visited=="false" ? "pillButton selected" : "pillButton"} value="false" onClick={handleChange} >No</button>
                    </div>
                    <div className="bookingNext">
                        <button className="pillButton" onClick={handleSubmit} >Next</button>
                    </div>
                </form>
                <h1>{formComplete}</h1>
            </div>
        </div>
    </div>
}

export default Details;