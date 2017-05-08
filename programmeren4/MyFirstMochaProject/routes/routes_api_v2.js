// API version 1
var express = require('express');
var router = express.Router();
var path = require('path');
var recipes = require('./recipes.js');
var varrecipes = recipes;


router.get('/info', function(request, response) {
 response.status(200);
 response.json({
 "description": "Dit is een server voor programmeren4 practicum2."
 });
});



router.get('/recipes/:number', function(request, response){
  response.status(200);
  var number = request.params.number || '';
  console.log("number = " + number);

  if (number != ''){
    var wantedrecipe = varrecipes[number];
    response.json(wantedrecipe);
  }else{
    wantedrecipe = varrecipes;
  }

});



router.get('/recipes', function(request, response){
  response.status(200);
  response.json(varrecipes);
});



router.get('*', function(request, response){
  response.status(404);
  response.json({
    "description": "Error; Dit pad bestaat niet!"
  });
});


module.exports = router;
