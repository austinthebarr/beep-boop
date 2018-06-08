


var inputNumber = function(userInput){
// this will take counted data from user

var countArray = [];
// this will make countArray
  for (var index = 0; index <= userInput; index+= 1) {
    var userCount = index;
    countArray.push(index);
}
var afterCount = countArray.slice()
var string = countArray.toString();
console.log(afterCount)
}

//this map will sort through countArray







$(function(){




  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#user-input').val());
  console.log(inputNumber(userInput))


  });

});
