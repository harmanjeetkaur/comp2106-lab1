//reference node's fileSystem module
var fs = require('fs');

//print food title
console.log('FOOD');

//read food file
var food= fs.readFileSync('food.txt', 'utf-8');

//display food list
console.log(food);

//print drinks title
console.log('DRINKS');

//read the drinks file
var drinks= fs.readFileSync('drinks.txt', 'utf-8');

//display drink list
console.log(drinks);