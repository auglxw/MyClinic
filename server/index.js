require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_LINK);

const data = mongoose.model("patient_data", {
    name: { type: String, required: true },
    nric: { type: String, required: true },
    contact: { type: String, required: true },
    dob: { type: String, required: true },
    condition: { type: String, required: true },
    visited: { type: String, required: true },
    timing: { type: String, required: true },
    status: { type: String, required: true }
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.post("/timing", (req, res) => {
    const newPatient = new data({
        name: req.body.name,
        nric: req.body.nric,
        contact: req.body.contact,
        dob: req.body.dateOfBirth,
        condition: req.body.condition,
        visited: req.body.visited,
        timing: req.body.timing,
        status: req.body.status
    });
    newPatient.save();
});

app.post("/checkqueue", async (req, res) => {
    var status = 1;
    var timing = '';
    await data.find({$and: [{'nric': req.body.nric}, {'contact': req.body.contact}]}).then((response) => {
        if (response.length > 0) {
            status = 0;
            timing = response[0].timing;
            console.log(response[0]);
        }
        console.log(status, timing);
    }).catch((err) => {console.log(err)});
    res.send({'status': status, 'timing': timing});
});

app.post("/internal", async (req, res) => {
    await data.find().then((response) => {res.send(response)}).catch((err) => {console.log(err)});
})

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
  console.log(`Express server is up`);
});