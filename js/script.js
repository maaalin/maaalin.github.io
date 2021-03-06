$(document).ready(function() {


  $("nav div").click(function(){
    $("ul").slideToggle();
    $("ul ul").css("display", "none");
  });

  $('ul li').click(function () {
    $(this).siblings().find('ul').slideUp();
    $(this).find('ul').slideToggle();
  });




  $(window).resize(function(){
    if($(window).width() > 1080){
      $("ul").removeAttr('style');
    }
  });



  $(window).scroll(function () {
    if($(window).scrollTop() > 100) {
      $(".up").addClass('upShow');
    } else {
      $(".up").removeClass('upShow');
    }
  });





});
