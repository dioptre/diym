$.Velocity.Sequences.euiPoplistCloseDefault = (element, options) ->
  $.Velocity.animate element, {
    opacity: [0, 1]
    marginTop: ["6px", "-4px"]
  }, {
    duration: options.duration or 200
    complete: options.complete
  }
