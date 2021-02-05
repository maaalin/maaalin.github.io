

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
    $("#nay").hover(function()
    {
        $("#nay").css("color", "#e9b0b5");
    }, function()
    {
        $("#nay").css("color", "black");
    });
});

function mouseOver() {
  document.getElementById("om").style.color = "#e9b0b5";
}

function mouseOut() {
  document.getElementById("om").style.color = "black";
}


$(document).ready(function(){
$(".button").hover(function(){
$(".dropdown").slideToggle();
});
});
