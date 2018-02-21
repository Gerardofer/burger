const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.selectAll("burgers", (res) => {
            // console.log(res);
            cb(res);
        });
    },

    create: function (cols, vals, cb){
        orm.InsertOne("burgers", cols, vals, (res) => {
            // console.log(res)
            cb(res);
        });
    },

    update: function(cols, vals, condition, cb){
        orm.updateOne("burgers", cols, vals, condition, (res) => {
            // console.log(res);
            cb(res);
        });
    }
};

module.exports = burger;
