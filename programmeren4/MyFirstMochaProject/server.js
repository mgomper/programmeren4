var express = require('express');
var app = express();

app.all('*', function(request, response, next) {
 console.log(request.method + " " + request.url);
 next();
})

app.use('/api/v1', require('./routes/routes_api_v1'));
app.use('/info', require('./routes/routes_api_v2'));


app.listen(8080, function() {
    console.log('Server app is listening on port 8080');
  });
