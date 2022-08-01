const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = 3001;

const postSchema = mongoose.model("postSchema", {
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

app.post("/timing", (req, res) => {
    const newPatient = new postSchema({
        name: req.body.name,
        nric: req.body.nric,
        contact: req.body.contact,
        dob: req.body.dob,
        condition: req.body.condition,
        visited: req.body.visited,
        timing: req.body.timing
    });
    newPatient.save();
})

app.listen(PORT, () => {
  console.log(`Express server is up`);
});