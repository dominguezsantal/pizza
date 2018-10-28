// Biz Logic
var meatTypeInput = 0;
var vegetableTypeInput = 0;
var cheeseTypeInput = 0;
var totalToppings = 0;

function toppingTypes(num1, num2){
  return num1 + num2;
};



// var totalSign = stressSignInput + healthSignInput;


// User Logic
$(document).ready(function(){
  $("form#pizzaSurvey").submit(function(event){
    event.preventDefault();

    totalToppings = 0;
    meatTypeInput = 0;
    vegetableTypeInput = 0;
    cheeseTypeInput = 0;

    $("input:checkbox[name=meatType]:checked").each(function(){
      meatTypeInput += 1;
    });

    $("input:checkbox[name=vegetableType]:checked").each(function(){
      vegetableTypeInput += 1;
    });

    $("input:checkbox[name=cheeseType]:checked").each(function(){
      cheeseTypeInput += 1;
    });

    totalToppings = toppingTypes(meatTypeInput, vegetableType, cheeseType);

    totalToppings();
    // getAnswer(totalStress);

    // $("#fun-responses").show();
    // $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //   var funTransportationMode = $(this).val();
    //   $('#fun-responses').append(funTransportationMode + "<br>");
    // });
    //
    // $('form#stressSurvey').fadeOut();
    $("#answerBox").fadeIn();
// console.log(totalStress);
  });
});
