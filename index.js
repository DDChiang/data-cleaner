var express = require('express');
var fs = require('fs');
var request = require('request');
var app = express();

app.use(express.static('public'));
app.get('/', function(req, res) {
  var rawData = require('./raw/byrdie-uk-boards');
  var fileName = './data/' + rawData.name + '.js';
  var data = rawData.data;

  data = "'" + data.split(',').join("','") + "'";

  fs.writeFile(fileName, data, function(err){
    console.log(fileName + 'successfully written! - Check "/data/" directory');
  })

  res.send(data);
});

app.listen('8080');
console.log('Bibbidy Boppity Boo! on port 8080');

exports = module.exports = app;
