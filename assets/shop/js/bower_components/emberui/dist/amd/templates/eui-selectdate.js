define(
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