$(document).ready(function() {

  //
  $(".button").click(function(){
    $("nav").slideToggle();
    // $("ul ul").css("display", "none");
  });

  // $('ul li').click(function () {
  //   $(this).siblings().find('ul').slideUp();
  //   $(this).find('ul').slideToggle();
  // });



  //
  // $(window).resize(function(){
  //   if($(window).width() > 1080){
  //     $("ul").removeAttr('style');
  //   }
  // });

//   $("nav>div").click(function() {
//   $("nav>ul").toggleClass("menuShow");
//  });
//
//  $('nav div').click(
//   function() {
//     $('ul', this).stop().slideDown(200);
//   },
//   function() {
//     $('ul', this).stop().slideUp(200);
//   }
// );



  $(window).scroll(function () {
    if($(window).scrollTop() > 100) {
      $(".up").addClass('upShow');
    } else {
      $(".up").removeClass('upShow');
    }
  });






});
