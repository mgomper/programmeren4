// API version 1
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(request, response) {
 response.status(200);
 response.json({
 "description": "Dit is een server voor programmeren4 practicum2."
 });
});


router.get('*', function(request, response){
  response.status(200);
  response.json({
    "description": "Error; Dit pad bestaat niet!"
  });
});


module.exports = router;
