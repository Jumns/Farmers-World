$(".partners-one").owlCarousel({
  loop: true,
  // margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  animateOut: "slideOutDown",
  animateIn: "flipInX",
  items: 1,
  // margin: 30,
  // stagePadding: 30,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1
    },
    440: {
      items: 2
    },
    740: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});

$(document).ready(function() {
  $(".test-one").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    responsiveClass: true,
    responsive: {
      1000: {
        item0: 1,
        nav: true,
        loop: true
      }
    }
  });
});
