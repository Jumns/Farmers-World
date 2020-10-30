$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 4000,
  // animateOut: "slideOutDown",
  // animateIn: "flipInX",
  items: 1,
  margin: 30,
  stagePadding: 30,
  smartSpeed: 650,
  responsive: {
    800: {
      item0: 1
    }
  }
});
