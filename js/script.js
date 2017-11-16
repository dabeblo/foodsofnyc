// $(document).ready(function() {
//   alert( "ready!" );
// });

$("form#userName").on("submit", function(event) {
   event.preventDefault(); 
  var first_name = $("input#firstName").val();
$("p#personalizedThanks").text("Thank you " + first_name + ". It's our pleasure to serve you.");
});
