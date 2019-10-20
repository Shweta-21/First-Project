//Script
$(document).ready( function(){

  // Starting Overlay
  setTimeout( function(){
    $('.Initial').fadeOut();
  }, 3000);

  // Navigation Hover Effect
  $('.Header-svg').mouseover( function(){
    $('.Header-svg').show();
    $('.Header-text').hide();
    $(this).hide();
    $(this).siblings().show();
  });
  $('.Header-right').mouseleave(function(){
    $('.Header-svg').show();
    $('.Header-text').hide();
  })


});