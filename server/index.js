require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_LINK);

const postSchema = mongoose.model("patient_data", {
    name: { type: String, required: true },
    nric: { type: String, required: true },
    contact: { type: Number, required: true },
    dob: { type: String, required: true },
    condition: { type: String, required: true },
    visited: { type: String, required: true },
    timing: { type: String, required: true }
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.post("/timing", (req, res) => {
    const newPatient = new postSchema({
        name: req.body.name,
        nric: req.body.nric,
        contact: req.body.contact,
        dob: req.body.dateOfBirth,
        condition: req.body.condition,
        visited: req.body.visited,
        timing: req.body.timing
    });
    newPatient.save();
});

app.get("/", (req, res) => {
    const newPatient = new postSchema({
        name: "Augustine",
        nric: "S1234567A",
        contact: 91234567,
        dob: "01-01-2000",
        condition: "Headache",
        visited: "Yes",
        timing: "14:00"
    });
    console.log(newPatient);
    newPatient.save().catch("broken");
    res.send("hello");
});

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
  console.log(`Express server is up`);
});