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

    updateOne: function (table, colVals, condition, cb){
        let queryString = "UPDATE" + table;
        queryString += " SET ";
        queryString += objToSql(colVals);
        queryString += " WHERE ";
        queryString += condition;

        // console.log(queryString);
        connection.query(queryString, (err, result) => { 
            if (err) {
                throw err;
            };
            console.log(result);
            cb(result);
        });
    }
};

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }


function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    };
    return arr.toString();
};
  

module.exports = orm;


// orm.selectAll("burgers");

//InsertOne: function (table, cols, vals, cb){
// orm.InsertOne("burgers", "burger_name", "Caraota Burger");