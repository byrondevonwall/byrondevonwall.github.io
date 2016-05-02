$(function(){

  $('.showcase-container').parent().mouseenter(function(){
    $('.portfolio-showcase').fadeIn();
  }).mouseleave(function(){
      $('.portfolio-showcase').fadeOut();
  });

  $('.appointments').parent().mouseenter(function(){
    $('.appt-container').fadeIn();
  }).mouseleave(function(){
    $('.appt-container').fadeOut();
  });

  $('.memory').parent().mouseenter(function(){
    $('.mem-container').fadeIn();
  }).mouseleave(function(){
    $('.mem-container').fadeOut();
  });

});
