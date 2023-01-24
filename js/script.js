//copyright i footer
var paragraph = document.getElementById("year");
var text = document.createTextNode(" 2023 Malin Bengtsson");

paragraph.appendChild(text);
//slut copyright

$(document).ready(function(){



  $(window).resize(function(){
    if($(window).width() > 1080){
      $(".content>a").removeAttr('href');
    }
  });


  //
  // $(".button").click(function(){
  //   $(".menu").slideToggle();
  // });


  $("#submit").click(function() {
        $("form").each(function(){
          this.reset();

        });




  $(window).scroll(function () {
    if($(window).scrollTop() > 100) {
      $(".up").addClass('upShow');
    } else {
      $(".up").removeClass('upShow');
    }
  });


});

});
