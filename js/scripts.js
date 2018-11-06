//Business logic

function Pizza(size,toppings){
  this.size = size;
  this.meat = meat;
  this.cheese = cheese;
  this.toppings = toppings;
  this.sauce = sauce;
  this.cost = 0;
}

//Pizza size pricing
Pizza.prototype.priceCalculator = function() {
  if (this.size === "small") {
    this.cost = this.cost + 6;
  }
  else if (this.size === "medium") {
    this.cost = this.cost + 8;
  }
  else if (this.size === "large") {
    this.cost = this.cost + 10;
  }
  else if (this.size === "extra-large") {
    this.cost = this.cost + 12;
  }

//meats
  for (var i = 0; i < this.meat.length; i++){
    this.cost += 2;
  }
//Cheese
  for (var i = 0; i < this.cheese.length; i++){
    this.cost += 1.50;
  }
//toppings
for (var i = 0; i < this.toppings.length; i++){
  this.cost += 0.50;
}
//Sauce
for (var i = 0; i < this.sauce.lenght; i++){
  this.cost += 0.10;
}


  /*if (this.toppings === "thin" || this.toppings === "regular" || this.toppings === "thick"){
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
  if (this.toppings === "tomato" || this.toppings === "bell peppers" || this.toppings === "onions" || this.toppings === "black olives" || this.toppings === "broccoli") {
    pizzaPrice += 0.50;
  }
  if (this.fruit === "pineapple") {
    pizzaPrice += 0.50;
  }
var totalCostCalculator = 'size' + 'toppings' + 'meat' + 'cheese' + 'fruit' + 'sauce';*/

//User-Interface Logic
$(document).ready(function(){
  $("#placed-orders").submit( function(event){
    event.preventDefault();

    var newPizza = new Pizza(size, topping);
    var totalCostCalculator = $("size" + "toppings" + "meat" + "cheese" + "fruit" + "sauce").val();
    $("#placed-orders").click(function(totalCostCalculator){
      $("#placed-orders").print();
      console.log(pizzaPrice);
    });

    /*$('.form-group').click(function(Toppings){
     $("#size").print();
     $("#toppings").print();
     $("#meat").print();
     $("#cheese").print();
     $("#toppings").print();
     $("#fruit").print();
     $("#sauce").print();
     */
});
  /*  newPizza.costCalculator();*/
