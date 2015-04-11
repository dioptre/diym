"use strict";
$.Velocity.Sequences.euiPopcalCloseDefault = function(element, options) {
  return $.Velocity.animate(element, {
    opacity: [0, 1],
    scaleX: [0, 1],
    scaleY: [0, 1],
    marginTop: function() {
      var buttonOffset, direction, offset, popcalOffset;
      if (!options.target) {
        return ["0px", "0px"];
      }
      offset = $(element).height() / 2 + options.target.height();
      popcalOffset = $(element).offset().top;
      buttonOffset = options.target.offset().top;
      direction = '+';
      if ((buttonOffset - popcalOffset) < 1) {
        direction = '-';
      }
      return ["" + direction + offset + "px", "0px"];
    }
  }, {
    duration: options.duration || 250,
    complete: options.complete
  });
};