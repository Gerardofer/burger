const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.selectAll("burgers", (res) => {
            console.log(res);
            cb(res);
        });
    },

    create: function (cols, vals, cb){
        orm.insertOne("burgers", cols, vals, (res) => {
            console.log(res)
            cd(res);
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
