const express = require ("express");
const router = express.Router();
const burger = require ("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        let homeObject = {
            burger: data
        };
        res.render("index", homeObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(["burger_name"], [req.body.burger_name], (result) => {
        console.log(req.body.burger_name);
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({devoured: req.body.devoured}, condition, (result) => {
        if (result.changedRows == 0){
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});


module.exports = router;