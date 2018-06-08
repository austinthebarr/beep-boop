$(function(){
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $('input#user-input').val();
    console.log(userInput)
  });

});
