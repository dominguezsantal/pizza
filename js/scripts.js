//Business logic

function Pizza(size,toppings){
  this.size = size;
  this.toppings = toppings;
  this.cost = 0.00;
}


Pizza.prototype.costCalculator = function(topping) {
  var pizzaPrice = 0;
  if (this.size === "small") {
    pizzaPrice = 6.00;
  } else if (this.size === "medium") {
    pizzaPrice = 8.00;
  } else if (this.size === "large") {
    pizzaPrice = 10.00;
  } else if (this.size === "extra-large") {
    pizzaPrice = 12.00;
  }







//User-Interface Logic
