import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useRef} from "react";
import Header from "./Header";

function Registration() {
    const ref = useRef();

    return <div className="registration">
        <Header />
        <div className="registrationContent">
            <p className="bookTimeslotHeading">Register Now</p>
            <form className="registrationForm">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="nric" placeholder="NRIC" />
                <input type="date" name="dob" placeholder="Date of Birth" ref={ref} onfocus={() => (ref.current.type = "date")} onblur="(this.type='text')" />
                <input type="text" name="contactnumber" placeholder="Contact Number" />
                <div className="visitedPatient">
                    <p>Have you visited us before?</p>
                    <button>Yes</button>
                    <button>No</button>
                </div>
                <input type="text" name="condition" placeholder="Brief Description of Condition" />
            </form>
        </div>
    </div>
}

export default Registration;