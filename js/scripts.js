$(document).ready(function() {
  $(".servicesLink").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#pageOne").offset().top
      },
      1000
    );
  });
  $(".clientsLink").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#pageTwo").offset().top
      },
      1000
    );
  });

  $(".aboutLink").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#pageThree").offset().top
      },
      1000
    );
  });

  $(".contactLink").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#pageFour").offset().top
      },
      1000
    );
  });

  $(document).scroll(function() {
    let y = $(this).scrollTop();
    if (y > 100) {
      $("#headerFollow").fadeIn();
    } else {
      $("#headerFollow").fadeOut();
    }
  });
});
