
$(document).ready(function(){
  $('.burger').click(function(event){
      event.preventDefault();
    $('.burger, .menu').toggleClass('is-active');
  
    });
  });