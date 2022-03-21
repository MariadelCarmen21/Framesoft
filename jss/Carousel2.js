var slidePosition2 = 0;
SlideSShow();


function SlideSShow() {
  var i;
  var slides = document.getElementsByClassName("Containers2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition2++;
  if (slidePosition2 > slides.length) {slidePosition2 = 1}
  slides[slidePosition2-1].style.display = "block";
  setTimeout(SlideSShow, 2000); // Change image every 2 seconds
}