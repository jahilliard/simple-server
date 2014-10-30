
function fruitVendor() {
  fruitAgg: "I moded all the above fruit"
 }

  fruitVendor.prototype.addBanana = function(x) { return x+"Banana"},
  fruitVendor.prototype.addPear = function(x) { return x+"Pear"},
  fruitVendor.prototype.addApple = function(x) { return x+"Apple"},
  fruitVendor.prototype.addSteve = function(x) { return x+"Steve"},
  fruitVendor.prototype.fruits = function(x) {return this.fruitAgg;}
  
module.exports = fruitVendor;