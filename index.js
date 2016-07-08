var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/message', function (req, res){
  console.log(req.params);
  // MongoClient.connect(url, function(err, db) {
  //   assert.equal(null, err);
  //   console.log("Connected correctly to server.");
  //   db.close();
  // });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
