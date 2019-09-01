let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost/EmployeeDB";
MongoClient.connect(url, function(err, client) {
  let db = client.db('Employees');
  let collection = db.collection('data');
  let cursor = collection.find({EmployeeId: { $gt: 1 }});
  let obj = {
    "EmployeeName": "John"
  };
  // insert(db, obj);
  let newObj = {
    "EmployeeName": "Emine"
  };
  // update(collection, obj, newObj);
  del(collection, newObj);
  cursor.each(function(err, doc) {
    console.log(doc);
  });
  client.close();
});

function insert(collection, obj) {
  collection.insertOne(obj);
}

function update(collection, currentObj, newObj) {
  collection.updateOne(
    currentObj,
    {$set: newObj}
   );
}

function del(collection, obj) {
  collection.deleteOne(obj);
}