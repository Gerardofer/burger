const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    create: function (cols, vals, cb){
        orm.insertOne("burgers", cols, vals, (res) => {
            cd(res);
        });
    },

    update: function(colVals, condition, cb){
        orm.updateOne("burgers", colVals, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;
