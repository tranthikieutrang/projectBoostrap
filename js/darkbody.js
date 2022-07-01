document.getElementById("switchButton").onclick = function () {
    document.getElementById("darkBody").classList.toggle("dark");
    document.body.classList.toggle("dark-theme");
};

$(document).ready(function () {
  $("#owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
      },
    },
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("movetop").style.display = "block";
    } else {
      document.getElementById("movetop").style.display = "none";
    }
  }
  document.getElementById("movetop").onclick = topFunction;
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
