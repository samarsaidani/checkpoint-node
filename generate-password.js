//  creation des password aleatoire 
var generator = require('generate-password');
var password = generator.generateMultiple(1,{
    length:10,
    numbers:true 
   

}) ;

console.log(password)