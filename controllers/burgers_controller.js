const express = require ("express");
const burger = require ("../models/burger.js");

const app = express();

app.get("/", (req, res) => {
    burger.all((data) => {
        var homeObject = {
            burger: data
        };
        console.log(homeObject);
        res.render("index", homeObject);
    });
});

app.post("/api/burger", (req, res) => {
    burger.create([burger_name, devoured], [req.body.burger_name, req.body.devoured], (res) => {
        res.json({id: result.insertId});
    })
})