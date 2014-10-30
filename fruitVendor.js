
var fruitVendor = {
  fruitAgg: "I moded all the above fruit",
  addBanana: function(x) { return x+"Banana"},
  addPear: function(x) { return x+"Pear"},
  addApple: function(x) { return x+"Apple"},
  addSteve: function(x) { return x+"Steve"},
  fruits: function(x) {return this.fruitAgg;}
  }
  
module.exports = fruitVendor;