

// Buisness Logic
var inputNumber = function(userInput){
// this will take counted data from user
  var countArray = [];
  // this loop will make countArray
  debugger;
    for (var index = 0; index <= userInput; index+= 1) {
      if (index === 0){
        countArray.push("beep!")
      }
      else if ((index % 3) === 0) {
        countArray.push("I'm sorry, Dave. I'm afraid I can't do that")
      }
      else if (index === 1) {
        countArray.push("boop!")
      }
      else if ((index % 10) >= 1){
        countArray.push("beep!")
      }
      else if (index !== 0 && index !== 1 && index % 3 !== 0){
        countArray.push(index);
      }
      $("span#user-output").text(countArray)
    }
}

// userInput
$(function(){
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#user-input').val());
  console.log(inputNumber(userInput))
  });
});
