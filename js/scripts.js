


var inputNumber = function(userInput){
// this will take counted data from user
// debugger;
  var countArray = [];
  // this will make countArray
    for (var index = 0; index <= userInput; index+= 1) {
      // debugger;
      var userCount = index;
      countArray.push(index);
  }
 // This will create a new array from list created by user
  var afterCountArray = countArray.slice()
  // var test = afterCountArray.split('')
//this will combine all chacters and split each one up
var arrayString = afterCountArray.toString()
var newArra2 = [];
var newArra = newArra2.push(arrayString)
var parseIntTest = parseInt(arrayString)
var SplitArra2 = newArra2.join('')
//
// parseIntTest.forEach(){};


//
// var parseString = parseInt(arrayString)
// var stringSplit = parseString.split("")

// var index = arrayString.indexOf("1")
// var index2 = arrayString.indexOf("2")
//  if (index !== -1){
//    arrayString[index] = "beep";
//    }
//  if (index2 !== -1){
//    arrayString[index2] = "boop"
//  }





// this array will change each number to create response
 // afterCountArray.forEach(function(afterCountArra){
 //    if(afterCountArra === 0){
 //      afterCountArray.splice()
 //    }
 // console.log(parseArray)
 // console.log(stringSplit)
 console.log(SplitArra2)
 console.log(afterCountArray)
 console.log(parseIntTest)
console.log(countArray)
console.log(arrayString)
console.log(newArra2)

}




  //this map will sort through countArray







$(function(){




  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#user-input').val());
  console.log(inputNumber(userInput))


  });

});
