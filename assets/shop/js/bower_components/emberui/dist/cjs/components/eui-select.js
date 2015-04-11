"use strict";
var poplistComponent = require("../components/eui-poplist")["default"] || require("../components/eui-poplist");
var disabledSupport = require("../mixins/disabled-support")["default"] || require("../mixins/disabled-support");
var errorSupport = require("../mixins/error-support")["default"] || require("../mixins/error-support");
var widthSupport = require("../mixins/width-support")["default"] || require("../mixins/width-support");
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

exports["default"] = select;