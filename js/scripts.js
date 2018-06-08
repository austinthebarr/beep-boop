$(function(){

var inputNumber = function(userInput){

  for (var index = 0; index <= userInput; index++) {
    return index;

  }
}











  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#user-input').val());
  console.log(inputNumber(userInput))
  });

});
