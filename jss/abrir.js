(function(){

  $(document).ready(function(){

$('.menu-bar').on('click', function() {
    $('.contenido').toggleClass('abrir');
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


$("#subirparaarriba").on("click",function(){

  $("body, html").animate({
      scrollTop: 0
    }, 500);

});

var altoVentana = 0;
	var posicionVentana = document.getElementById("subirparaarriba").offsetTop;
	$(window).scroll(function(event){
		var posicionScroll = $(this).scrollTop();
	   	if (posicionScroll > (parseInt(posicionVentana)+parseInt(altoVentana))){
	    	$("#subirparaarriba").css("display","none");
	   	} else {
	    	$("#subirparaarriba").css("display","");
	   	}

	});

});

})();