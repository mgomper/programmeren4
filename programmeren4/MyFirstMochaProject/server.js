var express = require('express');
var app = express();

app.all('*', function(req, res){
  res.send('Er is een request verstuurd.');
})

app.listen(8080, function() {
    console.log('Server app is listening on port 8080');
  })
