var fruitVendor = require('./fruitVendor.js');
var n = process.argv[2]; // Turn the 3rd argument into a number
console.log('Add Banana '+ n + ' is '+ fruitVendor.addBanana(n));
console.log('Add Apple '+ n + ' is '+ fruitVendor.addApple(n));
console.log('Add Pear '+ n + ' is '+ fruitVendor.addPear(n));
console.log('Add Steve '+ n + ' is '+ fruitVendor.addSteve(n));
console.log(fruitVendor.fruits());
console.log(fruitVendor.fruitAgg);
