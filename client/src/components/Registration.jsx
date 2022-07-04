import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import Header from "./Header";

function Registration() {
    return <div className="registration">
        <Header />
        <div className="registrationContent">
            <p className="bookTimeslotHeading">Register Now</p>
            <form className="registrationForm">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="nric" placeholder="NRIC" />
                <input type="text" name="contactnumber" placeholder="Contact Number" />
                <input type="text" name="condition" placeholder="Brief Description of Condition" />
                <p>Have you visited us before?</p>
                <div className="visitedPatientButton">
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </form>
        </div>
    </div>
}

export default Registration;