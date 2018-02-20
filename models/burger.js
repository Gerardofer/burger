const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.selectAll("burgers", (res) => {
            console.log(res);
            cb(res);
        });
    },

    create: function (cols, vals, cb){
        orm.InsertOne("burgers", cols, vals, (res) => {
            // console.log(res)
            cb(res);
        });
    },

    update: function(colVals, condition, cb){
        orm.updateOne("burgers", colVals, condition, (res) => {
            console.log(res);
            cb(res);
        });
    }
};

module.exports = burger;

// burger.create("burger_name", "Carne Asada Burger");
