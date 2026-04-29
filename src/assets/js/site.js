(function ($) {
  "use strict";

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").outerHeight() || 120;
    var header = $("header").outerHeight() || 80;

    $("header").toggleClass("background-header", scroll >= box - header);
  });

  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function (event) {
      event.preventDefault();
      $(this).toggleClass("active");
      $(this).attr("aria-expanded", $(this).hasClass("active") ? "true" : "false");
      $(".header-area .nav").slideToggle(200);
    });
  }

  $(".scroll-to-section a[href^='#'], a.scroll-logo[href^='#']").on("click", function (event) {
    var target = $(this.hash);

    if (!target.length) {
      return;
    }

    event.preventDefault();

    if ($(window).width() < 991) {
      $(".menu-trigger").removeClass("active").attr("aria-expanded", "false");
      $(".header-area .nav").slideUp(200);
    }

    $("html, body").animate({
      scrollTop: target.offset().top - 79
    }, 500);
  });

  $(document).on("scroll", function () {
    var scrollPos = $(document).scrollTop();

    $(".nav a[href^='#']").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      if (!refElement.length) {
        return;
      }

      if (refElement.position().top - 90 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $(".nav a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  });
})(window.jQuery);
