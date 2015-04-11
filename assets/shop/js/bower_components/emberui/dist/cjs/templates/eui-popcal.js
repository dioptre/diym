"use strict";
var Ember = require("ember")["default"] || require("ember");
exports["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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