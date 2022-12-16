const express = require('express');
const app = express();
const w=require('./workers.json')
app.get('/user', function (req, res) {
  res.send('You send request for user route!');
});
app.get('/transaction', function (req, res) {
  res.send(w);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});