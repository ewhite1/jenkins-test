var express = require('express');

var app = express();

//respond with hello world 
app.get('/', function (req, res) {
 res.send('hello world');
});
//default port to listen to is 3000
app.listen(process.env.PORT || 3000);

module.exports = app;

