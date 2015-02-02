/**
 * @file
 * Enabling focus state for touch devices.
 */
(function($) {
  $(document).ready(function() {
    // Make elements focusable.
    $(".touchfocus")
      .attr("tabindex", "1")
      // With using click instead of touchstart, we avoid containing links to
      // becoming visible in the moment the container is touched.
      // @see style.css
      .on("click", function() {
        $(this).focus();
      });
  });
})(jQuery);