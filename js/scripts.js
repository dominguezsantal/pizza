//Business logic

function Pizza(size,toppings){
  this.size = size;
  this.toppings = toppings;
  this.cost = 0.00;
}

//Pizza size pricing
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

function Toppings(crust,meat,cheese,veggies,fruit,sauce){
  this.crust = crust;
  this.meat = meat;
  this.cheese = cheese;
  this.veggie = veggie;
  this.fruit = fruit;
  this.sauce = sauce;
}

//Sauce Pricing
Toppings.prototype.costCalculator = function(topping) {
  if (this.sauce === "tomato" || this.sauce === "alfredo") {
    pizzaPrice += 0.10;
  }
  if (this.crust === "thin" || this.crust === "regular" || this.crust === "thick"){
    pizzaPrice += 0.10;
  } else {
     pizzaPrice += 0.15;
  }
  if (this.meat === "chicken" || this.meat === "bacon" || this.meat === "pepperoni" || this.meat === "salmon" || this.meat === "steak" ) {
    pizzaPrice += 2.00;
  }
  if (this.cheese === "mozarella-cheese" || this.cheese === "harvati-cheese" || this.cheese === "provolone-cheese" || this.cheese === "american-cheese" || this.cheese === "pepperJack-cheese" ) {
    pizzaPrice += 1.50;
  }
  if (this.veggie === "tomato" || this.veggie === "bell peppers" || this.veggie === "onions" || this.veggie === "black olives" || this.veggie === "broccoli") {
    pizzaPrice += 0.50;
  }
  if (this.fruit === "pineapple") {
    pizzaPrice += 0.50;
  }







//User-Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var size = $("#size").val();
    var sauce = $("input:checkbox[name=sauce]:checked").val();
    var newPizza = new Pizza(size, sauce);
