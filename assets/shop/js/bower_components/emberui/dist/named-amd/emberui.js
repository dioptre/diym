define("emberui/animations/modal-close-default",
  [],
  function() {
    "use strict";
    $.Velocity.Sequences.euiModalCloseDefault = function(element, options) {
      var calls;
      calls = [
        {
          element: $(element).find('.eui-modalobject'),
          properties: {
            opacity: [0, 1],
            scaleX: [0.5, 1],
            scaleY: [0.5, 1]
          },
          options: {
            duration: 200
          }
        }, {
          element: $(element).find('.eui-overlay'),
          properties: {
            opacity: [0, 1]
          },
          options: {
            duration: 400,
            complete: options.complete
          }
        }
      ];
      return $.each(calls, function(i, call) {
        return $.Velocity.animate(call.element[0], call.properties, call.options);
      });
    };
  });
define("emberui/animations/modal-close-full",
  [],
  function() {
    "use strict";
    $.Velocity.Sequences.euiModalCloseFull = function(element, options) {
      var calls;
      calls = [
        {
          element: $(element).find('.eui-modalobject'),
          properties: {
            opacity: [0, 1],
            scaleX: [5, 1],
            scaleY: [5, 1]
          },
          options: {
            duration: 200
          }
        }, {
          element: $(element).find('.eui-overlay'),
          properties: {
            opacity: [0, 1]
          },
          options: {
            duration: 400,
            complete: options.complete
          }
        }
      ];
      return $.each(calls, function(i, call) {
        return $.Velocity.animate(call.element[0], call.properties, call.options);
      });
    };
  });
define("emberui/animations/modal-open-default",
  [],
  function() {
    "use strict";
    $.Velocity.Sequences.euiModalOpenDefault = function(element, options) {
      var calls;
      calls = [
        {
          element: $(element).find('.eui-modalobject'),
          properties: {
            opacity: [1, 0],
            scaleX: [1, 0.5],
            scaleY: [1, 0.5]
          },
          options: {
            duration: 200
          }
        }, {
          element: $(element).find('.eui-overlay'),
          properties: {
            opacity: [1, 0]
          },
          options: {
            duration: 400,
            complete: options.complete
          }
        }
      ];
      return jQuery.each(calls, function(i, call) {
        return $.Velocity.animate(call.element[0], call.properties, call.options);
      });
    };
  });
define("emberui/animations/modal-open-full",
  [],
  function() {
    "use strict";
    $.Velocity.Sequences.euiModalOpenFull = function(element, options) {
      var calls;
      calls = [
        {
          element: $(element).find('.eui-modalobject'),
          properties: {
            opacity: [1, 0],
            scaleX: [1, 0.5],
            scaleY: [1, 0.5]
          },
          options: {
            duration: 200
          }
        }, {
          element: $(element).find('.eui-overlay'),
          properties: {
            opacity: [1, 0]
          },
          options: {
            duration: 400,
            complete: options.complete
          }
        }
      ];
      return jQuery.each(calls, function(i, call) {
        return $.Velocity.animate(call.element[0], call.properties, call.options);
      });
    };
  });
define("emberui/animations/popcal-close-default",
  [],
  function() {
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
  });
define("emberui/animations/popcal-open-default",
  [],
  function() {
    "use strict";
    $.Velocity.Sequences.euiPopcalOpenDefault = function(element, options) {
      return $.Velocity.animate(element, {
        opacity: [1, 0],
        scaleX: [1, 0.7],
        scaleY: [1, 0.7]
      }, {
        duration: options.duration || 100
      });
    };
  });
define("emberui/animations/poplist-close-default",
  [],
  function() {
    "use strict";
    $.Velocity.Sequences.euiPoplistCloseDefault = function(element, options) {
      return $.Velocity.animate(element, {
        opacity: [0, 1],
        marginTop: ["6px", "-4px"]
      }, {
        duration: options.duration || 200,
        complete: options.complete
      });
    };
  });
define("emberui/animations/poplist-close-flyin",
  [],
  function() {
    "use strict";
    $.Velocity.Sequences.euiPoplistCloseFlyin = function(element, options) {
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
        duration: options.duration || 200,
        complete: options.complete
      });
    };
  });
define("emberui/animations/poplist-open-default",
  [],
  function() {
    "use strict";
    $.Velocity.Sequences.euiPoplistOpenDefault = function(element, options) {
      return $.Velocity.animate(element, {
        opacity: [1, 0],
        marginTop: ["-4px", "-14px"]
      }, {
        duration: options.duration || 200
      });
    };
  });
define("emberui/animations/poplist-open-flyin",
  [],
  function() {
    "use strict";
    $.Velocity.Sequences.euiPoplistOpenFlyin = function(element, options) {
      return $.Velocity.animate(element, {
        opacity: [1, 0],
        scaleX: [1, 0.7],
        scaleY: [1, 0.7]
      }, {
        duration: options.duration || 100
      });
    };
  });
define("emberui/components/eui-button",
  ["../mixins/style-support","../mixins/size-support","../mixins/disabled-support","../mixins/width-support","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var styleSupport = __dependency1__["default"] || __dependency1__;
    var sizeSupport = __dependency2__["default"] || __dependency2__;
    var disabledSupport = __dependency3__["default"] || __dependency3__;
    var widthSupport = __dependency4__["default"] || __dependency4__;
    var button;

    button = Em.Component.extend(styleSupport, sizeSupport, disabledSupport, widthSupport, {
      classNameBindings: [':eui-button', 'loading:eui-loading', 'icon:eui-icon', 'label::eui-no-label', 'class'],
      tagName: 'eui-button',
      label: null,
      icon: null,
      trailingIcon: null,
      loading: null,
      disabled: null,
      action: null,
      "class": null,
      type: 'button',
      width: 'auto',
      ariaOwns: null,
      ariaHaspopup: null,
      click: function(event) {
        event.preventDefault();
        return this.sendAction('action', this.get('context'));
      }
    });

    __exports__["default"] = button;
  });
define("emberui/components/eui-calendar",
  ["../mixins/style-support","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var styleSupport = __dependency1__["default"] || __dependency1__;
    var calendar;

    calendar = Em.Component.extend(styleSupport, {
      tagName: 'eui-calendar',
      classNames: 'eui-calendar',
      showNextMonth: true,
      showPrevMonth: false,
      disabledDates: null,
      disablePast: null,
      disableFuture: null,
      maxPastDate: null,
      maxFutureDate: null,
      month: null,
      allowMultiple: false,
      continuousSelection: true,
      _selection: [],
      setup: (function() {
        var firstSelectedDate;
        Ember.warn('EUI-CALENDAR: You have passed in multiple dates without allowing for mulitple date _selection', !(this.get('_selection.length') > 1 && !this.get('allowMultiple')));
        firstSelectedDate = this.get('_selection.firstObject');
        if (!this.get('month') && firstSelectedDate) {
          this.set('month', firstSelectedDate.clone().startOf('month'));
        }
        if (!this.get('month')) {
          return this.set('month', moment().startOf('month'));
        }
      }).on('init'),
      actions: {
        dateSelected: function(date) {
          if (this.get('allowMultiple')) {
            if (this.get('continuousSelection')) {
              if (this.get('_selection.length') === 1) {
                if (date.isSame(this.get('_selection.firstObject'))) {
                  this.set('_selection', []);
                } else {
                  this.addDateRange(this.get('_selection.firstObject'), date);
                }
              } else {
                this.set('_selection', [date]);
              }
            } else {
              if (this.hasDate(date)) {
                this.removeDate(date);
              } else {
                this.addDate(date);
              }
            }
          } else {
            if (this.hasDate(date)) {
              this.set('_selection', []);
            } else {
              this.set('_selection', [date]);
            }
          }
          return Ember.run.next(this, function() {
            return this.sendAction('selectAction', date);
          });
        },
        prev: function() {
          var month;
          month = this.get('month');
          if (!month || this.get('isPrevDisabled')) {
            return;
          }
          return this.set('month', month.clone().subtract('months', 1));
        },
        next: function() {
          var month;
          month = this.get('month');
          if (!month || this.get('isNextDisabled')) {
            return;
          }
          return this.set('month', month.clone().add('months', 1));
        }
      },
      selection: Ember.computed('_selection', function(key, value) {
        var selection;
        if (arguments.length === 2) {
          if (Ember.isArray(value)) {
            this.set('_selection', value);
          } else if (value) {
            this.set('_selection', [value]);
          } else {
            this.set('_selection', []);
          }
          return value;
        } else {
          selection = this.get('_selection');
          if (this.get('allowMultiple')) {
            return selection;
          } else {
            return selection.get('firstObject');
          }
        }
      }),
      hasDate: function(date) {
        return this.get('_selection').any(function(d) {
          return d.isSame(date);
        });
      },
      isDisabledDate: function(date) {
        var disabledDates;
        disabledDates = this.get('disabledDates');
        if (!disabledDates) {
          return;
        }
        return disabledDates.any(function(d) {
          return d.isSame(date);
        });
      },
      removeDate: function(date) {
        var dates, removeDates;
        dates = this.get('_selection');
        removeDates = dates.filter(function(d) {
          return d.isSame(date);
        });
        return dates.removeObjects(removeDates);
      },
      addDate: function(date) {
        this.removeDate(date);
        return this.get('_selection').pushObject(date);
      },
      addDateRange: function(startDate, endDate) {
        var day, newSelection;
        day = moment(startDate);
        newSelection = [startDate];
        if (endDate.isBefore(startDate)) {
          day.subtract('days', 1);
          while (!day.isBefore(endDate)) {
            if (!this.isDisabledDate(moment(day))) {
              newSelection.pushObject(moment(day));
            }
            day.subtract('days', 1);
          }
        } else {
          day.add('days', 1);
          while (!day.isAfter(endDate)) {
            if (!this.isDisabledDate(moment(day))) {
              newSelection.pushObject(moment(day));
            }
            day.add('days', 1);
          }
        }
        return this.set('selection', newSelection);
      },
      now: (function() {
        return moment();
      }).property(),
      prevMonth: (function() {
        var month;
        month = this.get('month');
        if (month) {
          return month.clone().subtract('months', 1);
        } else {
          return null;
        }
      }).property('month'),
      nextMonth: (function() {
        var month;
        month = this.get('month');
        if (month) {
          return month.clone().add('months', 1);
        } else {
          return null;
        }
      }).property('month'),
      isNextMonthInFuture: (function() {
        var nextMonth, now;
        nextMonth = this.get('nextMonth');
        now = this.get('now');
        if (nextMonth) {
          return nextMonth.isAfter(now, 'month');
        } else {
          return false;
        }
      }).property('nextMonth', 'now'),
      isPrevMonthInPast: (function() {
        var now, prevMonth;
        prevMonth = this.get('prevMonth');
        now = this.get('now');
        if (prevMonth) {
          return prevMonth.isBefore(now, 'month');
        } else {
          return false;
        }
      }).property('prevMonth', 'now'),
      isPrevMonthBeyondMax: (function() {
        var maxPastDate, prevMonth;
        prevMonth = this.get('prevMonth');
        maxPastDate = this.get('maxPastDate');
        if (!prevMonth || !maxPastDate) {
          return false;
        }
        return prevMonth.isBefore(maxPastDate, 'month');
      }).property('prevMonth', 'maxPastDate'),
      isNextMonthBeyondMax: (function() {
        var maxFutureDate, nextMonth;
        nextMonth = this.get('nextMonth');
        maxFutureDate = this.get('maxFutureDate');
        if (!nextMonth || !maxFutureDate) {
          return false;
        }
        return nextMonth.isAfter(maxFutureDate, 'month');
      }).property('nextMonth', 'maxFutureDate'),
      isPrevDisabled: (function() {
        if (this.get('isPrevMonthBeyondMax')) {
          return true;
        }
        if (this.get('disablePast') && this.get('isPrevMonthInPast')) {
          return true;
        }
        return false;
      }).property('isPrevMonthBeyondMax', 'isPrevMonthInPast', 'disablePast'),
      isNextDisabled: (function() {
        if (this.get('isNextMonthBeyondMax')) {
          return true;
        }
        if (this.get('disableFuture') && this.get('isNextMonthInFuture')) {
          return true;
        }
        return false;
      }).property('isNextMonthBeyondMax', 'isNextMonthInFuture', 'disableFuture'),
      prevMonthLabel: Em.computed('prevMonth', function() {
        return this.get('prevMonth').format('MMMM YYYY');
      }),
      nextMonthLabel: Em.computed('nextMonth', function() {
        return this.get('nextMonth').format('MMMM YYYY');
      }),
      monthLabel: Em.computed('month', function() {
        return this.get('month').format('MMMM YYYY');
      })
    });

     __exports__["default"] = calendar;
  });
define("emberui/components/eui-checkbox",
  ["../mixins/error-support","../mixins/style-support","../mixins/size-support","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var errorSupport = __dependency1__["default"] || __dependency1__;
    var styleSupport = __dependency2__["default"] || __dependency2__;
    var sizeSupport = __dependency3__["default"] || __dependency3__;
    var checkbox;

    checkbox = Em.Component.extend(errorSupport, styleSupport, sizeSupport, {
      classNameBindings: [':eui-checkbox', 'value:eui-checked', 'disabled:eui-disabled', 'class'],
      attributeBindings: ['role', 'value:aria-checked', 'disabled:aria-disabled'],
      role: 'checkbox',
      tagName: 'eui-checkbox',
      value: false,
      disabled: false,
      click: function() {
        if (!this.get('disabled')) {
          return this.toggleProperty('value');
        }
      }
    });

    __exports__["default"] = checkbox;
  });
define("emberui/components/eui-dropbutton",
  ["../mixins/style-support","../mixins/size-support","../components/eui-poplist","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var styleSupport = __dependency1__["default"] || __dependency1__;
    var sizeSupport = __dependency2__["default"] || __dependency2__;
    var poplistComponent = __dependency3__["default"] || __dependency3__;
    var dropbutton;

    dropbutton = Em.Component.extend(styleSupport, sizeSupport, {
      tagName: 'eui-dropbutton',
      classNameBindings: ['primaryAction:eui-groupbutton:eui-singlebutton'],
      poplistIsOpen: false,
      listWidth: 'auto',
      primaryAction: Em.computed('options', function() {
        return this.get('options').findBy('primary', true);
      }),
      peformSecondaryAction: (function() {
        var action;
        action = this.get('selection.action');
        if (action) {
          this.triggerAction({
            action: action
          });
        }
        return this.set('selection', null);
      }).observes('selection'),
      optionsWithoutPrimaryAction: Ember.computed.filter('options', function(option) {
        return !option.primary;
      }),
      actions: {
        toggleWindow: function() {
          if (!this.get('poplistIsOpen')) {
            return poplistComponent.show({
              targetObject: this,
              isOpenBinding: 'targetObject.poplistIsOpen',
              selectionBinding: 'targetObject.selection',
              optionsBinding: 'targetObject.optionsWithoutPrimaryAction',
              labelPath: 'label',
              style: 'default',
              listWidth: this.get('listWidth'),
              animationStyle: this.get('animationStyle')
            });
          }
        },
        primaryAction: function() {
          return this.sendAction('primaryAction.action', this);
        }
      }
    });

    __exports__["default"] = dropbutton;
  });
define("emberui/components/eui-input",
  ["../mixins/error-support","../mixins/text-support","../mixins/style-support","../mixins/size-support","../mixins/width-support","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var errorSupport = __dependency1__["default"] || __dependency1__;
    var textSupport = __dependency2__["default"] || __dependency2__;
    var styleSupport = __dependency3__["default"] || __dependency3__;
    var sizeSupport = __dependency4__["default"] || __dependency4__;
    var widthSupport = __dependency5__["default"] || __dependency5__;
    var input;

    input = Em.Component.extend(errorSupport, textSupport, styleSupport, sizeSupport, widthSupport, {
      classNameBindings: [':eui-input'],
      tagName: 'eui-input',
      maxlength: null,
      type: 'text',
      action: null,
      actions: {
        enter: function(context) {
          if (this.get('action')) {
            return this.sendAction('action', context);
          }
        }
      }
    });

    __exports__["default"] = input;
  });
define("emberui/components/eui-modal",
  ["../mixins/style-support","../mixins/animation-support","../templates/eui-modal","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var styleSupport = __dependency1__["default"] || __dependency1__;
    var animationSupport = __dependency2__["default"] || __dependency2__;
    var modalLayout = __dependency3__["default"] || __dependency3__;
    var modal;

    modal = Em.Component.extend(styleSupport, animationSupport, {
      layout: 'eui-modal',
      tagName: 'eui-modal',
      classNames: ['eui-modal'],
      classNameBindings: ['class'],
      attributeBindings: ['tabindex'],
      "class": null,
      animationClass: 'euiModal',
      previousFocus: null,
      tabindex: 0,
      programmatic: false,
      isClosing: false,
      renderModal: false,
      enforceModality: false,
      open: Ember.computed(function(key, value) {
        if (arguments.length === 2) {
          if (value) {
            this.set('renderModal', value);
            Em.run.next(this, function() {
              return this.setup();
            });
          } else if (this.get('renderModal')) {
            this.hide();
          }
          return value;
        } else {
          value = this.get('renderModal');
          return value;
        }
      }).property('renderModal'),
      hide: function() {
        return this.animateOut({
          complete: (function(_this) {
            return function() {
              return _this.breakdown();
            };
          })(this)
        });
      },
      didInsertElement: function() {
        if (this.get('programmatic')) {
          return this.setup();
        }
      },
      setup: function() {
        this.animateIn();
        this.set('previousFocus', $(document.activeElement));
        this.$().focus();
        return $('body').toggleClass('eui-modal-open');
      },
      breakdown: function() {
        var _ref;
        if ((_ref = this.get('previousFocus')) != null) {
          _ref.focus();
        }
        $('body').toggleClass('eui-modal-open');
        if (this.get('programmatic')) {
          return this.destroy();
        } else {
          return this.set('renderModal', false);
        }
      },
      willDestroy: function() {
        return $('body').removeClass('eui-modal-open');
      },
      constrainTabNavigationToModal: function(event) {
        var activeElement, finalTabbable, leavingFinalTabbable, tabbable;
        if (!this.get('open')) {
          return;
        }
        activeElement = document.activeElement;
        tabbable = this.$(':tabbable');
        finalTabbable = tabbable[event.shiftKey && 'first' || 'last']()[0];
        leavingFinalTabbable = finalTabbable === activeElement || this.get('element') === activeElement && event.shiftKey;
        if (!leavingFinalTabbable) {
          return;
        }
        event.preventDefault();
        return tabbable[event.shiftKey && 'last' || 'first']()[0].focus();
      },
      actions: {
        cancel: function(context) {
          this.sendAction('cancel', context);
          return this.hide();
        },
        accept: function(context) {
          this.sendAction('accept', context);
          return this.hide();
        }
      },
      keyDown: function(event) {
        if (event.keyCode === 9) {
          return this.constrainTabNavigationToModal(event);
        }
      },
      keyUp: function(event) {
        if (event.keyCode === 27) {
          this.sendAction('cancel');
          if (!this.get('enforceModality')) {
            return this.hide();
          }
        }
      }
    });

    modal.reopenClass({
      show: function(options) {
        if (options == null) {
          options = {};
        }
        options.renderModal = true;
        options.programmatic = true;
        options.layout = modalLayout;
        modal = this.create(options);
        modal.container = modal.get('targetObject.container');
        modal.appendTo('body');
        return modal;
      }
    });

    __exports__["default"] = modal;
  });
define("emberui/components/eui-month",
  ["exports"],
  function(__exports__) {
    "use strict";
    var DATE_SLOT_HBS, containsDate, forEachSlot, month;

    DATE_SLOT_HBS = Handlebars.compile('<li class="{{classNames}}" data-date="{{jsonDate}}">' + '{{date}}' + '</li>');

    containsDate = function(dates, date) {
      if (!dates || !Em.get(dates, 'length')) {
        return false;
      }
      return dates.any(function(d) {
        return date.isSame(d, 'day');
      });
    };

    forEachSlot = function(month, iter) {
      var currentDay, day, firstDay, popCurrentDay, totalDays, week, _i, _j, _results;
      totalDays = month.daysInMonth();
      firstDay = month.clone().startOf('month').weekday();
      currentDay = 1;
      popCurrentDay = function() {
        if (currentDay > totalDays) {
          return null;
        } else {
          return moment([month.year(), month.month(), currentDay++]);
        }
      };
      _results = [];
      for (week = _i = 0; _i <= 6; week = ++_i) {
        for (day = _j = 0; _j <= 6; day = ++_j) {
          if (week === 0) {
            iter(day < firstDay ? null : popCurrentDay());
          } else {
            iter(currentDay <= totalDays ? popCurrentDay() : null);
          }
        }
        if (currentDay > totalDays) {
          break;
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    month = Em.Component.extend({
      tagName: 'ol',
      classNames: 'eui-month',
      month: null,
      selection: null,
      disabledDates: null,
      maxPastDate: null,
      maxFutureDate: null,
      init: function() {
        this._super();
        if (!this.get('selection')) {
          throw 'you must provide selection to eui-month';
        }
      },
      click: function(event) {
        var $target;
        $target = $(event.target);
        if ($target.is('.eui-disabled')) {
          return;
        }
        if ($target.is('[data-date]')) {
          return this.sendAction('select', moment($target.data('date'), 'YYYY-MM-DD'));
        }
      },
      monthDidChange: (function() {
        return Em.run.scheduleOnce('afterRender', this, 'rerender');
      }).observes('month'),
      selectionDidChange: (function() {
        return Em.run.scheduleOnce('afterRender', this, 'setSelection');
      }).observes('selection.@each'),
      setSelection: function() {
        var date, dates, json, view, _i, _len, _results;
        dates = this.get('selection');
        view = this;
        json;
        if (this.state === !'inDOM') {
          return;
        }
        this.$('li').removeClass('eui-selected');
        _results = [];
        for (_i = 0, _len = dates.length; _i < _len; _i++) {
          date = dates[_i];
          json = date.format('YYYY-MM-DD');
          _results.push(view.$('[data-date="' + json + '"]').addClass('eui-selected'));
        }
        return _results;
      },
      didInsertElement: function() {
        return this.setSelection();
      },
      render: function(buff) {
        var renderSlot, view;
        month = this.get('month');
        view = this;
        if (!month) {
          return;
        }
        renderSlot = function(slot) {
          attrs;
          var attrs;
          if (slot) {
            attrs = {
              date: slot.format('D'),
              jsonDate: slot.format('YYYY-MM-DD'),
              classNames: ['eui-slot', 'eui-day']
            };
            view.applyOptionsForDate(attrs, slot);
            attrs.classNames = attrs.classNames.join(' ');
            return buff.push(DATE_SLOT_HBS(attrs));
          } else {
            return buff.push('<li class="eui-slot eui-empty"></li>');
          }
        };
        return forEachSlot(month, function(slot) {
          return renderSlot(slot);
        });
      },
      applyOptionsForDate: function(options, date) {
        var disabledDates, maxFutureDate, maxPastDate, selection;
        disabledDates = this.get('disabledDates');
        selection = this.get('selection');
        maxPastDate = this.get('maxPastDate');
        maxFutureDate = this.get('maxFutureDate');
        if (moment().isSame(date, 'day')) {
          options.classNames.push('eui-today');
        }
        if ((disabledDates && containsDate(disabledDates, date)) || (maxPastDate && date.isBefore(maxPastDate, 'day')) || (maxFutureDate && date.isAfter(maxFutureDate, 'day'))) {
          options.classNames.push('eui-disabled');
        }
        if (selection && containsDate(selection, date)) {
          return options.classNames.push('eui-selected');
        }
      }
    });

    __exports__["default"] = month;
  });
define("emberui/components/eui-popcal",
  ["../mixins/style-support","../mixins/animation-support","../templates/eui-popcal","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var styleSupport = __dependency1__["default"] || __dependency1__;
    var animationSupport = __dependency2__["default"] || __dependency2__;
    var popcalLayout = __dependency3__["default"] || __dependency3__;
    var popcal;

    popcal = Em.Component.extend(styleSupport, animationSupport, {
      layout: popcalLayout,
      classNames: ['eui-popcal'],
      attributeBindings: ['tabindex'],
      tagName: 'eui-popcal',
      animationClass: 'euiPopcal',
      tabindex: 0,
      previousFocus: null,
      hide: function() {
        return this.animateOut({
          target: this.get('targetObject').$(),
          complete: (function(_this) {
            return function() {
              return _this.breakdown();
            };
          })(this)
        });
      },
      setup: (function() {
        this.animateIn();
        this.set('previousFocus', $(document.activeElement));
        this.set('isOpen', true);
        this.set('_selection', this.get('selection'));
        this.$().position({
          my: "center top",
          at: "center bottom",
          of: this.get('targetObject').$(),
          collision: 'flipfit'
        });
        Ember.run.next(this, function() {
          return $(window).one('click.emberui', (function(_this) {
            return function(event) {
              if ((_this.get('targetObject') != null) && !$(event.target).parents('.eui-popcal').length) {
                event.preventDefault();
                return _this.hide();
              }
            };
          })(this));
        });
        this.$().focus();
        return $('body').addClass('eui-popcal-open');
      }).on('didInsertElement'),
      breakdown: function() {
        var _ref;
        this.get('previousFocus').focus();
        this.set('isOpen', false);
        $('body').removeClass('eui-popcal-open');
        if (!(this.get('dateRange') && ((_ref = this.get('_selection')) != null ? _ref.get('length') : void 0) === 1)) {
          this.set('selection', this.get('_selection'));
        }
        return this.destroy();
      },
      actions: {
        closeCalendar: function() {
          var dateRange, selection;
          dateRange = this.get('dateRange');
          selection = this.get('_selection');
          if (dateRange) {
            if ((selection != null ? selection.get('length') : void 0) > 1) {
              return this.hide();
            }
          } else if (selection) {
            return this.hide();
          }
        }
      },
      keyUp: function(event) {
        if (event.keyCode === 27) {
          return this.hide();
        }
      }
    });

    popcal.reopenClass({
      show: function(options) {
        if (options == null) {
          options = {};
        }
        popcal = this.create(options);
        popcal.container = popcal.get('targetObject.container');
        popcal.appendTo('.ember-application');
        return popcal;
      }
    });

    __exports__["default"] = popcal;
  });
define("emberui/components/eui-poplist",
  ["../mixins/style-support","../mixins/animation-support","../mixins/mobile-detection","../templates/eui-poplist","../templates/eui-poplist-option","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var styleSupport = __dependency1__["default"] || __dependency1__;
    var animationSupport = __dependency2__["default"] || __dependency2__;
    var mobileDetection = __dependency3__["default"] || __dependency3__;
    var poplistLayout = __dependency4__["default"] || __dependency4__;
    var itemViewClassTemplate = __dependency5__["default"] || __dependency5__;
    var poplist;

    poplist = Em.Component.extend(styleSupport, animationSupport, mobileDetection, {
      layout: poplistLayout,
      classNames: ['eui-poplist'],
      classNameBindings: ['isOpen::eui-closing', 'isMobileDevice:eui-touch'],
      attributeBindings: ['tabindex'],
      tagName: 'eui-poplist',
      animationClass: 'euiPoplist',
      listWidth: null,
      listHeight: '80',
      listRowHeight: Ember.computed('isMobileDevice', function() {
        if (this.get('isMobileDevice')) {
          return '30';
        } else {
          return '20';
        }
      }),
      modalOnMobile: false,
      labelPath: 'label',
      options: null,
      searchString: null,
      highlightedIndex: -1,
      previousFocus: null,
      highlighted: Ember.computed('highlightedIndex', 'filteredOptions', function(key, value) {
        var index, options;
        options = this.get('filteredOptions');
        if (arguments.length === 2) {
          index = options.indexOf(value);
          this.set('highlightedIndex', index);
          return value;
        } else {
          index = this.get('highlightedIndex');
          return options.objectAt(index);
        }
      }),
      hide: function() {
        return this.animateOut({
          target: this.get('targetObject').$(),
          complete: (function(_this) {
            return function() {
              return _this.breakdown();
            };
          })(this)
        });
      },
      setup: (function() {
        this.setPoplistMinWidth();
        if (this.get('isMobileDevice') && this.get('modalOnMobile')) {
          Em.run.next(this, function() {
            return this.$().position({
              my: "center center",
              at: "center center",
              of: $(window)
            });
          });
        } else {
          Em.run.next(this, function() {
            return this.$().position({
              my: "right top",
              at: "right bottom",
              of: this.get('targetObject').$(),
              collision: 'flipfit'
            });
          });
        }
        this.animateIn();
        this.set('isOpen', true);
        this.set('previousFocus', $(document.activeElement));
        if (!this.get('isMobileDevice')) {
          Ember.run.next(this, function() {
            return this.focusOnSearch();
          });
        }
        this.updateListWidthCss();
        Ember.run.next(this, function() {
          return this.scrollToSelection(this.get('options').indexOf(this.get('selection')), true);
        });
        $('body').addClass('eui-poplist-open');
        return Ember.run.next(this, function() {
          return $(window).one('click.emberui', (function(_this) {
            return function(event) {
              if ((_this.get('targetObject') != null) && !$(event.target).parents('.eui-poplist').length) {
                event.preventDefault();
                return _this.hide();
              }
            };
          })(this));
        });
      }).on('didInsertElement'),
      breakdown: function() {
        this.setProperties({
          isOpen: false,
          highlightedIndex: -1
        });
        this.get('previousFocus').focus();
        $('body').removeClass('eui-poplist-open');
        return this.destroy();
      },
      setPoplistMinWidth: function() {
        var element, elementWidthMinuspoplistPadding, poplistElement;
        element = this.get('targetObject').$();
        poplistElement = this.$();
        elementWidthMinuspoplistPadding = element.width() - parseFloat(poplistElement.css('paddingLeft')) - parseFloat(poplistElement.css('paddingRight'));
        return poplistElement.css('min-width', elementWidthMinuspoplistPadding);
      },
      updateListWidthCss: function() {
        var listWidth;
        if (this.get('isMobileDevice') && this.get('modalOnMobile')) {
          return this.$().css('width', '80%');
        } else {
          listWidth = this.get('listWidth');
          return this.$().css('width', listWidth);
        }
      },
      focusOnSearch: function() {
        return this.$().find('input:first').focus();
      },
      searchStringDidChange: (function() {
        if (this.get('searchString')) {
          return this.set('highlightedIndex', 0);
        }
      }).observes('searchString'),
      filteredOptions: (function() {
        var escapedQuery, filteredOptions, labelPath, options, query, regex;
        options = this.get('options');
        query = this.get('searchString');
        if (!options) {
          return [];
        }
        if (!query) {
          return options;
        }
        labelPath = this.get('labelPath');
        escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        regex = new RegExp(escapedQuery, 'i');
        filteredOptions = options.filter(function(item, index, self) {
          var label;
          label = (typeof item.get === "function" ? item.get(labelPath) : void 0) || item[labelPath];
          if (label) {
            return regex.test(label);
          }
        });
        return filteredOptions;
      }).property('options.@each', 'labelPath', 'searchString'),
      hasNoOptions: Ember.computed.empty('filteredOptions'),
      optionsLengthDidChange: (function() {
        return this.updateListHeight();
      }).observes('filteredOptions.length'),
      updateListHeight: function() {
        var optionCount, rowHeight;
        optionCount = this.get('filteredOptions.length');
        rowHeight = this.get('listRowHeight');
        if (optionCount <= 12) {
          return this.set('listHeight', optionCount * rowHeight);
        } else {
          return this.set('listHeight', 10 * rowHeight);
        }
      },
      scrollToSelection: function(index, center) {
        var $listView, endIndex, listView, numRows, startIndex;
        $listView = this.$('.ember-list-view');
        listView = Ember.View.views[$listView.attr('id')];
        startIndex = listView._startingIndex();
        numRows = listView._childViewCount() - 1;
        endIndex = startIndex + numRows;
        if (index === 0) {
          return $listView.scrollTop(0);
        } else if (index < startIndex) {
          return $listView.scrollTop(index * this.get('listRowHeight'));
        } else if (index >= endIndex) {
          if (center) {
            return $listView.scrollTop((index - (numRows / 2)) * this.get('listRowHeight'));
          } else {
            return $listView.scrollTop((index - numRows + 1) * this.get('listRowHeight'));
          }
        }
      },
      KEY_MAP: {
        27: 'escapePressed',
        13: 'enterPressed',
        38: 'upArrowPressed',
        40: 'downArrowPressed'
      },
      keyUp: function(event) {
        var keyMap, method, _ref;
        keyMap = this.get('KEY_MAP');
        method = keyMap[event.which];
        if (method) {
          return (_ref = this.get(method)) != null ? _ref.apply(this, arguments) : void 0;
        } else {
          return this.focusOnSearch();
        }
      },
      escapePressed: function(event) {
        return this.hide();
      },
      enterPressed: function(event) {
        event.preventDefault();
        this.set('selection', this.get('highlighted'));
        return this.hide();
      },
      downArrowPressed: function(event) {
        event.preventDefault();
        return this.adjustHighlight(1);
      },
      upArrowPressed: function(event) {
        event.preventDefault();
        return this.adjustHighlight(-1);
      },
      adjustHighlight: function(indexAdjustment) {
        var highlightedIndex, newIndex, options, optionsLength;
        highlightedIndex = this.get('highlightedIndex');
        options = this.get('filteredOptions');
        optionsLength = options.get('length');
        newIndex;
        if (highlightedIndex >= optionsLength) {
          if (indexAdjustment === 1) {
            newIndex = 0;
          }
        } else {
          newIndex = highlightedIndex + indexAdjustment;
          if (newIndex >= optionsLength) {
            newIndex = optionsLength - 1;
          } else if (newIndex < 0) {
            newIndex = 0;
          }
        }
        this.scrollToSelection(newIndex);
        return this.set('highlightedIndex', newIndex);
      },
      listView: Ember.ListView.extend({
        attributeBindings: ['role', 'tabindex'],
        role: 'menu',
        tabindex: '-1',
        css: {
          position: 'relative',
          overflow: 'auto',
          '-webkit-overflow-scrolling': 'touch',
          'overflow-scrolling': 'touch'
        },
        classNames: ['eui-options'],
        height: Ember.computed.alias('controller.listHeight'),
        rowHeight: Ember.computed.alias('controller.listRowHeight'),
        setup: (function() {
          return this.$().bind('mousewheel.emberui DOMMouseScroll.emberui', (function(_this) {
            return function(e) {
              var scrollTo;
              e.preventDefault();
              scrollTo = _this.get('scrollTop');
              if (e.type === 'mousewheel') {
                scrollTo += e.originalEvent.wheelDelta * -1;
              } else if (e.type === 'DOMMouseScroll') {
                scrollTo += 40 * e.originalEvent.detail;
              }
              return _this.scrollTo(scrollTo);
            };
          })(this));
        }).on('didInsertElement'),
        itemViewClass: Ember.ListItemView.extend({
          classNames: ['eui-option'],
          classNameBindings: ['isHighlighted:eui-hover', 'isSelected:eui-selected'],
          template: itemViewClassTemplate,
          attributeBindings: ['role', 'tabindex'],
          role: 'menuitem',
          tabindex: '0',
          isHighlightedDidChange: (function() {
            return Ember.run.next((function(_this) {
              return function() {
                if (_this.get('isHighlighted')) {
                  return _this.$().focus();
                }
              };
            })(this));
          }).observes('isHighlighted'),
          initializeIsHighlighted: (function() {
            return this.isHighlightedDidChange();
          }).on('init'),
          labelPathDidChange: (function() {
            var labelPath;
            labelPath = this.get('controller.labelPath');
            Ember.defineProperty(this, 'label', Ember.computed.alias("content." + labelPath));
            return this.notifyPropertyChange('label');
          }).observes('content', 'controller.labelPath'),
          initializeLabelPath: (function() {
            return this.labelPathDidChange();
          }).on('init'),
          updateContext: function(context) {
            this._super(context);
            return this.set('content', context);
          },
          isHighlighted: Ember.computed('controller.highlighted', 'content', function() {
            return this.get('controller.highlighted') === this.get('content');
          }),
          isSelected: Ember.computed('controller.selection', 'content', function() {
            return this.get('controller.selection') === this.get('content');
          }),
          click: function() {
            this.set('controller.selection', this.get('content'));
            return this.get('controller').hide();
          },
          mouseEnter: function() {
            var hoveredOption, options;
            options = this.get('controller.filteredOptions');
            hoveredOption = this.get('content');
            return this.set('controller.highlighted', hoveredOption);
          }
        })
      })
    });

    poplist.reopenClass({
      show: function(options) {
        if (options == null) {
          options = {};
        }
        poplist = this.create(options);
        poplist.container = poplist.get('targetObject.container');
        poplist.appendTo('.ember-application');
        poplist.updateListHeight();
        return poplist;
      }
    });

    __exports__["default"] = poplist;
  });
define("emberui/components/eui-select",
  ["../components/eui-poplist","../mixins/disabled-support","../mixins/error-support","../mixins/width-support","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var poplistComponent = __dependency1__["default"] || __dependency1__;
    var disabledSupport = __dependency2__["default"] || __dependency2__;
    var errorSupport = __dependency3__["default"] || __dependency3__;
    var widthSupport = __dependency4__["default"] || __dependency4__;
    var select;

    select = Em.Component.extend(disabledSupport, errorSupport, widthSupport, {
      tagName: 'eui-select',
      classNames: ['eui-select'],
      classNameBindings: ['isDisabled:eui-disabled', 'selection::eui-placeholder', 'class'],
      style: 'default',
      size: 'medium',
      poplistIsOpen: false,
      required: false,
      options: [],
      labelPath: 'label',
      valuePath: 'value',
      _selection: null,
      ariaHasPopup: true,
      ariaOwns: (function() {
        return this.get('poplist.elementId');
      }).property('poplist'),
      poplist: null,
      listWidth: 'auto',
      nullValue: new Object(),
      optionsWithBlank: (function() {
        var options, paddedOptions;
        options = this.get('options');
        paddedOptions = options.slice(0);
        if (!this.get('required')) {
          paddedOptions.unshift(this.get('nullValue'));
        }
        return paddedOptions;
      }).property('options.@each', 'required'),
      label: (function() {
        var labelPath;
        labelPath = this.get('labelPath');
        return this.get("selection." + labelPath) || this.get('placeholder');
      }).property('selection', 'placeholder', 'labelPath'),
      selection: Ember.computed('_selection', function(key, value) {
        var nullValue, selection;
        if (arguments.length === 2) {
          this.set('_selection', value);
          return value;
        } else {
          selection = this.get('_selection');
          nullValue = this.get('nullValue');
          if (selection === nullValue) {
            return null;
          } else {
            return selection;
          }
        }
      }),
      value: Ember.computed('selection', 'valuePath', function(key, value) {
        var selection, valuePath;
        if (arguments.length === 2) {
          valuePath = this.get('valuePath');
          if (valuePath) {
            selection = this.get('options').findProperty(valuePath, value);
          }
          this.set('selection', selection || value);
          return value;
        } else {
          valuePath = this.get('valuePath');
          if (valuePath) {
            return this.get("selection." + valuePath);
          } else {
            return null;
          }
        }
      }),
      initialization: (function() {
        var labelPath, value, valuePath;
        if (this.get('options') === void 0) {
          Ember.Logger.error('EmberUI: eui-select options paramater has undefined value');
          return;
        }
        labelPath = 'selection.' + this.get('labelPath');
        this.addObserver(labelPath, function() {
          return this.notifyPropertyChange('label');
        });
        valuePath = this.get('valuePath');
        value = this.get('value');
        if (valuePath) {
          value = this.get('options').findProperty(valuePath, value);
        }
        return this.set('_selection', value || this.get('nullValue'));
      }).on('init'),
      click: function() {
        if (!this.get('poplistIsOpen')) {
          return this.set('poplist', poplistComponent.show({
            targetObject: this,
            isOpenBinding: 'targetObject.poplistIsOpen',
            selectionBinding: 'targetObject._selection',
            optionsBinding: 'targetObject.optionsWithBlank',
            labelPathBinding: 'targetObject.labelPath',
            style: 'flyin',
            modalOnMobile: true,
            listWidth: this.get('listWidth'),
            animationStyle: this.get('animationStyle')
          }));
        }
      },
      keyUp: function(event) {
        if (event.which === 40) {
          event.preventDefault();
          return this.click();
        }
      },
      isEntered: true
    });

    __exports__["default"] = select;
  });
define("emberui/components/eui-selectdate",
  ["../mixins/disabled-support","../mixins/width-support","../mixins/error-support","../components/eui-popcal","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var disabledSupport = __dependency1__["default"] || __dependency1__;
    var widthSupport = __dependency2__["default"] || __dependency2__;
    var errorSupport = __dependency3__["default"] || __dependency3__;
    var popcalComponent = __dependency4__["default"] || __dependency4__;
    var select;

    select = Em.Component.extend(disabledSupport, errorSupport, widthSupport, {
      tagName: 'eui-selectdate',
      classNames: ['eui-selectdate'],
      classNameBindings: ['isDisabled:eui-disabled', 'isPlaceholder::eui-placeholder', 'class'],
      style: 'default',
      size: 'medium',
      calendarStyle: 'default',
      popcalIsOpen: false,
      dateRange: false,
      formatting: {
        yearFormat: "YYYY",
        monthFormat: "MMMM",
        dayFormat: "D"
      },
      value: Em.computed('selection.@each', function(key, value) {
        var selection;
        selection = this.get('selection');
        if (arguments.length === 2) {
          if (!value) {
            this.set('selection', value);
            return value;
          }
          if (Em.isArray(value)) {
            this.set('selection', value.map(function(v) {
              return moment(v);
            }));
          } else {
            this.set('selection', moment(value));
          }
          return value;
        } else {
          if (!selection) {
            if (this.get('dateRange')) {
              return [];
            } else {
              return null;
            }
          }
          if (Em.isArray(selection)) {
            return selection.map(function(date) {
              return date.format('X');
            });
          } else {
            return selection.format('X');
          }
        }
      }),
      calculateInitalValue: (function() {
        return this.notifyPropertyChange('value');
      }).on('didInsertElement'),
      isPlaceholder: Em.computed('selection', function() {
        var selection;
        selection = this.get('selection');
        if (selection && Em.isArray(selection) && selection.get('length') === 0) {
          return false;
        }
        if (!selection) {
          return false;
        }
        return true;
      }),
      actions: {
        openCalendar: function() {
          if (!this.get('popcalIsOpen')) {
            return popcalComponent.show({
              targetObject: this,
              isOpenBinding: 'targetObject.popcalIsOpen',
              selectionBinding: 'targetObject.selection',
              dateRangeBinding: 'targetObject.dateRange',
              disablePastBinding: 'targetObject.disablePast',
              disableFutureBinding: 'targetObject.disableFuture',
              maxPastDateBinding: 'targetObject.maxPastDate',
              maxFutureDateBinding: 'targetObject.maxFutureDate',
              disabledDatesBinding: 'targetObject.disabledDates',
              styleBinding: 'targetObject.calendarStyle',
              animationStyle: this.get('animationStyle')
            });
          }
        }
      },
      keyUp: function(event) {
        if (event.keyCode === 27) {
          this.send('closeCalendar', {
            forceClose: true
          });
        }
        if (event.which === 40) {
          event.preventDefault();
          return this.send('toggleCalendar');
        }
      },
      label: Em.computed('selection.@each', 'placeholder', function() {
        var endDate, label, selection, startDate;
        selection = this.get('selection');
        label = null;
        if (selection) {
          if (Em.isArray(selection)) {
            if (selection.get('length') < 2) {
              startDate = selection.get('firstObject');
              label = this.formatDateRange(startDate);
            } else {
              startDate = selection.get('firstObject');
              endDate = selection.get('lastObject');
              label = this.formatDateRange(startDate, endDate);
            }
          } else {
            label = this.formatDate(selection);
          }
        }
        return label || this.get('placeholder');
      }),
      formatDate: function(date) {
        if (!date) {
          return;
        }
        return date.twix(date, true).format(this.get('formatting'));
      },
      formatDateRange: function(startDate, endDate) {
        var formatting;
        if (!startDate) {
          return;
        }
        formatting = this.get('formatting');
        if (!endDate) {
          return startDate.twix(startDate, true).format(formatting) + ' -';
        }
        if (startDate && endDate) {
          if (endDate.isBefore(startDate)) {
            return endDate.twix(startDate, true).format(formatting);
          } else {
            return startDate.twix(endDate, true).format(formatting);
          }
        }
      },
      isEntered: true
    });

    __exports__["default"] = select;
  });
define("emberui/components/eui-textarea",
  ["../mixins/error-support","../mixins/text-support","../mixins/style-support","../mixins/size-support","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var errorSupport = __dependency1__["default"] || __dependency1__;
    var textSupport = __dependency2__["default"] || __dependency2__;
    var styleSupport = __dependency3__["default"] || __dependency3__;
    var sizeSupport = __dependency4__["default"] || __dependency4__;
    var textarea;

    textarea = Em.Component.extend(errorSupport, textSupport, styleSupport, sizeSupport, {
      classNameBindings: [':eui-textarea'],
      attributeBindings: ['computedWidthAndHeight:style'],
      tagName: 'eui-textarea',
      height: null,
      computedWidthAndHeight: Em.computed('size', 'width', 'height', function() {
        var height, heights, width, widths;
        widths = {
          tiny: '100px',
          small: '150px',
          medium: '200px',
          large: '250px'
        };
        heights = {
          tiny: '50px',
          small: '75px',
          medium: '100px',
          large: '125px'
        };
        width = this.get('width') || widths[this.get('size')] || widths['medium'];
        height = this.get('height') || heights[this.get('size')] || heights['medium'];
        return "width: " + width + "; height: " + height + ";";
      })
    });

    __exports__["default"] = textarea;
  });
define("emberui",
  ["./components/eui-button","./templates/eui-button","./components/eui-checkbox","./templates/eui-checkbox","./components/eui-dropbutton","./templates/eui-dropbutton","./components/eui-input","./templates/eui-input","./components/eui-modal","./templates/eui-modal","./components/eui-poplist","./templates/eui-poplist","./templates/eui-poplist-option","./components/eui-select","./templates/eui-select","./components/eui-selectdate","./templates/eui-selectdate","./components/eui-textarea","./templates/eui-textarea","./components/eui-month","./components/eui-calendar","./templates/eui-calendar","./components/eui-popcal","./templates/eui-popcal","./initializers/eui-initializer","./initializers/eui-wai-aria-initializer","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __dependency12__, __dependency13__, __dependency14__, __dependency15__, __dependency16__, __dependency17__, __dependency18__, __dependency19__, __dependency20__, __dependency21__, __dependency22__, __dependency23__, __dependency24__, __dependency25__, __dependency26__, __exports__) {
    "use strict";
    /*!
    EmberUI (c) 2014 Jaco Joubert
    License: https://github.com/emberui/emberui/blob/master/LICENSE
    */

    var EuiButtonComponent = __dependency1__["default"] || __dependency1__;
    var EuiButtonTemplate = __dependency2__["default"] || __dependency2__;

    var EuiCheckboxComponent = __dependency3__["default"] || __dependency3__;
    var EuiCheckboxTemplate = __dependency4__["default"] || __dependency4__;

    var EuiDropbuttonComponent = __dependency5__["default"] || __dependency5__;
    var EuiDropbuttonTemplate = __dependency6__["default"] || __dependency6__;

    var EuiInputComponent = __dependency7__["default"] || __dependency7__;
    var EuiInputTemplate = __dependency8__["default"] || __dependency8__;

    var EuiModalComponent = __dependency9__["default"] || __dependency9__;
    var EuiModalTemplate = __dependency10__["default"] || __dependency10__;

    var EuiPoplistComponent = __dependency11__["default"] || __dependency11__;
    var EuiPoplistTemplate = __dependency12__["default"] || __dependency12__;
    var EuiPoplistOptionTemplate = __dependency13__["default"] || __dependency13__;

    var EuiSelectComponent = __dependency14__["default"] || __dependency14__;
    var EuiSelectTemplate = __dependency15__["default"] || __dependency15__;

    var EuiSelectDateComponent = __dependency16__["default"] || __dependency16__;
    var EuiSelectDateTemplate = __dependency17__["default"] || __dependency17__;

    var EuiTextareaComponent = __dependency18__["default"] || __dependency18__;
    var EuiTextareaTemplate = __dependency19__["default"] || __dependency19__;

    var EuiMonthComponent = __dependency20__["default"] || __dependency20__;

    var EuiCalendarComponent = __dependency21__["default"] || __dependency21__;
    var EuiCalendarTemplate = __dependency22__["default"] || __dependency22__;

    var EuiPopcalComponent = __dependency23__["default"] || __dependency23__;
    var EuiPopcalTemplate = __dependency24__["default"] || __dependency24__;

    var EuiInitializer = __dependency25__["default"] || __dependency25__;
    var EuiWaiAriaInitializer = __dependency26__["default"] || __dependency26__;


    Ember.Application.initializer(EuiInitializer);
    Ember.Application.initializer(EuiWaiAriaInitializer);

    Ember.libraries.register("EmberUI", "0.3.6");

    Ember.TextSupport.reopen({
        attributeBindings: [
          'aria-expanded',
          'aria-autocomplete',
          'aria-owns',
          'aria-activedescendant'
        ]
    });

    __exports__.EuiInitializer = EuiInitializer;
    __exports__.EuiButtonComponent = EuiButtonComponent;
    __exports__.EuiCheckboxComponent = EuiCheckboxComponent;
    __exports__.EuiDropbuttonComponent = EuiDropbuttonComponent;
    __exports__.EuiInputComponent = EuiInputComponent;
    __exports__.EuiInputTemplate = EuiInputTemplate;
    __exports__.EuiModalComponent = EuiModalComponent;
    __exports__.EuiPoplistComponent = EuiPoplistComponent;
    __exports__.EuiSelectComponent = EuiSelectComponent;
    __exports__.EuiSelectDateComponent = EuiSelectDateComponent;
    __exports__.EuiTextareaComponent = EuiTextareaComponent;
    __exports__.EuiMonthComponent = EuiMonthComponent;
    __exports__.EuiCalendarComponent = EuiCalendarComponent;
    __exports__.EuiPopcalComponent = EuiPopcalComponent;
  });
define("emberui/initializers/eui-initializer",
  ["../utilities/tabbable-selector","../utilities/position","../animations/popcal-close-default","../animations/popcal-open-default","../animations/modal-close-default","../animations/modal-open-default","../animations/modal-close-full","../animations/modal-open-full","../animations/poplist-close-default","../animations/poplist-open-default","../animations/poplist-close-flyin","../animations/poplist-open-flyin","../components/eui-button","../templates/eui-button","../components/eui-checkbox","../templates/eui-checkbox","../components/eui-dropbutton","../templates/eui-dropbutton","../components/eui-input","../templates/eui-input","../components/eui-modal","../templates/eui-modal","../components/eui-poplist","../templates/eui-poplist","../templates/eui-poplist-option","../components/eui-select","../templates/eui-select","../components/eui-selectdate","../templates/eui-selectdate","../components/eui-textarea","../templates/eui-textarea","../components/eui-month","../components/eui-calendar","../templates/eui-calendar","../components/eui-popcal","../templates/eui-popcal","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __dependency12__, __dependency13__, __dependency14__, __dependency15__, __dependency16__, __dependency17__, __dependency18__, __dependency19__, __dependency20__, __dependency21__, __dependency22__, __dependency23__, __dependency24__, __dependency25__, __dependency26__, __dependency27__, __dependency28__, __dependency29__, __dependency30__, __dependency31__, __dependency32__, __dependency33__, __dependency34__, __dependency35__, __dependency36__, __exports__) {
    "use strict";

    var EuiButtonComponent = __dependency13__["default"] || __dependency13__;
    var EuiButtonTemplate = __dependency14__["default"] || __dependency14__;

    var EuiCheckboxComponent = __dependency15__["default"] || __dependency15__;
    var EuiCheckboxTemplate = __dependency16__["default"] || __dependency16__;

    var EuiDropbuttonComponent = __dependency17__["default"] || __dependency17__;
    var EuiDropbuttonTemplate = __dependency18__["default"] || __dependency18__;

    var EuiInputComponent = __dependency19__["default"] || __dependency19__;
    var EuiInputTemplate = __dependency20__["default"] || __dependency20__;

    var EuiModalComponent = __dependency21__["default"] || __dependency21__;
    var EuiModalTemplate = __dependency22__["default"] || __dependency22__;

    var EuiPoplistComponent = __dependency23__["default"] || __dependency23__;
    var EuiPoplistTemplate = __dependency24__["default"] || __dependency24__;
    var EuiPoplistOptionTemplate = __dependency25__["default"] || __dependency25__;

    var EuiSelectComponent = __dependency26__["default"] || __dependency26__;
    var EuiSelectTemplate = __dependency27__["default"] || __dependency27__;

    var EuiSelectDateComponent = __dependency28__["default"] || __dependency28__;
    var EuiSelectDateTemplate = __dependency29__["default"] || __dependency29__;

    var EuiTextareaComponent = __dependency30__["default"] || __dependency30__;
    var EuiTextareaTemplate = __dependency31__["default"] || __dependency31__;

    var EuiMonthComponent = __dependency32__["default"] || __dependency32__;

    var EuiCalendarComponent = __dependency33__["default"] || __dependency33__;
    var EuiCalendarTemplate = __dependency34__["default"] || __dependency34__;

    var EuiPopcalComponent = __dependency35__["default"] || __dependency35__;
    var EuiPopcalTemplate = __dependency36__["default"] || __dependency36__;

    __exports__["default"] = {
      name: 'emberui',

      initialize: function(container) {
        container.register('template:components/eui-button', EuiButtonTemplate);
        container.register('component:eui-button', EuiButtonComponent);

        container.register('template:components/eui-checkbox', EuiCheckboxTemplate);
        container.register('component:eui-checkbox', EuiCheckboxComponent);

        container.register('template:components/eui-dropbutton', EuiDropbuttonTemplate);
        container.register('component:eui-dropbutton', EuiDropbuttonComponent);

        container.register('template:components/eui-input', EuiInputTemplate);
        container.register('component:eui-input', EuiInputComponent);

        container.register('template:components/eui-modal', EuiModalTemplate);
        container.register('component:eui-modal', EuiModalComponent);

        container.register('template:components/eui-poplist', EuiPoplistTemplate);
        container.register('template:components/eui-poplist-opion', EuiPoplistOptionTemplate);
        container.register('component:eui-poplist', EuiPoplistComponent);

        container.register('template:components/eui-select', EuiSelectTemplate);
        container.register('component:eui-select', EuiSelectComponent);

        container.register('template:components/eui-selectdate', EuiSelectDateTemplate);
        container.register('component:eui-selectdate', EuiSelectDateComponent);

        container.register('template:components/eui-popcal', EuiPopcalTemplate);
        container.register('component:eui-popcal', EuiPopcalComponent);

        container.register('template:components/eui-textarea', EuiTextareaTemplate);
        container.register('component:eui-textarea', EuiTextareaComponent);

        container.register('component:eui-month', EuiMonthComponent);

        container.register('template:components/eui-calendar', EuiCalendarTemplate);
        container.register('component:eui-calendar', EuiCalendarComponent);
      }
    };
  });
define("emberui/initializers/eui-wai-aria-initializer",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    __exports__["default"] = {
      name: 'emberui-wai-aria',

      initialize: function(container) {
        Ember.TextSupport.reopen({
          attributeBindings: [
            'aria-expanded',
            'aria-autocomplete',
            'aria-owns',
            'aria-activedescendant'
          ]
        });
      }
    };
  });
define("emberui/mixins/animation-support",
  ["exports"],
  function(__exports__) {
    "use strict";
    var animationSupport;

    animationSupport = Em.Mixin.create({
      animationStyle: null,
      animationClass: null,
      openAnimation: Em.computed('computedAnimationStyle', function() {
        var backupStyle, component, style;
        style = this.get('computedAnimationStyle');
        component = this.get('animationClass');
        if (!(style && component)) {
          return;
        }
        style = "" + component + "Open" + style;
        backupStyle = "" + component + "OpenDefault";
        if ($.Velocity.Sequences.hasOwnProperty(style)) {
          return style;
        } else {
          return backupStyle;
        }
      }),
      closeAnimation: Em.computed('computedAnimationStyle', function() {
        var backupStyle, component, style;
        style = this.get('computedAnimationStyle');
        component = this.get('animationClass');
        if (!(style && component)) {
          return;
        }
        style = "" + component + "Close" + style;
        backupStyle = "" + component + "CloseDefault";
        if ($.Velocity.Sequences.hasOwnProperty(style)) {
          return style;
        } else {
          return backupStyle;
        }
      }),
      computedAnimationStyle: Em.computed('animationStyle', 'style', function() {
        var style, _ref, _ref1;
        style = (_ref = this.get('animationStyle')) != null ? _ref.capitalize() : void 0;
        if (!style) {
          style = (_ref1 = this.get('style')) != null ? _ref1.capitalize() : void 0;
        }
        return style;
      }),
      animateIn: function(options) {
        var openAnimation;
        if (!(openAnimation = this.get('openAnimation'))) {
          return;
        }
        if (!options) {
          options = {};
        }
        return Em.run.next(this, function() {
          return this.$().velocity(openAnimation, options);
        });
      },
      animateOut: function(options) {
        var closeAnimation;
        if (!(closeAnimation = this.get('closeAnimation'))) {
          return;
        }
        if (!options) {
          options = {};
        }
        return this.$().velocity(closeAnimation, options);
      }
    });

    __exports__["default"] = animationSupport;
  });
define("emberui/mixins/disabled-support",
  ["exports"],
  function(__exports__) {
    "use strict";
    var disabledsupport;

    disabledsupport = Em.Mixin.create({
      classNameBindings: ['isDisabled:eui-disabled'],
      disabled: false,
      isDisabled: Em.computed('disabled', 'loading', function() {
        if (this.get('disabled') || this.get('loading')) {
          return true;
        }
      })
    });

    __exports__["default"] = disabledsupport;
  });
define("emberui/mixins/error-support",
  ["exports"],
  function(__exports__) {
    "use strict";
    var errorSupport;

    errorSupport = Em.Mixin.create({
      classNameBindings: ['errorState:eui-error'],
      forceErrorCheck: false,
      focusIn: function() {
        return this.set("isEntered", false);
      },
      focusOut: function() {
        return this.set("isEntered", true);
      },
      errorMessage: Em.computed('errorState', 'error', function() {
        var error;
        error = this.get('error');
        if (this.get('errorState') && typeof error === 'string') {
          return error;
        } else {
          return null;
        }
      }),
      errorState: Em.computed('isEntered', 'forceErrorCheck', 'error', 'value', function() {
        var errorState;
        errorState = this._errorState();
        this.set('_previousErrorState', errorState);
        return errorState;
      }),
      _errorState: function() {
        switch (this.get('_previousErrorState')) {
          case void 0:
            if (Em.isBlank(this.get('value')) && !this.get('forceErrorCheck')) {
              return false;
            }
            break;
          case false:
            if (!this.get('isEntered') && !this.get('forceErrorCheck')) {
              return false;
            }
        }
        return !!this.get('error');
      }
    });

    __exports__["default"] = errorSupport;
  });
define("emberui/mixins/mobile-detection",
  ["exports"],
  function(__exports__) {
    "use strict";
    var mobileDetection;

    mobileDetection = Em.Mixin.create({
      isMobileDevice: (function() {
        if (window.innerWidth <= 540 || window.innerHeight <= 540) {
          return true;
        }
      }).property()
    });

    __exports__["default"] = mobileDetection;
  });
define("emberui/mixins/size-support",
  ["exports"],
  function(__exports__) {
    "use strict";
    var sizesupport;

    sizesupport = Em.Mixin.create({
      classNameBindings: ['computedSize'],
      size: 'medium',
      computedSize: Em.computed('size', function() {
        return 'eui-' + this.get('size');
      })
    });

    __exports__["default"] = sizesupport;
  });
define("emberui/mixins/style-support",
  ["exports"],
  function(__exports__) {
    "use strict";
    var stylesupport;

    stylesupport = Em.Mixin.create({
      classNameBindings: ['computedStyle'],
      style: 'default',
      computedStyle: Em.computed(function() {
        return 'eui-' + this.get('style');
      }).property('style')
    });

    __exports__["default"] = stylesupport;
  });
define("emberui/mixins/text-support",
  ["exports"],
  function(__exports__) {
    "use strict";
    var textsupport;

    textsupport = Em.Mixin.create({
      tagName: 'div',
      classNameBindings: ['computedSize', 'computedStyle', 'class'],
      width: null,
      name: null,
      disabled: null,
      tabindex: null,
      placeholder: null,
      value: null,
      "class": null,
      required: null,
      error: null,
      inputId: null,
      setInputId: (function() {
        return this.set('inputId', this.$('input').attr('id') || this.$('textarea').attr('id'));
      }).on('didInsertElement'),
      placeholderVisible: Em.computed('placeholder', 'value', function() {
        var placeholder, value;
        placeholder = this.get('placeholder');
        value = this.get('value');
        if (placeholder && !value) {
          return true;
        }
      })
    });

    __exports__["default"] = textsupport;
  });
define("emberui/mixins/width-support",
  ["exports"],
  function(__exports__) {
    "use strict";
    var widthsupport;

    widthsupport = Em.Mixin.create({
      attributeBindings: ['computedWidth:style'],
      computedWidth: Em.computed('size', 'width', function() {
        var width, widths;
        widths = {
          tiny: '100px',
          small: '150px',
          medium: '200px',
          large: '250px'
        };
        width = this.get('width') || widths[this.get('size')] || widths['medium'];
        return "width: " + width + ";";
      })
    });

    __exports__["default"] = widthsupport;
  });
define("emberui/templates/eui-button",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n        <b ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("icon")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("></b>\n      ");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n        <b ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("trailingIcon")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("></b>\n      ");
      return buffer;
      }

    function program5(depth0,data) {
      
      
      data.buffer.push("\n      <ul class=\"eui-loading-animation\">\n        <li></li>\n        <li></li>\n        <li></li>\n      </ul>\n    ");
      }

      data.buffer.push("<button ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'disabled': ("isDisabled"),
        'type': ("type"),
        'aria-owns': ("ariaOwns"),
        'aria-haspopup': ("ariaHaspopup"),
        'aria-label': ("label")
      },hashTypes:{'disabled': "STRING",'type': "STRING",'aria-owns': "STRING",'aria-haspopup': "STRING",'aria-label': "ID"},hashContexts:{'disabled': depth0,'type': depth0,'aria-owns': depth0,'aria-haspopup': depth0,'aria-label': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("></button>\n\n<div class=\"eui-button-form\">\n  <div class=\"eui-wrapper\">\n    <i>\n      ");
      stack1 = helpers['if'].call(depth0, "icon", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n      ");
      stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n      ");
      stack1 = helpers['if'].call(depth0, "trailingIcon", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </i>\n\n    ");
      stack1 = helpers['if'].call(depth0, "loading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n</div>\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-calendar",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    <div class=\"eui-month-container\">\n      <header>\n        ");
      stack1 = helpers._triageMustache.call(depth0, "prevMonthLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </header>\n      <div class=\"eui-month-frame\">\n        <ol class=\"eui-daysofweek\">\n          <li class=\"eui-nameofday\">Sun</li>\n          <li class=\"eui-nameofday\">Mon</li>\n          <li class=\"eui-nameofday\">Tue</li>\n          <li class=\"eui-nameofday\">Wed</li>\n          <li class=\"eui-nameofday\">Thu</li>\n          <li class=\"eui-nameofday\">Fri</li>\n          <li class=\"eui-nameofday\">Sat</li>\n        </ol>\n        ");
      data.buffer.push(escapeExpression((helper = helpers['eui-month'] || (depth0 && depth0['eui-month']),options={hash:{
        'month': ("prevMonth"),
        'selection': ("_selection"),
        'disabledDates': ("disabledDates"),
        'maxPastDate': ("maxPastDate"),
        'maxFutureDate': ("maxFutureDate"),
        'select': ("dateSelected")
      },hashTypes:{'month': "ID",'selection': "ID",'disabledDates': "ID",'maxPastDate': "ID",'maxFutureDate': "ID",'select': "STRING"},hashContexts:{'month': depth0,'selection': depth0,'disabledDates': depth0,'maxPastDate': depth0,'maxFutureDate': depth0,'select': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "eui-month", options))));
      data.buffer.push("\n      </div>\n    </div>\n  ");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    <div class=\"eui-month-container\">\n      <header>\n        ");
      stack1 = helpers._triageMustache.call(depth0, "nextMonthLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </header>\n      <div class=\"eui-month-frame\">\n        <ol class=\"eui-daysofweek\">\n          <li class=\"eui-nameofday\">Sun</li>\n          <li class=\"eui-nameofday\">Mon</li>\n          <li class=\"eui-nameofday\">Tue</li>\n          <li class=\"eui-nameofday\">Wed</li>\n          <li class=\"eui-nameofday\">Thu</li>\n          <li class=\"eui-nameofday\">Fri</li>\n          <li class=\"eui-nameofday\">Sat</li>\n        </ol>\n        ");
      data.buffer.push(escapeExpression((helper = helpers['eui-month'] || (depth0 && depth0['eui-month']),options={hash:{
        'month': ("nextMonth"),
        'selection': ("_selection"),
        'disabledDates': ("disabledDates"),
        'maxPastDate': ("maxPastDate"),
        'maxFutureDate': ("maxFutureDate"),
        'select': ("dateSelected")
      },hashTypes:{'month': "ID",'selection': "ID",'disabledDates': "ID",'maxPastDate': "ID",'maxFutureDate': "ID",'select': "STRING"},hashContexts:{'month': depth0,'selection': depth0,'disabledDates': depth0,'maxPastDate': depth0,'maxFutureDate': depth0,'select': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "eui-month", options))));
      data.buffer.push("\n      </div>\n    </div>\n  ");
      return buffer;
      }

      data.buffer.push("<div class=\"eui-calendar-wrapper\">\n  <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "prev", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'disabled': ("isPrevDisabled")
      },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" class=\"eui-previous\"></button>\n  <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'disabled': ("isNextDisabled")
      },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" class=\"eui-next\"></button>\n\n  ");
      stack1 = helpers['if'].call(depth0, "showPrevMonth", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n  <div class=\"eui-month-container\">\n    <header>\n      ");
      stack1 = helpers._triageMustache.call(depth0, "monthLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </header>\n    <div class=\"eui-month-frame\">\n      <ol class=\"eui-daysofweek\">\n        <li class=\"eui-nameofday\">Sun</li>\n        <li class=\"eui-nameofday\">Mon</li>\n        <li class=\"eui-nameofday\">Tue</li>\n        <li class=\"eui-nameofday\">Wed</li>\n        <li class=\"eui-nameofday\">Thu</li>\n        <li class=\"eui-nameofday\">Fri</li>\n        <li class=\"eui-nameofday\">Sat</li>\n      </ol>\n      ");
      data.buffer.push(escapeExpression((helper = helpers['eui-month'] || (depth0 && depth0['eui-month']),options={hash:{
        'month': ("month"),
        'selection': ("_selection"),
        'disabledDates': ("disabledDates"),
        'maxPastDate': ("maxPastDate"),
        'maxFutureDate': ("maxFutureDate"),
        'select': ("dateSelected")
      },hashTypes:{'month': "ID",'selection': "ID",'disabledDates': "ID",'maxPastDate': "ID",'maxFutureDate': "ID",'select': "STRING"},hashContexts:{'month': depth0,'selection': depth0,'disabledDates': depth0,'maxPastDate': depth0,'maxFutureDate': depth0,'select': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "eui-month", options))));
      data.buffer.push("\n    </div>\n  </div>\n\n  ");
      stack1 = helpers['if'].call(depth0, "showNextMonth", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-checkbox",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <div class=\"eui-error-message\">\n    <div class=\"eui-error-wrapper\">\n      <p>\n        ");
      stack1 = helpers._triageMustache.call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </p>\n    </div>\n  </div>\n");
      return buffer;
      }

      data.buffer.push("<input type=\"checkbox\" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'checked': ("value"),
        'disabled': ("disabled")
      },hashTypes:{'checked': "ID",'disabled': "ID"},hashContexts:{'checked': depth0,'disabled': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" />\n\n<div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': (":eui-checkbox-form disabled:eui-disabled:eui-enabled")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n  <div class=\"eui-wrapper\">\n    <i class=\"eui-icon\"></i>\n  </div>\n</div>\n\n");
      stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-dropbutton",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression((helper = helpers['eui-button'] || (depth0 && depth0['eui-button']),options={hash:{
        'label': ("primaryAction.label"),
        'style': ("view.style"),
        'size': ("view.size"),
        'icon': ("view.icon"),
        'loading': ("view.loading"),
        'disabled': ("view.disabled"),
        'class': ("eui-primaryaction"),
        'action': ("primaryAction")
      },hashTypes:{'label': "ID",'style': "ID",'size': "ID",'icon': "ID",'loading': "ID",'disabled': "ID",'class': "STRING",'action': "STRING"},hashContexts:{'label': depth0,'style': depth0,'size': depth0,'icon': depth0,'loading': depth0,'disabled': depth0,'class': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "eui-button", options))));
      data.buffer.push("\n\n  ");
      data.buffer.push(escapeExpression((helper = helpers['eui-button'] || (depth0 && depth0['eui-button']),options={hash:{
        'style': ("view.style"),
        'size': ("view.size"),
        'icon': ("fa fa-caret-down"),
        'loading': (false),
        'disabled': ("view.disabled"),
        'classBinding': (":eui-trigger poplistIsOpen:eui-active"),
        'action': ("toggleWindow")
      },hashTypes:{'style': "ID",'size': "ID",'icon': "STRING",'loading': "BOOLEAN",'disabled': "ID",'classBinding': "STRING",'action': "STRING"},hashContexts:{'style': depth0,'size': depth0,'icon': depth0,'loading': depth0,'disabled': depth0,'classBinding': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "eui-button", options))));
      data.buffer.push("\n\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression((helper = helpers['eui-button'] || (depth0 && depth0['eui-button']),options={hash:{
        'label': ("view.label"),
        'style': ("view.style"),
        'size': ("view.size"),
        'icon': ("view.icon"),
        'trailingIcon': ("fa fa-caret-down"),
        'loading': ("view.loading"),
        'disabled': ("view.disabled"),
        'classBinding': ("poplistIsOpen:eui-active"),
        'action': ("toggleWindow")
      },hashTypes:{'label': "ID",'style': "ID",'size': "ID",'icon': "ID",'trailingIcon': "STRING",'loading': "ID",'disabled': "ID",'classBinding': "STRING",'action': "STRING"},hashContexts:{'label': depth0,'style': depth0,'size': depth0,'icon': depth0,'trailingIcon': depth0,'loading': depth0,'disabled': depth0,'classBinding': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "eui-button", options))));
      data.buffer.push("\n\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "primaryAction", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-input",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <label ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'for': ("inputId")
      },hashTypes:{'for': "ID"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "placeholder", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</label>\n  ");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <div class=\"eui-error-message\">\n    <div class=\"eui-error-wrapper\">\n      <p>\n        ");
      stack1 = helpers._triageMustache.call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </p>\n    </div>\n  </div>\n");
      return buffer;
      }

      data.buffer.push("<div class=\"eui-wrapper\">\n  ");
      stack1 = helpers['if'].call(depth0, "placeholderVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'type': ("type"),
        'value': ("value"),
        'name': ("name"),
        'disabled': ("disabled"),
        'maxlength': ("maxlength"),
        'tabindex': ("tabindex"),
        'action': ("enter")
      },hashTypes:{'type': "ID",'value': "ID",'name': "ID",'disabled': "ID",'maxlength': "ID",'tabindex': "ID",'action': "STRING"},hashContexts:{'type': depth0,'value': depth0,'name': depth0,'disabled': depth0,'maxlength': depth0,'tabindex': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n</div>\n\n");
      stack1 = helpers['if'].call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-modal",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <div class=\"eui-modal-wrapper\">\n\n    <div class=\"eui-modal-table\">\n      <div class=\"eui-modal-cell\">\n\n        <div class=\"eui-modalobject\">\n          <div class=\"eui-modalobject-wrapper\">\n            ");
      stack1 = helpers['if'].call(depth0, "programmatic", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"eui-overlay\"></div>\n  </div>\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n              ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "contentViewClass", {hash:{
        'contentBinding': ("content")
      },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n            ");
      return buffer;
      }

    function program4(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n              ");
      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n            ");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "renderModal", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-popcal",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression((helper = helpers['eui-calendar'] || (depth0 && depth0['eui-calendar']),options={hash:{
        'selection': ("_selection"),
        'allowMultipleBinding': ("dateRange"),
        'selectAction': ("closeCalendar"),
        'disablePast': ("disablePast"),
        'disableFuture': ("disableFuture"),
        'maxPastDate': ("maxPastDate"),
        'maxFutureDate': ("maxFutureDate"),
        'disabledDates': ("disabledDates"),
        'style': ("style")
      },hashTypes:{'selection': "ID",'allowMultipleBinding': "STRING",'selectAction': "STRING",'disablePast': "ID",'disableFuture': "ID",'maxPastDate': "ID",'maxFutureDate': "ID",'disabledDates': "ID",'style': "ID"},hashContexts:{'selection': depth0,'allowMultipleBinding': depth0,'selectAction': depth0,'disablePast': depth0,'disableFuture': depth0,'maxPastDate': depth0,'maxFutureDate': depth0,'disabledDates': depth0,'style': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "eui-calendar", options))));
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-poplist-option",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-poplist",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

    function program1(depth0,data) {
      
      
      data.buffer.push("\n    <div class=\"eui-nooptions\">No results found.</div>\n  ");
      }

    function program3(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
        'contentBinding': ("filteredOptions")
      },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n  ");
      return buffer;
      }

      data.buffer.push("<div class=\"eui-poplistwrapper\">\n  <div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': (":eui-search-wrapper searchString:eui-active")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n    ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'class': ("eui-search"),
        'valueBinding': ("searchString"),
        'size': ("1"),
        'ariaRole': ("combobox"),
        'aria-autocomplete': ("list")
      },hashTypes:{'class': "STRING",'valueBinding': "STRING",'size': "STRING",'ariaRole': "STRING",'aria-autocomplete': "STRING"},hashContexts:{'class': depth0,'valueBinding': depth0,'size': depth0,'ariaRole': depth0,'aria-autocomplete': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n  </div>\n\n  ");
      stack1 = helpers['if'].call(depth0, "hasNoOptions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-select",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <div class=\"eui-error-message\">\n    <div class=\"eui-error-wrapper\">\n      <p>\n        ");
      stack1 = helpers._triageMustache.call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </p>\n    </div>\n  </div>\n");
      return buffer;
      }

      data.buffer.push(escapeExpression((helper = helpers['eui-button'] || (depth0 && depth0['eui-button']),options={hash:{
        'label': ("view.label"),
        'disabled': ("disabled"),
        'style': ("style"),
        'size': ("size"),
        'width': ("100%"),
        'classBinding': (":eui-select poplistIsOpen:eui-active"),
        'icon': ("eui-icon"),
        'ariaOwns': ("ariaOwns"),
        'ariaHaspopup': ("ariaHasPopup")
      },hashTypes:{'label': "ID",'disabled': "ID",'style': "ID",'size': "ID",'width': "STRING",'classBinding': "STRING",'icon': "STRING",'ariaOwns': "ID",'ariaHaspopup': "ID"},hashContexts:{'label': depth0,'disabled': depth0,'style': depth0,'size': depth0,'width': depth0,'classBinding': depth0,'icon': depth0,'ariaOwns': depth0,'ariaHaspopup': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "eui-button", options))));
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-selectdate",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <div class=\"eui-error-message\">\n    <div class=\"eui-error-wrapper\">\n      <p>\n        ");
      stack1 = helpers._triageMustache.call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </p>\n    </div>\n  </div>\n");
      return buffer;
      }

      data.buffer.push(escapeExpression((helper = helpers['eui-button'] || (depth0 && depth0['eui-button']),options={hash:{
        'label': ("view.label"),
        'disabled': ("disabled"),
        'style': ("style"),
        'size': ("size"),
        'width': ("100%"),
        'classBinding': (":eui-select popcalIsOpen:eui-active"),
        'action': ("openCalendar"),
        'icon': ("eui-icon")
      },hashTypes:{'label': "ID",'disabled': "ID",'style': "ID",'size': "ID",'width': "STRING",'classBinding': "STRING",'action': "STRING",'icon': "STRING"},hashContexts:{'label': depth0,'disabled': depth0,'style': depth0,'size': depth0,'width': depth0,'classBinding': depth0,'action': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "eui-button", options))));
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("emberui/templates/eui-textarea",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <label ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'for': ("inputId")
      },hashTypes:{'for': "ID"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "placeholder", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</label>\n  ");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <div class=\"eui-error-message\">\n    <div class=\"eui-error-wrapper\">\n      <p>\n        ");
      stack1 = helpers._triageMustache.call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </p>\n    </div>\n  </div>\n");
      return buffer;
      }

      data.buffer.push("<div class=\"eui-wrapper\">\n  ");
      stack1 = helpers['if'].call(depth0, "placeholderVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
        'value': ("value"),
        'type': ("type"),
        'name': ("name"),
        'disabled': ("disabled"),
        'maxlength': ("maxlength"),
        'tabindex': ("tabindex")
      },hashTypes:{'value': "ID",'type': "ID",'name': "ID",'disabled': "ID",'maxlength': "ID",'tabindex': "ID"},hashContexts:{'value': depth0,'type': depth0,'name': depth0,'disabled': depth0,'maxlength': depth0,'tabindex': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
      data.buffer.push("\n</div>\n\n");
      stack1 = helpers['if'].call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("emberui/utilities/position",
  [],
  function() {
    "use strict";
    /*! jQuery UI - v1.10.4 - 2014-04-28
    * http://jqueryui.com
    * Includes: jquery.ui.position.js
    * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

    (function( $, undefined ) {

    $.ui = $.ui || {};

    var cachedScrollbarWidth,
    	max = Math.max,
    	abs = Math.abs,
    	round = Math.round,
    	rhorizontal = /left|center|right/,
    	rvertical = /top|center|bottom/,
    	roffset = /[\+\-]\d+(\.[\d]+)?%?/,
    	rposition = /^\w+/,
    	rpercent = /%$/,
    	_position = $.fn.position;

    function getOffsets( offsets, width, height ) {
    	return [
    		parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
    		parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
    	];
    }

    function parseCss( element, property ) {
    	return parseInt( $.css( element, property ), 10 ) || 0;
    }

    function getDimensions( elem ) {
    	var raw = elem[0];
    	if ( raw.nodeType === 9 ) {
    		return {
    			width: elem.width(),
    			height: elem.height(),
    			offset: { top: 0, left: 0 }
    		};
    	}
    	if ( $.isWindow( raw ) ) {
    		return {
    			width: elem.width(),
    			height: elem.height(),
    			offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
    		};
    	}
    	if ( raw.preventDefault ) {
    		return {
    			width: 0,
    			height: 0,
    			offset: { top: raw.pageY, left: raw.pageX }
    		};
    	}
    	return {
    		width: elem.outerWidth(),
    		height: elem.outerHeight(),
    		offset: elem.offset()
    	};
    }

    $.position = {
    	scrollbarWidth: function() {
    		if ( cachedScrollbarWidth !== undefined ) {
    			return cachedScrollbarWidth;
    		}
    		var w1, w2,
    			div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
    			innerDiv = div.children()[0];

    		$( "body" ).append( div );
    		w1 = innerDiv.offsetWidth;
    		div.css( "overflow", "scroll" );

    		w2 = innerDiv.offsetWidth;

    		if ( w1 === w2 ) {
    			w2 = div[0].clientWidth;
    		}

    		div.remove();

    		return (cachedScrollbarWidth = w1 - w2);
    	},
    	getScrollInfo: function( within ) {
    		var overflowX = within.isWindow || within.isDocument ? "" :
    				within.element.css( "overflow-x" ),
    			overflowY = within.isWindow || within.isDocument ? "" :
    				within.element.css( "overflow-y" ),
    			hasOverflowX = overflowX === "scroll" ||
    				( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
    			hasOverflowY = overflowY === "scroll" ||
    				( overflowY === "auto" && within.height < within.element[0].scrollHeight );
    		return {
    			width: hasOverflowY ? $.position.scrollbarWidth() : 0,
    			height: hasOverflowX ? $.position.scrollbarWidth() : 0
    		};
    	},
    	getWithinInfo: function( element ) {
    		var withinElement = $( element || window ),
    			isWindow = $.isWindow( withinElement[0] ),
    			isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
    		return {
    			element: withinElement,
    			isWindow: isWindow,
    			isDocument: isDocument,
    			offset: withinElement.offset() || { left: 0, top: 0 },
    			scrollLeft: withinElement.scrollLeft(),
    			scrollTop: withinElement.scrollTop(),
    			width: isWindow ? withinElement.width() : withinElement.outerWidth(),
    			height: isWindow ? withinElement.height() : withinElement.outerHeight()
    		};
    	}
    };

    $.fn.position = function( options ) {
    	if ( !options || !options.of ) {
    		return _position.apply( this, arguments );
    	}

    	// make a copy, we don't want to modify arguments
    	options = $.extend( {}, options );

    	var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
    		target = $( options.of ),
    		within = $.position.getWithinInfo( options.within ),
    		scrollInfo = $.position.getScrollInfo( within ),
    		collision = ( options.collision || "flip" ).split( " " ),
    		offsets = {};

    	dimensions = getDimensions( target );
    	if ( target[0].preventDefault ) {
    		// force left top to allow flipping
    		options.at = "left top";
    	}
    	targetWidth = dimensions.width;
    	targetHeight = dimensions.height;
    	targetOffset = dimensions.offset;
    	// clone to reuse original targetOffset later
    	basePosition = $.extend( {}, targetOffset );

    	// force my and at to have valid horizontal and vertical positions
    	// if a value is missing or invalid, it will be converted to center
    	$.each( [ "my", "at" ], function() {
    		var pos = ( options[ this ] || "" ).split( " " ),
    			horizontalOffset,
    			verticalOffset;

    		if ( pos.length === 1) {
    			pos = rhorizontal.test( pos[ 0 ] ) ?
    				pos.concat( [ "center" ] ) :
    				rvertical.test( pos[ 0 ] ) ?
    					[ "center" ].concat( pos ) :
    					[ "center", "center" ];
    		}
    		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
    		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

    		// calculate offsets
    		horizontalOffset = roffset.exec( pos[ 0 ] );
    		verticalOffset = roffset.exec( pos[ 1 ] );
    		offsets[ this ] = [
    			horizontalOffset ? horizontalOffset[ 0 ] : 0,
    			verticalOffset ? verticalOffset[ 0 ] : 0
    		];

    		// reduce to just the positions without the offsets
    		options[ this ] = [
    			rposition.exec( pos[ 0 ] )[ 0 ],
    			rposition.exec( pos[ 1 ] )[ 0 ]
    		];
    	});

    	// normalize collision option
    	if ( collision.length === 1 ) {
    		collision[ 1 ] = collision[ 0 ];
    	}

    	if ( options.at[ 0 ] === "right" ) {
    		basePosition.left += targetWidth;
    	} else if ( options.at[ 0 ] === "center" ) {
    		basePosition.left += targetWidth / 2;
    	}

    	if ( options.at[ 1 ] === "bottom" ) {
    		basePosition.top += targetHeight;
    	} else if ( options.at[ 1 ] === "center" ) {
    		basePosition.top += targetHeight / 2;
    	}

    	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
    	basePosition.left += atOffset[ 0 ];
    	basePosition.top += atOffset[ 1 ];

    	return this.each(function() {
    		var collisionPosition, using,
    			elem = $( this ),
    			elemWidth = elem.outerWidth(),
    			elemHeight = elem.outerHeight(),
    			marginLeft = parseCss( this, "marginLeft" ),
    			marginTop = parseCss( this, "marginTop" ),
    			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
    			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
    			position = $.extend( {}, basePosition ),
    			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

    		if ( options.my[ 0 ] === "right" ) {
    			position.left -= elemWidth;
    		} else if ( options.my[ 0 ] === "center" ) {
    			position.left -= elemWidth / 2;
    		}

    		if ( options.my[ 1 ] === "bottom" ) {
    			position.top -= elemHeight;
    		} else if ( options.my[ 1 ] === "center" ) {
    			position.top -= elemHeight / 2;
    		}

    		position.left += myOffset[ 0 ];
    		position.top += myOffset[ 1 ];

    		// if the browser doesn't support fractions, then round for consistent results
    		if ( !$.support.offsetFractions ) {
    			position.left = round( position.left );
    			position.top = round( position.top );
    		}

    		collisionPosition = {
    			marginLeft: marginLeft,
    			marginTop: marginTop
    		};

    		$.each( [ "left", "top" ], function( i, dir ) {
    			if ( $.ui.position[ collision[ i ] ] ) {
    				$.ui.position[ collision[ i ] ][ dir ]( position, {
    					targetWidth: targetWidth,
    					targetHeight: targetHeight,
    					elemWidth: elemWidth,
    					elemHeight: elemHeight,
    					collisionPosition: collisionPosition,
    					collisionWidth: collisionWidth,
    					collisionHeight: collisionHeight,
    					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
    					my: options.my,
    					at: options.at,
    					within: within,
    					elem : elem
    				});
    			}
    		});

    		if ( options.using ) {
    			// adds feedback as second argument to using callback, if present
    			using = function( props ) {
    				var left = targetOffset.left - position.left,
    					right = left + targetWidth - elemWidth,
    					top = targetOffset.top - position.top,
    					bottom = top + targetHeight - elemHeight,
    					feedback = {
    						target: {
    							element: target,
    							left: targetOffset.left,
    							top: targetOffset.top,
    							width: targetWidth,
    							height: targetHeight
    						},
    						element: {
    							element: elem,
    							left: position.left,
    							top: position.top,
    							width: elemWidth,
    							height: elemHeight
    						},
    						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
    						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
    					};
    				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
    					feedback.horizontal = "center";
    				}
    				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
    					feedback.vertical = "middle";
    				}
    				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
    					feedback.important = "horizontal";
    				} else {
    					feedback.important = "vertical";
    				}
    				options.using.call( this, props, feedback );
    			};
    		}

    		elem.offset( $.extend( position, { using: using } ) );
    	});
    };

    $.ui.position = {
    	fit: {
    		left: function( position, data ) {
    			var within = data.within,
    				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
    				outerWidth = within.width,
    				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
    				overLeft = withinOffset - collisionPosLeft,
    				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
    				newOverRight;

    			// element is wider than within
    			if ( data.collisionWidth > outerWidth ) {
    				// element is initially over the left side of within
    				if ( overLeft > 0 && overRight <= 0 ) {
    					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
    					position.left += overLeft - newOverRight;
    				// element is initially over right side of within
    				} else if ( overRight > 0 && overLeft <= 0 ) {
    					position.left = withinOffset;
    				// element is initially over both left and right sides of within
    				} else {
    					if ( overLeft > overRight ) {
    						position.left = withinOffset + outerWidth - data.collisionWidth;
    					} else {
    						position.left = withinOffset;
    					}
    				}
    			// too far left -> align with left edge
    			} else if ( overLeft > 0 ) {
    				position.left += overLeft;
    			// too far right -> align with right edge
    			} else if ( overRight > 0 ) {
    				position.left -= overRight;
    			// adjust based on position and margin
    			} else {
    				position.left = max( position.left - collisionPosLeft, position.left );
    			}
    		},
    		top: function( position, data ) {
    			var within = data.within,
    				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
    				outerHeight = data.within.height,
    				collisionPosTop = position.top - data.collisionPosition.marginTop,
    				overTop = withinOffset - collisionPosTop,
    				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
    				newOverBottom;

    			// element is taller than within
    			if ( data.collisionHeight > outerHeight ) {
    				// element is initially over the top of within
    				if ( overTop > 0 && overBottom <= 0 ) {
    					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
    					position.top += overTop - newOverBottom;
    				// element is initially over bottom of within
    				} else if ( overBottom > 0 && overTop <= 0 ) {
    					position.top = withinOffset;
    				// element is initially over both top and bottom of within
    				} else {
    					if ( overTop > overBottom ) {
    						position.top = withinOffset + outerHeight - data.collisionHeight;
    					} else {
    						position.top = withinOffset;
    					}
    				}
    			// too far up -> align with top
    			} else if ( overTop > 0 ) {
    				position.top += overTop;
    			// too far down -> align with bottom edge
    			} else if ( overBottom > 0 ) {
    				position.top -= overBottom;
    			// adjust based on position and margin
    			} else {
    				position.top = max( position.top - collisionPosTop, position.top );
    			}
    		}
    	},
    	flip: {
    		left: function( position, data ) {
    			var within = data.within,
    				withinOffset = within.offset.left + within.scrollLeft,
    				outerWidth = within.width,
    				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
    				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
    				overLeft = collisionPosLeft - offsetLeft,
    				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
    				myOffset = data.my[ 0 ] === "left" ?
    					-data.elemWidth :
    					data.my[ 0 ] === "right" ?
    						data.elemWidth :
    						0,
    				atOffset = data.at[ 0 ] === "left" ?
    					data.targetWidth :
    					data.at[ 0 ] === "right" ?
    						-data.targetWidth :
    						0,
    				offset = -2 * data.offset[ 0 ],
    				newOverRight,
    				newOverLeft;

    			if ( overLeft < 0 ) {
    				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
    				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
    					position.left += myOffset + atOffset + offset;
    				}
    			}
    			else if ( overRight > 0 ) {
    				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
    				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
    					position.left += myOffset + atOffset + offset;
    				}
    			}
    		},
    		top: function( position, data ) {
    			var within = data.within,
    				withinOffset = within.offset.top + within.scrollTop,
    				outerHeight = within.height,
    				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
    				collisionPosTop = position.top - data.collisionPosition.marginTop,
    				overTop = collisionPosTop - offsetTop,
    				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
    				top = data.my[ 1 ] === "top",
    				myOffset = top ?
    					-data.elemHeight :
    					data.my[ 1 ] === "bottom" ?
    						data.elemHeight :
    						0,
    				atOffset = data.at[ 1 ] === "top" ?
    					data.targetHeight :
    					data.at[ 1 ] === "bottom" ?
    						-data.targetHeight :
    						0,
    				offset = -2 * data.offset[ 1 ],
    				newOverTop,
    				newOverBottom;
    			if ( overTop < 0 ) {
    				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
    				if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
    					position.top += myOffset + atOffset + offset;
    				}
    			}
    			else if ( overBottom > 0 ) {
    				newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
    				if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
    					position.top += myOffset + atOffset + offset;
    				}
    			}
    		}
    	},
    	flipfit: {
    		left: function() {
    			$.ui.position.flip.left.apply( this, arguments );
    			$.ui.position.fit.left.apply( this, arguments );
    		},
    		top: function() {
    			$.ui.position.flip.top.apply( this, arguments );
    			$.ui.position.fit.top.apply( this, arguments );
    		}
    	}
    };

    // fraction support test
    (function () {
    	var testElement, testElementParent, testElementStyle, offsetLeft, i,
    		body = document.getElementsByTagName( "body" )[ 0 ],
    		div = document.createElement( "div" );

    	//Create a "fake body" for testing based on method used in jQuery.support
    	testElement = document.createElement( body ? "div" : "body" );
    	testElementStyle = {
    		visibility: "hidden",
    		width: 0,
    		height: 0,
    		border: 0,
    		margin: 0,
    		background: "none"
    	};
    	if ( body ) {
    		$.extend( testElementStyle, {
    			position: "absolute",
    			left: "-1000px",
    			top: "-1000px"
    		});
    	}
    	for ( i in testElementStyle ) {
    		testElement.style[ i ] = testElementStyle[ i ];
    	}
    	testElement.appendChild( div );
    	testElementParent = body || document.documentElement;
    	testElementParent.insertBefore( testElement, testElementParent.firstChild );

    	div.style.cssText = "position: absolute; left: 10.7432222px;";

    	offsetLeft = $( div ).offset().left;
    	$.support.offsetFractions = offsetLeft > 10 && offsetLeft < 11;

    	testElement.innerHTML = "";
    	testElementParent.removeChild( testElement );
    })();

    }( jQuery ) );
  });
define("emberui/utilities/tabbable-selector",
  [],
  function() {
    "use strict";
    /*!
     * Copied from ic-modal which is adapted from jQuery UI core
     *
     * http://jqueryui.com
     * https://github.com/instructure/ic-modal/tree/gh-pages
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */

    var $ = Ember.$;

    function focusable( element, isTabIndexNotNaN ) {
      var nodeName = element.nodeName.toLowerCase();
      return ( /input|select|textarea|button|object/.test( nodeName ) ?
        !element.disabled :
        "a" === nodeName ?
          element.href || isTabIndexNotNaN :
          isTabIndexNotNaN) && visible( element );
    }

    function visible( element ) {
      return $.expr.filters.visible( element ) &&
        !$( element ).parents().addBack().filter(function() {
          return $.css( this, "visibility" ) === "hidden";
        }).length;
    }

    if (!$.expr[':'].tabbable) {
      $.expr[':'].tabbable = function( element ) {
        var tabIndex = $.attr( element, "tabindex" ),
          isTabIndexNaN = isNaN( tabIndex );
        return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
      }
    };
  });