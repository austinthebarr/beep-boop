


var inputNumber = function(userInput){
// this will take counted data from user
  var countArray = [];
  // this will make countArray
    for (var index = 0; index <= userInput; index+= 1) {

      if (index === 0){
        countArray.splice(index,1,"beep!")
      }
      else if ((index % 3) === 0) {
        countArray.splice(index,1,"I'm sorry, Dave. I'm afraid I can't do that")
      }
      else if (index !== 0 && index !== 1 && index % 3 !== 0){
        countArray.push(index);
      }
      else if (index === 1) {
        countArray.splice(index,1,"boop!")
      }
      $("span#user-output").text(countArray)

  }

}


$(function(){
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#user-input').val());
  console.log(inputNumber(userInput))
  });
});
