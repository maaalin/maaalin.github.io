

// A $( document ).ready() block.
// $( document ).ready(function() {
//     alert( "ready!" );
// });

$(document).ready(function(){
    $("#backpacking").hover(function()
    {
        $("#backpacking").css("color", "#e9b0b5");
    }, function()
    {
        $("#backpacking").css("color", "black");
    });
});




$(document).ready(function(){
$(".button").hover(function(){
$(".dropdown").slideToggle();
});
});



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



1
2
3
4
