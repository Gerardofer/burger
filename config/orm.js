const connection = require ("../config/connection.js");

let orm = {
    selectAll: function(tableInput, cb){
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            };
            // console.log(result);
            cb(result);
        });
    },
    InsertOne: function (table, cols, vals, cb){
        let queryString = "INSERT INTO " + table + " (" + cols + ") VALUES ('" + vals + "');";

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            };
            // console.log(result);
            cb(result)
        });
    },

    updateOne: function (table, varible, value, condition, cb){
        let queryStr = "UPDATE " + table + " SET " + varible + " = " + value + " WHERE id = " + condition + ";";
        connection.query(queryStr, (err, result) => {
            if (err){
                throw err;
            };
            cb(result);
        });
    }
};  

module.exports = orm;
