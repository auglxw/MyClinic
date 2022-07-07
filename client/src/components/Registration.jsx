import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "./Header";

function Registration() {
    const [visited, setVisited] = useState(0);

    function handleClick(event, num) {
        event.preventDefault();
        num = num == visited ? 0 : num;
        return setVisited(num);
    }

    return <div className="registration">
        <Header />
        <div className="registrationContent">
            <div className="bookingCard">
                <p className="bookingHeading">Patient Details</p>
                <form className="registrationForm">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="nric" placeholder="NRIC" />
                    <div className="registrationDOB">
                        <span>Date Of Birth:</span>
                        <input type="date" name="dob" />
                    </div>
                    <input type="text" name="contactnumber" placeholder="Contact Number" />
                    <input type="text" name="condition" placeholder="Brief Description of Condition" />
                    <div className="visitedPatient">
                        <p>Have you visited us before?</p>
                        <button className={visited==1 ? "pillButton selected" : "pillButton"} onClick={(e)=>handleClick(e, 1)}>Yes</button>
                        <button className={visited==2 ? "pillButton selected" : "pillButton"}  onClick={(e)=>handleClick(e, 2)}>No</button>
                    </div>
                    <div className="bookingNext">
                        <button className="pillButton">Next</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default Registration;