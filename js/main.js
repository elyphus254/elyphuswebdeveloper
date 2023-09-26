(function ($) {
  $(document).ready(function () {
    rotateText();
  });

  // rotateText init
  function rotateText() {
    $(".rotate-text").marquee({
      startVisible: true,
      delayBeforeStart: 0,
      pauseOnHover: false,
      duration: 3000,
      gap: 5,
      duplicated: true,
    });
  }
})(jQuery);
