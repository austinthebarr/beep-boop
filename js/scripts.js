


var inputNumber = function(userInput){
// this will take counted data from user

  var countArray = [];
  // this will make countArray
    for (var index = 0; index <= userInput; index+= 1) {
      // debugger;
      var userCount = index;
      countArray.push(index);
  }
 // This will create a new array from list created by user
  var afterCountArray = countArray.slice()

 var index = afterCountArray.indexOf(0)
 var index2 = afterCountArray.indexOf(1)
  if (index !== -1){
    afterCountArray[index] = "beep";
    }
  if (index2 !== -1){
    afterCountArray[index2] = "boop"
  }
  // var outputForUser = function(afterCountArray){


// for looop
    // for (var index= 0; index <= afterCountArray.length; index++){
    //   if (afterCountArra.indexOf("0") === 0 ){
    //     afterCountArray.splice( index ,s"boo")
    //   }
    // }

// this array will change each number to create response
 // afterCountArray.forEach(function(afterCountArra){
 //    if(afterCountArra === 0){
 //      afterCountArray.splice()
 //    }
console.log(afterCountArray)
  // }

}




  //this map will sort through countArray







$(function(){




  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#user-input').val());
  console.log(inputNumber(userInput))


  });

});
