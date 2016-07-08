var port = process.env.PORT || 3000;

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/message', function (req, res){
  console.log(req.body);
  // MongoClient.connect(url, function(err, db) {
  //   assert.equal(null, err);
  //   console.log("Connected correctly to server.");
  //   db.close();
  // });
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
