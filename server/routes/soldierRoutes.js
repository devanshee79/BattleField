const express = require('express');
const soldierModel = require('../model/soldierModel.js');
const app = express.Router();

app.get("/soldier/:id", async (req, res) => {
    try {
        const result = await soldierModel.findById(req.params.id);
        console.log(result);
        if (result) {
            res.send(result);
        } else {
            res.status(400).json("Something went wrong");
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = app;
