$(function(){

  $('.showcase-container').parent().mouseenter(function(){
    $('.portfolio-showcase').show();
  }).mouseleave(function(){
      $('.portfolio-showcase').hide();
  });

  $('.appointments').parent().mouseenter(function(){
    $('.appt-container').show();
  }).mouseleave(function(){
    $('.appt-container').hide();
  });

  $('.memory').parent().mouseenter(function(){
    $('.mem-container').show();
  }).mouseleave(function(){
    $('.mem-container').hide();
  });

});
