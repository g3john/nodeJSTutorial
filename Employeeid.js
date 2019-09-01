let express = require('express');
let app = express();
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost/EmployeeDB';
let str = "";

app.route('/Employeeid').get(function(req,res) {
  MongoClient.connect(url, function(err, client) {
    let db = client.db('Employees');
    let cursor = db.collection('data').find();
    cursor.forEach(function(item) {
       if (item != null) {
               str = str + "    Employee id  " + item.EmployeeId + "</br>";
       }
    }, function(err) {
       res.send(str);
       db.close();
      }
    );
  });
});

let server = app.listen(3000, function(){});