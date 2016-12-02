
// First line declares function relating to 
// the id being clicked

$("#Subbtn").click(function (){
  alert("Click 'OK' to submit"); // Pop-up alert in broswer
});

console.log("Submit button is working"); // Message to provide Dev with info on whether or not function is working or not

$('#Resbtn').click(function (){
  alert("Click 'OK' to cancel");
});

console.log("Reset button is working");