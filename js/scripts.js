$(document).ready(function() {
  $("#info form").submit(function() {

    var bmi = function(weightConvert, heightConvertSquare) {
    	return weightConvert / heightConvertSquare;
    };

    var weight =

    //var weight = parseInt(prompt("What is your weight in pounds?"));
    //var height = parseInt(prompt("What is your height in inches"));

    var weightConvert = weight * 0.45;
    var heightConvert = height * 0.025;
    var heightConvertSquare = Math.pow(heightConvert, 2);

    var result = bmi(weightConvert, heightConvertSquare);

    alert(result);
    event.preventDefault();
  });
});
