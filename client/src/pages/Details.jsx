import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import updateDetails from "../actions.js";

function Details() {
    /* const blogs = useSelector((state) => state.blog); */
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [nric, setNRIC] = useState("");
    const [contact, setContact] = useState("");
    const [dob, setDOB] = useState("");
    const [condition, setCondition] = useState("");
    const [visited, setVisited] = useState("");
    const [formComplete, checkCompleted] = useState(false);
    
    const handleChange = (event, infotype) => {
        event.preventDefault();
        switch(infotype) {
            case 'name':
                setName(event.target.value);
                break;
            case 'nric':
                setNRIC(event.target.value);
                break;
            case 'contact':
                setContact(event.target.value);
                break;
            case 'dob':
                setDOB(event.target.value);
                break;
            case 'condition':
                setCondition(event.target.value);
                break;
            case 'visited':
                var newVisited = visited == event.target.value ? "" : event.target.value;
                setVisited(newVisited);
                break;
            default:
                break;
        }

        return;
    }

    const handleSubmit = () => {
        const fields = [name, nric, contact, dob, condition, visited];
        for (let i = 0; i < fields.length; i++) {
            if (fields[i] == "") {
                return checkCompleted(false);
            }
        }
        dispatch(updateDetails({
            name: name,
            nric: nric,
            contact: contact,
            dateOfBirth: dob,
            condition: condition,
            visited: visited
        }));
        console.log(fields);
        return checkCompleted(true);
    }

    return <div className="registration">
        <Header />
        <div className="registrationContent">
            <div className="bookingCard">
                <p className="bookingHeading">Patient Details</p>
                <form className="registrationForm" action={formComplete ? "/timing" : "/details"} >
                    <input type="text" name="name" placeholder="Name" onChange={(e) => handleChange(e, "name")} />
                    <input type="text" name="nric" placeholder="NRIC" onChange={(e) => handleChange(e, "nric")} />
                    <div className="registrationDOB">
                        <span>Date Of Birth:</span>
                        <input type="date" name="dob" onChange={(e) => handleChange(e, "dob")}/>
                    </div>
                    <input type="text" name="contactnumber" placeholder="Contact Number" onChange={(e) => handleChange(e, "contact")} />
                    <input type="text" name="condition" placeholder="Brief Description of Condition" onChange={(e) => handleChange(e, "condition")} />
                    <div className="visitedPatient">
                        <p>Have you visited us before?</p>
                        <button className={visited=="true" ? "pillButton selected" : "pillButton"} value="true" onClick={(e)=>handleChange(e, "visited")}>Yes</button>
                        <button className={visited=="false" ? "pillButton selected" : "pillButton"} value="false" onClick={(e)=>handleChange(e, "visited")}>No</button>
                    </div>
                    <div className="bookingNext">
                        <button className="pillButton" onClick={handleSubmit}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default Details;