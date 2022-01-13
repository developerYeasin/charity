new WOW().init();

// sticky header
window.addEventListener("scroll", function(){
  var header = document.querySelector("#header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

//back to top

var scrollTop = document.querySelector(".scrollTop");
window.addEventListener("scroll", function(){
  scrollTop.classList.toggle("d-block", window.scrollY > 500);
});
scrollTop.addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

jQuery(document).ready(function ($) {
  $(".counter").counterUp({ delay: 10, time: 1000 });
});

// owl-carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTime: 500,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });