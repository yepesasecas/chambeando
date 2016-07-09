var port = process.env.PORT || 3000;

var express = require('express');
var app = express();
var assert = require('assert');
var mongoUrl = 'mongodb://localhost:27017/chambeandoDB';
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect(mongoUrl);
var db = mongoose.connection;
var messageSchema = mongoose.Schema({
  token: String,
  user_name: String,
  message: String,
  response_url: String,
  created_at: Date,
  updated_at: Date
});
var Message = mongoose.model('Message', messageSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB connected");
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/message', function (req, res){
  console.log(req.body);
  var newMessage = newMessage({
    token: req.body.token,
    user_name: req.body.user_name,
    message: req.body.text,
    response_url: req.body.response_url
    created_at: Date.now(),
    updated_at: Date.now()
  });

  newMessage.save(function(err, message){
    if(err) return console.error(err);
    console.log("message guardado!");
    console.log(newMessage);
  });
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
