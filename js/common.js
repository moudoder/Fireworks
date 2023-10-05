$(document).ready(function () {
  $('.first-screen-slider').slick({
	  dots: true,
	  infinite: true,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});

  $('.larger-slider').slick({
	  dots: true,
	  infinite: true,
	  slidesToShow: 1,
	  prevArrow: $('.larger-slider-wrapper .arrow-prev'),
	  nextArrow: $('.larger-slider-wrapper .arrow-next'),
	});
})