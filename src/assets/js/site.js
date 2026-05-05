(function () {
  "use strict";

  var activeEmailListButton = null;

  function closeEmailListPopup() {
    var popup = document.getElementById("email-list-widget");

    if (!popup || popup.hidden) {
      return;
    }

    popup.hidden = true;
    document.body.classList.remove("email-list-popup-open");

    if (activeEmailListButton) {
      activeEmailListButton.setAttribute("aria-expanded", "false");
      activeEmailListButton.focus();
      activeEmailListButton = null;
    }
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".js-email-list-toggle");

    if (event.target.closest("[data-email-list-close]")) {
      closeEmailListPopup();
      return;
    }

    if (!button) {
      return;
    }

    var target = document.getElementById(button.getAttribute("aria-controls"));

    if (!target) {
      return;
    }

    event.preventDefault();

    activeEmailListButton = button;
    target.hidden = false;
    document.body.classList.add("email-list-popup-open");
    button.setAttribute("aria-expanded", "true");

    var closeButton = target.querySelector(".email-list-popup__close");

    if (closeButton) {
      closeButton.focus();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeEmailListPopup();
    }
  });
})();

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
      $(".header-area").toggleClass("nav-open", $(this).hasClass("active"));
    });
  }

  $(".scroll-to-section a[href^='#'], a.scroll-logo[href^='#']").on("click", function (event) {
    var target = $(this.hash);

    if (!target.length) {
      return;
    }

    event.preventDefault();

    if ($(window).width() < 1200) {
      $(".menu-trigger").removeClass("active").attr("aria-expanded", "false");
      $(".header-area").removeClass("nav-open");
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
