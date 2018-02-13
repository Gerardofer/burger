const express = require ("express");
const router = express.Router();
const burger = require ("../models/burger.js");

// const app = express();

router.get("/", (req, res) => {
    burger.all((data) => {
        let homeObject = {
            burger: data
        };
        console.log(homeObject);
        res.render("index", homeObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([burger_name, devoured], [req.body.burger_name, req.body.devoured], (res) => {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    car.update({devoured: req.body.devoured}, condition, (res) => {
        if (res.changedRows == 0){
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});


module.exports = router;