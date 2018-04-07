import $ from 'jquery';
  
$('#right-arrow').click(function(){
   var currentSlide = $('.slide.active');
   var nextSlide = currentSlide.next();
   
   currentSlide.fadeOut(300).removeClass('active');

});

export default Slider;