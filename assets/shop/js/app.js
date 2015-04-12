function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


Ember.Application.initializer({
  name: 'emberfire:firebase',
  initialize: function(container, application) {
  	var firebase = new Firebase('https://sizzling-inferno-8323.firebaseio.com/');
    application.register('firebase:main', firebase, { instantiate: false, singleton: true });
	      Ember.A(['model', 'controller', 'view', 'route', 'adapter', 'component']).forEach(function(component) {
	        application.inject(component, 'firebase', 'firebase:main');

	      });
	var store = container.lookup('store:main');

	application.set('user', Ember.Object.create())

	if (getCookie('siid') === '' && getParameterByName('siid') !== '')
		setCookie('siid', getParameterByName('siid'))
	// application.deferReadiness();
	// var user = Ember.Object.extend({
	//   uid: null,
	//   data: function() {

	//   }.property()
	// });

	// store.
	 	application.register('efu:main', application.get('user'), { instantiate: false, singleton: true });
	 	Ember.A(['model', 'controller', 'view', 'route', 'component']).forEach(function(component) {
   		application.inject(component, 'user', 'efu:main');

	 });
  }
});

App = Ember.Application.create();
GiftWrap.install(App);
var LiquidFire = GiftWrap.require('liquid-fire');

EXPEDIT = {};
EXPEDIT.SubscriptionOnlyRouteMixin = Ember.Mixin.create({
	beforeModel: function(transition) {
		var _this = this;
	    return new Ember.RSVP.Promise(function(resolve, reject) {
	    	Ember.run.scheduleOnce('sync', App, function() {
				if (!_this.get('user.data')) {
			  		var authData = _this.get('firebase').getAuth();
					if (authData) {
						_this.store.find('user', authData.uid).then(function (user) {
						    App.set('user.data',user);
						    if (!user.get('subscription')) {
						    	transition.abort();
				    			_this.transitionTo('index');
				    			reject('Not a subscriber.')
						    }
						    else {
						    	resolve();
						    }
						})
					}
					else {
					    transition.abort();
					    _this.transitionTo('login');
					    reject('Not logged in.')
					}
				}
				else if (!_this.get('user.data.subscription')) {
				    transition.abort();
				    _this.transitionTo('index');
				    reject('Not a subscriber.')
				}
				else {
					resolve();
				}
			});
		});
	}
});
EXPEDIT.ApplicationRouteMixin = Ember.Mixin.create({

});
EXPEDIT.FormControllerMixin = Ember.Mixin.create({
	cv : true,
	credentialsValid: function(key, value, previousValue) {
		if (arguments.length > 1) {
      		this.set('cv', value)
	    }
	    // getter
	    return this.get('cv');
	}.property('email', 'password'),
	emailValid: function () {
		if (this.get('email'))
			return !this.get('email').match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/); //'
		else return true;
	}.property('email'),
	fullNameValid: function () {
		return (this.get('fullName') && this.get('fullName').length > 0)
	}.property('fullName'),
	actions: {
		login: function() {
			var _this = this;
			this.get('firebase').authWithPassword({
			  email    : this.get('email'),
			  password : this.get('password')
			}, function(err, authData) {
			  if (err) {
			    switch (err.code) {
			      case "INVALID_EMAIL":
			      // handle an invalid email
			      case "INVALID_PASSWORD":
			      // handle an invalid password
			      default:
			    }
			    _this.set('cv', false);
			  } else if (authData) {
			  	var _authData = authData;
			    // user authenticated with Firebase
			    console.log("Logged In! User ID: " + authData.uid);
			    if (!_this.get('user.data')) {
				    _this.store.find('user', authData.uid).then(function (user) {
				    	App.set('user.data',user);
				    	_this.set('cv', true);
				    	_this.transitionToRoute('index');
				    }).catch(function (reason) {
				    	if (_this.get('fullName')) {
						    var fullName = _this.get('fullName').split(" ");
						    var lastName = null;
						    var firstName = fullName[0];
						    if (fullName.length > 1)
						    	lastName = fullName[fullName.length - 1];
						    user = _this.store.createRecord('user', {id: _authData.uid, firstName: firstName, lastName: lastName, email: _this.get('email'), uid: _authData.uid, referrer: getCookie('siid')});
						    user.save();
				    	}
				    	App.set('user.data',user);
				    	_this.set('cv', true);
				    	_this.transitionToRoute('index');
				    });
				}
				else {
					_this.set('cv', true);
				    _this.transitionToRoute('index');
				}


			  }
			});

		},
		signup: function() {
			var _this = this;
			this.get('firebase').createUser({
			  email    : this.get('email'),
			  password : this.get('password')
			}, function(error) {
			  if (error === null) {
			    console.log("User created successfully");
			    _this.send('login');
			  } else {
			    console.log("Error creating user:", error);
			  }
			});
	  	}
	  }
});
EXPEDIT.ProtectedRouteMixin = Ember.Mixin.create({
	beforeModel: function(transition) {
		var _this = this;
	    return new Ember.RSVP.Promise(function(resolve, reject) {
  			Ember.run.scheduleOnce('sync', App, function() {
		    	if (!_this.get('user.data')) {
		    		var authData = _this.get('firebase').getAuth();
					if (authData) {
						_this.store.find('user', authData.uid).then(function (user) {
						    	App.set('user.data',user);
						    	resolve();
						}).catch(function (reason) {
							transition.abort();
							_this.transitionTo('login');
							reject('Not valid user - could not fetch details')
						});
					}
					else {
						_this.transitionTo('login');
						reject('Not valid user - not logged in')
					}
		    	}
		    	else {
		    		if (this.get('user.data') && (transition.targetName === 'signup' || transition.targetName === 'login')) {
						transition.abort();
						this.transitionTo('index');
					}
					resolve();
		    	}
		    });
  		});

	}
});


App.Router.map(function() {
  this.route('signup');
  this.route('login');
  this.route('article');
  this.route('thanks');
  this.route('subscribe');
  this.route('setting');
  this.route('transacted');
  this.route('declined');
  this.route('feedback');
  this.route('paymentMethod');
  this.route('invoices');
  this.route('sell');
  this.route('seller');
  this.route('sequencer');
});

function biggestSize(context, dimension) {
  var sizes = [];
  if (context.newElement) {
    sizes.push(parseInt(context.newElement.css(dimension), 10));
    sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
  }
  if (context.oldElement) {
    sizes.push(parseInt(context.oldElement.css(dimension), 10));
    sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
  }
  return Math.max.apply(null, sizes);
}

App.register('transition:toLeft', function (opts) {
  var direction = 1;
  if (opts && opts.direction === 'cw') {
    direction = -1;
  }
  LiquidFire.stop(this.oldElement);
  //debugger;
  //this.oldElement.css('transform-origin', '50% 150%');
  //this.newElement.css('transform-origin', '50% 150%');
  var bigger = biggestSize(this, 'width');
  return LiquidFire.Promise.all([
    LiquidFire.animate(this.oldElement, { translateX: (bigger * direction) + 'px' }, opts),
    LiquidFire.animate(this.newElement, { translateX: ["0px", (-1 * bigger * direction) + 'px'] }, opts),
  ]);
});

App.register('transition:toRight', function (opts) {
  var direction = 1;
  if (opts && opts.direction === 'cw') {
    direction = -1;
  }
  LiquidFire.stop(this.oldElement);
  //debugger;
  //this.oldElement.css('transform-origin', '50% 150%');
  //this.newElement.css('transform-origin', '50% 150%');
  var bigger = biggestSize(this, 'width');
  return LiquidFire.Promise.all([
    LiquidFire.animate(this.oldElement, { translateX: (-1 * bigger * direction)  + 'px' }, opts),
    LiquidFire.animate(this.newElement, { translateX: ["0px", (bigger * direction) + 'px'] }, opts),
  ]);
});

App.register('transitions:main', function(){
    this.transition(
		this.fromRoute('index'),
		this.toRoute('sequencer'),
		this.use('toLeft'),
		this.reverse('toRight')
    );
});


App.SequencerRoute = Ember.Route.extend(EXPEDIT.ProtectedRouteMixin,
{
	
});

App.SequencerController = Ember.Controller.extend({
	needs: ['application'],
	music: Ember.computed.alias('controllers.application.model'),
});


	
App.SequencerView = Ember.View.extend({
	didInsertElement: function(){
		this._super();




		Ember.run.scheduleOnce('afterRender', this, function () {
			console.log('sequencing')
	
	
	    // Canvas rendering class
    var Renderer = function(canvas, width, height) {
        this.canvas   = canvas;
        this.context  = canvas.getContext('2d');
        this.tilesize = 32;
        this.onresize = function() {};

        this.resize(width, height);
    }

    Renderer.prototype.resize = function(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.onresize();
    }

    Renderer.prototype.getWidth = function() {
        return this.canvas.width;
    }

    Renderer.prototype.getHeight = function() {
        return this.canvas.height;
    }

    Renderer.prototype.drawCellRect = function(color, x, y) {
        this.context.save();
        this.context.lineWidth = 2;
        this.context.strokeStyle = color;
        this.context.translate(x, y);
        this.context.strokeRect(0, 0, this.tilesize, this.tilesize);
        this.context.restore();
    }

    Renderer.prototype.drawTile = function(image, x, y, sx, sy) {
        this.context.save();
        this.context.drawImage(image, x, y, this.tilesize, this.tilesize);
        this.context.restore();
    }

    Renderer.prototype.clearRect = function(x, y) {
        this.context.clearRect(x, y, this.tilesize, this.tilesize);
    }
	
	Renderer.prototype.clearCol = function(x) {		
        this.context.clearRect(x * this.tilesize, 0, this.tilesize, 480);
    }

    Renderer.prototype.renderMap = function(map, tilesheet) {
        for(var i = 0; i < 16; i++) {
			var col = i * this.tilesize;
			for (var j = 0; j < 16; j++) {
                var row = j * this.tilesize;
                if(map[i] == j && map[i] > 0) {
                    this.drawTile(tilesheet, col, row - this.tilesize, col, row - this.tilesize);
                } else {
                    this.drawCellRect('#FFEEEE', col, row);
                }
            }
        }
    }

    // Use the correct document according to the window argument
    var document = window.document;
    var status = 0;

    // Extract and canvas, and instantiate the renderer
    var canvas = document.getElementById('entities');
    var renderer = new Renderer(canvas, 512, 480);
	var mousedown = 0;
	window.addEventListener('mousedown', function() {
		mousedown++;
	});
	window.addEventListener('mouseup', function() {
		mousedown--;
	});
	
    // window.addEventListener('resize', function() {
        // renderer.resize(window.innerWidth, window.innerHeight);
    // });

    var lastX = null;
    var lastY = null;

    canvas.addEventListener('mousemove', function(e) {
        var x = parseInt(e.layerX / renderer.tilesize) * renderer.tilesize;
        var y = parseInt(e.layerY / renderer.tilesize) * renderer.tilesize;

        //renderer.drawCellRect('red', x, y);
        if(mousedown && ((lastX !== null && lastX != x) || (lastY !== null && lastY != y))) {
            var row = Math.floor( y / 32);
			var col = Math.floor( x / 32);
			renderer.clearCol(col);
			for (var i=0; i < 16; i++)
				renderer.drawCellRect('#FFEEEE', x, (i*renderer.tilesize));
			if (map[col] == row) {
				map[col] = 0;
			}
			else {
				map[col] = row;
				renderer.drawTile(sprite, x, y - renderer.tilesize, x, y - renderer.tilesize);
			}

			
			map.arrayContentDidChange();

        }

        lastX = x;
        lastY = y;
    })
	
	canvas.addEventListener('click', function(e) {
        var x = parseInt(e.layerX / renderer.tilesize) * renderer.tilesize;
        var y = parseInt(e.layerY / renderer.tilesize) * renderer.tilesize;

        //renderer.drawCellRect('red', x, y);
			var row = Math.floor( y / 32);
			var col = Math.floor( x / 32);
			renderer.clearCol(col);
			for (var i=0; i < 16; i++)
				renderer.drawCellRect('#FFEEEE', x, (i*renderer.tilesize));
			if (map[col] == row) {
				map[col] = 0;
			}
			else {
				map[col] = row;
				renderer.drawTile(sprite, x, y - renderer.tilesize, x, y - renderer.tilesize);
			}

			
			map.arrayContentDidChange();
        

    })

	
	
	
    var model = this.get('controller.music.currentSequence');
	var map = model.pitches;
	



    var sprite = new Image();
    var renderMap = function() { renderer.renderMap(map, sprite); }

    // Render the map when the sprite is ready and on resize
    sprite.onload = function() { renderMap(); }
    renderer.onresize = function() { renderMap(); }

    // Define the sprite source url
    sprite.src = '/assets/shop/images/quaver.png';
	
			})
	}
});




App.IndexRoute = Ember.Route.extend(EXPEDIT.ProtectedRouteMixin);
App.IndexController = Ember.Controller.extend({
	articleLink: function(){
		var userid = this.get('user.data.id').match(/^.*:(.*)/)[1];
		return 'https://dioptre.typeform.com/to/OWVf7t?siid=' + userid +'&name=' + this.get('user.data.firstName');

	}.property(),
	sellerLink: function() {
		var userid = this.get('user.data.id').match(/^.*:(.*)/)[1];
		return 'https://dioptre.typeform.com/to/tXyald?siid=' + userid +'&name=' + this.get('user.data.firstName');
	}.property()
});
App.IndexView = Ember.View.extend({
	didInsertElement: function(){
		this._super();




		Ember.run.scheduleOnce('afterRender', this, function () {
			console.log('running')

			// debugger;
			(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()
		})
	}
})

App.ApplicationRoute = Ember.Route.extend(EXPEDIT.ApplicationRouteMixin, {
	model: function (params){
		var model = {
			id: 'asdasdasd',
			instruments: 
			[
				{instrumentName: 'acoustic_grand_piano',
				 pitches : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14 ,15,15 ] //16notes, 16 beats //Hz			 
				},
				{instrumentName: 'synth_drum',
				 pitches : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14 ,15,15 ] //16notes, 16 beats //Hz
				 
				},
			]
		};
		var obs = {
			arrayWillChange : function(observedObj, start, removeCount, addCount) {
				console.log('changing');
			},
			arrayDidChange : function(observedObj, start, removeCount, addCount) {
				console.log('changed')
			}
		};
		Enumerable.From(model.instruments).Select(function(item) {
			item.addArrayObserver(obs);
		});
		model.currentSequence = model.instruments[0];
		App.Playback(model.currentSequence);
		return model; 
		
	}
	
})
App.ApplicationController = Ember.Controller.extend({
})
App.SignupController = Ember.Controller.extend(EXPEDIT.FormControllerMixin);
App.LoginController = Ember.Controller.extend(EXPEDIT.FormControllerMixin);

App.SubscribeRoute = Ember.Route.extend(EXPEDIT.ProtectedRouteMixin);
App.SubscribeView = Ember.View.extend({
	didInsertElement: function () {
		var _this = this;
		// this identifies your website in the createToken call below
		Stripe.setPublishableKey('pk_test_cpnlcyNexfp6AxtVfbG29WDk');

		var stripeResponseHandler = function (status, response) {
			if (response.error) {
				// re-enable the submit button
				$('.submit-button').removeAttr("disabled");
				// show the errors on the form
				$(".payment-errors").html(response.error.message);
			} else {

				var form$ = $("#payment-form");
				// token contains id, last4, and card type
				var token = response['id'];
				// insert the token into the form so it gets submitted to the server
				form$.append("<input type='hidden' name='stripeToken' value='" + token + "' />");
				form$.append("<input type='hidden' name='uid' value='" + _this.get('user.data.uid') + "' />");
				form$.append("<input type='hidden' name='sid' value='" + _this.get('user.data.sid') + "' />");
				form$.append("<input type='hidden' name='email' value='" + _this.get('user.data.email') + "' />");
				form$.append("<input type='hidden' name='mobile' value='" + _this.get('user.data.mobile') + "' />");
				form$.append("<input type='hidden' name='firstName' value='" + _this.get('user.data.firstName') + "' />");
				form$.append("<input type='hidden' name='coupon' value='" + $('#coupon').val() + "' />");
				if (getCookie('siid') !== '')
					form$.append("<input type='hidden' name='referrer' value='" + getCookie('siid') + "' />");
				// and submit
				_this.set('user.data.stoken', token);
				_this.get('user.data').save();
				//Have to put in delay as save to firebase was closing connection too early
				Ember.run.later(this, function () {
					form$.get(0).submit();
				}, 500)

			}
		}

		$(document).ready(function() {
			$("#payment-form").submit(function(event) {
				// disable the submit button to prevent repeated clicks
				$('.submit-button').attr("disabled", "disabled");
				// createToken returns immediately - the supplied callback submits the form if there are no errors
				Stripe.createToken({
					number: $('.card-number').val(),
					cvc: $('.card-cvc').val(),
					exp_month: $('.card-expiry-month').val(),
					exp_year: $('.card-expiry-year').val()
				}, stripeResponseHandler);
				return false; // submit from callback
			});
		});
	}
});

App.ArticleRoute = Ember.Route.extend(EXPEDIT.SubscriptionOnlyRouteMixin, {
	model: function(params) {
		//debugger;
		return Ember.RSVP.hash ({
			articles: this.store.findAll('article')
		});
	},
	afterModel: function(model) {
		if (model && model.articles && model.articles.content && model.articles.content.length && model.articles.content.length > 0)
			model.articles.content.reverse();
	}
});


App.SellerRoute = Ember.Route.extend(EXPEDIT.ProtectedRouteMixin, {
	model: function(params) {
		//debugger;
		if (!this.get('user.data.seller')) {
			var user = this.get('user.data');
			user.set('seller', true);
			user.save();
		}
	}
});

App.SellerController = Ember.ArrayController.extend({
	queryParams: ['siid'],
  	siid: null,
	sellerLink: function(){
		var userid = this.get('user.data.id').match(/^.*:(.*)/)[1];
		return 'http://streetissue.org/help/' + userid;
	}.property()
});

App.SellRoute = Ember.Route.extend(EXPEDIT.ProtectedRouteMixin);
App.SellController = Ember.ArrayController.extend({});
App.SellView = Ember.View.extend({
	didInsertElement: function () {
		var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        	return v.toString(16);
    	});
    	console.log(id)
    	this.set('controller.id', id);
		var div=document.createElement('div');
		div.setAttribute("class", "typeform-widget");
		div.setAttribute("data-url", "https://dioptre.typeform.com/to/tXyald?siid="+id+"&name="+this.get('controller.user.data.firstName'));
		div.setAttribute("data-text", "Best PHP IDE for 2014");
		div.setAttribute("style", "width:100%;height:600px;");




		var tid = setInterval( function () {
		    if ( document.readyState !== 'complete' ) return;
		    clearInterval( tid );

		var tfcon = document.getElementById('tf_container_sell');
		tfcon.appendChild(div);



		}, 100 );
	}
});

App.TransactedRoute = Ember.Route.extend(EXPEDIT.ProtectedRouteMixin);


App.TransactedController = Ember.ArrayController.extend({
  queryParams: ['sid', 'stoken','subscription'],
  sid: null,
  stoken: null,
  subscription: null
});

App.TransactedView = Ember.View.extend({
	didInsertElement: function () {
		var _this = this;
		var user = this.get('user.data');
		var sid = user.get('sid');
		var stoken = user.get('stoken');
		if (!sid)
			user.set('sid', this.get('controller.sid'));
		user.set('subscription', this.get('controller.subscription'));
		user.set('subscribed', moment(new Date()).toISOString());
		user.save();
		if (stoken !== this.get('controller.stoken'))
			alert('Please contact support regarding your transaction,\r\n the submitted quote is not identical to the invoice.');
		Ember.run.later(this, function () {
			_this.get('controller').transitionToRoute('article');
		}, 3000);




	}
});

App.DeclinedController = Ember.ArrayController.extend({
  queryParams: ['error'],
  error: null,
  humanError: function() {
  	var error = this.get('error');
  	if (error === 'duplicateTransaction')
  		return 'The transaction was stopped from duplicating. Did you double click the purchase button? If not please contact support.';
  	if (error === 'invalidPost')
  		return 'The transaction was stopped from processing as it was malformed. Please contact support.';
  	if (error === 'invalidCard')
  		return 'The transaction was already processed at a different time. Did you hit refresh? If not please contact support.';
  	if (error === 'invalidSubscription')
  		return 'The transaction could not be processed as the coupon and subscription did not match our records.';
  }.property()
});

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
    //firebase: new Firebase('https://slo2606sr0d.firebaseio-demo.com/')
});

App.SettingRoute = Ember.Route.extend(EXPEDIT.SubscriptionOnlyRouteMixin);

App.SettingController = Ember.ObjectController.extend({
	init : function() {
		var years = [{label: '', value: null}];
		for (var i = 1900; i < 2008; i ++)
		{
			years.push({label: i + '', value: i })
		}
		this.set('years', years);

		var days = [{label: '', value: null}];
		for (var i = 1; i < 32; i ++)
		{
			days.push({label: i + '', value: i })
		}
		this.set('monthDays', days);
	},
	genders: [
      { label: '', value: null },
	  { label: 'Male', value: 'm' },
	  { label: 'Female', value: 'f' }
	],
	days: [
	  { label: '', value: null },
	  { label: 'Monday', value: 'mon' },
	  { label: 'Tuesday', value: 'tue' },
	  { label: 'Wednesday', value: 'wed' },
	  { label: 'Thursday', value: 'thu' },
	  { label: 'Friday', value: 'fri' },
	  { label: 'Saturday', value: 'sat' },
	  { label: 'Sunday', value: 'sun' }
	],
	months: [
	  { label: '', value: null },
	  { label: 'January', value: 1 },
	  { label: 'Febuary', value: 2 },
	  { label: 'March', value: 3 },
	  { label: 'April', value: 4 },
	  { label: 'May', value: 5 },
	  { label: 'June', value: 6 },
	  { label: 'July', value: 7 },
	  { label: 'August', value: 8 },
	  { label: 'September', value: 9 },
	  { label: 'October', value: 10 },
	  { label: 'November', value: 11 },
	  { label: 'December', value: 12 }
	],
	musics: [
	  { label: '60s', value: '60s' },
	  { label: '70s', value: '70s' },
	  { label: '80s', value: '80s' },
	  { label: '90s', value: '90s' },
	  { label: 'Classical', value: 'cla' },
	  { label: 'Country', value: 'cnt' },
	  { label: 'Electro', value: 'elc' },
	  { label: 'Folk', value: 'flk' },
	  { label: 'Jazz', value: 'jaz' },
	  { label: 'Pop', value: 'pop' },
	  { label: 'Rap', value: 'rnb' },
	  { label: 'RnB', value: 'rnb' },
	  { label: 'Rock', value: 'rck' },
	  { label: 'Rockabilly', value: 'rby' },
	  { label: 'Roots', value: 'rts' },
	  { label: 'Dislike Music', value: 'dmu' }
	],
	alcohols: [
	  { label: 'Beer', value: 'ber' },
	  { label: 'Cocktails', value: 'cck' },
	  { label: 'Shots', value: 'sht' },
	  { label: 'Whiskey', value: 'whi' },
	  { label: 'Wine', value: 'win' },
	  { label: 'Digestifs', value: 'dig' },
	  { label: 'Dislike Alcohol', value: 'dal' }
	],
	adventures: [
	  { label: 'Water', value: 'wat' },
	  { label: 'Mountains', value: 'mnt' },
	  { label: 'Air', value: 'air' },
	  { label: 'City', value: 'cit' },
	  { label: 'Dislike Adventure', value: 'dad' }
	],
	physicals: [
	  { label: 'Upper Body', value: 'ubo' },
	  { label: 'Lower Body', value: 'lbo' },
	  { label: 'Dislike Physical Activities', value: 'dph' }
	],
	foods: [
	  { label: 'Ethnic', value: 'eth' },
	  { label: 'All you can eat', value: 'ace' },
	  { label: 'Gourmand', value: 'gou' },
	  { label: 'Dislike Food', value: 'dfo' }
	],
	times: [
	  { label: 'Morning', value: 'mor' },
	  { label: 'Midday', value: 'mid' },
	  { label: 'Afternoon', value: 'aft' },
	  { label: 'Evening', value: 'eve' }
	],
	dobValid: function () {
		return !moment(this.get('model.dob'), ["DD/MM/YYYY"], true).isValid()
	}.property('model.dob'),
	anniversaryValid: function () {
		return !moment(this.get('model.anniversary'), ["DD/MM/YYYY"], true).isValid()
	}.property('model.anniversary'),
	childrenValid: function () {
		return  !/^\d+$/.test(this.get('model.children'));
	}.property('model.children'),
	mobileValid: function () {
		return !/^\d+$/.test(this.get('model.mobile'));
	}.property('model.mobile'),
	actions: {
		savePreferences: function () {
			this.get('user.data').save();
			Messenger().post('Preferences Updated');
			// var _this = this;
			// var p = {};
			// $.each(this.get('content.constructor.attributes').keys.list, function (i,v) {
			// 		p[v] = {"value": _this.get('model.' + v), "override": true };
			// });
			// debugger;
			// UserApp.User.save({
			// 	"user_id": 'self',
			// 	"properties": p
			// }, function (error,result) {
			// 	//console.log(error, result);
			// });
		}
	}
});

App.User = DS.Model.extend({
	referrer: DS.attr('', {defaultValue: ''}),
	subscription: DS.attr('', {defaultValue: null}),
	seller: DS.attr('', {defaultValue: null}),
	subscribed: DS.attr('', {defaultValue: null}),
	firstName:  DS.attr('', {defaultValue: null}),
	lastName:  DS.attr('', {defaultValue: null}),
	uid: DS.attr('', {defaultValue: ''}),
	sid: DS.attr('', {defaultValue: ''}),
	stoken: DS.attr('', {defaultValue: null}),
	email: DS.attr('', {defaultValue: null}),
	partnersFirstName: DS.attr('', {defaultValue: null}),
	dob: DS.attr('', {defaultValue: null}),
	doby: DS.attr('', {defaultValue: null}),
	dobm: DS.attr('', {defaultValue: null}),
	dobd: DS.attr('', {defaultValue: null}),
	gender: DS.attr('', {defaultValue: null}),
	address: DS.attr('', {defaultValue: null}),
	addressStreet: DS.attr('', {defaultValue: null}),
	addressCity: DS.attr('', {defaultValue: null}),
	addressState: DS.attr('', {defaultValue: null}),
	addressPostcode: DS.attr('', {defaultValue: null}),
	addressCountry: DS.attr('', {defaultValue: null}),
	anniversaryy : DS.attr('', {defaultValue: null}),
	anniversarym : DS.attr('', {defaultValue: null}),
	anniversaryd : DS.attr('', {defaultValue: null}),
	mobile: DS.attr('', {defaultValue: null}),
	date_monday: DS.attr('', {defaultValue: null}),
	date_tuesday: DS.attr('', {defaultValue: null}),
	date_wednesday: DS.attr('', {defaultValue: null}),
	date_thursday: DS.attr('', {defaultValue: null}),
	date_friday: DS.attr('', {defaultValue: null}),
	date_saturday: DS.attr('', {defaultValue: null}),
	date_sunday: DS.attr('', {defaultValue: null}),
	date_time: DS.attr('', {defaultValue: null}),
	date_date: DS.attr('', {defaultValue: null}),
	date_days: DS.attr('', {defaultValue: null}),
	date_duration: DS.attr('', {defaultValue: null}),
	physical_water: DS.attr('', {defaultValue: null}),
	physical_outdoors: DS.attr('', {defaultValue: null}),
	physical_extreme: DS.attr('', {defaultValue: null}),
	physical_city: DS.attr('', {defaultValue: null}),
	physical_dislike: DS.attr('', {defaultValue: null}),
	alcohol_beer: DS.attr('', {defaultValue: null}),
	alcohol_wine: DS.attr('', {defaultValue: null}),
	alcohol_cocktails: DS.attr('', {defaultValue: null}),
	alcohol_spirits: DS.attr('', {defaultValue: null}),
	alcohol_whisky: DS.attr('', {defaultValue: null}),
	alcohol_dislike: DS.attr('', {defaultValue: null}),
	travel_distance: DS.attr('', {defaultValue: null}),
	anniversary: DS.attr('', {defaultValue: null}),
	children: DS.attr('', {defaultValue: null}),
	likes_music: DS.attr('', {defaultValue: null}),
	likes_food: DS.attr('', {defaultValue: null}),
	likes_food_asian: DS.attr('', {defaultValue: null}),
	likes_food_middle_eastern: DS.attr('', {defaultValue: null}),
	likes_food_european: DS.attr('', {defaultValue: null}),
	likes_adventure: DS.attr('', {defaultValue: null}),
	likes_physical: DS.attr('', {defaultValue: null}),
	likes_alcohol: DS.attr('', {defaultValue: null}),
	special_needs: DS.attr('', {defaultValue: null}),
	date_date_moment: function (key, value, previousValue) {
		 if (arguments.length > 1) {
		  this.set('date_date', value.format("DD/MM/YYYY"));
		}
		if (moment(this.get('date_date'), ["DD/MM/YYYY"], true).isValid())
			return moment(this.get('date_date'), ["DD/MM/YYYY"]);
		else
			return '';
	}.property('date_date')
});

App.Seller = App.User.extend({
	siid : DS.attr('', {defaultValue: ''}),
	areaLived : DS.attr('', {defaultValue: ''}),
	areaSold : DS.attr('', {defaultValue: ''}),
	story : DS.attr('', {defaultValue: ''}),
	inducted : DS.attr('', {defaultValue: ''}),
	inducted_moment: function (key, value, previousValue) {
		if (moment(this.get('inducted'), ["MM/YYYY"], true).isValid())
			return moment(this.get('inducted'), ["MM/YYYY"]);
		else
			return '';
	}.property('inducted')
});

App.Article = DS.Model.extend({
	siid : DS.attr('', {defaultValue: ''}),
	articleName : DS.attr('', {defaultValue: ''}),
	articleText : DS.attr('', {defaultValue: ''}),
	articlePhoto : DS.attr('', {defaultValue: ''}),
	contributed : DS.attr('', {defaultValue: ''}),
	contributed_moment: function (key, value, previousValue) {
		if (moment(this.get('contributed'), ["MM/YYYY"], true).isValid())
			return moment(this.get('contributed'), ["MM/YYYY"]);
		else
			return '';	
	}.property('contributed')
});




App.Feedback = DS.Model.extend({
	date_date: '',
	feedback: ''
});



App.Playback = function(instrument) {
	 
	MIDI.loadPlugin({
		soundfontUrl: "/assets/shop/js/libs/soundfont/",
		instrument: instrument.instrumentName,
		onprogress: function(state, progress) {
			console.log(state, progress);
		},
		onsuccess: function() {
            
			
            var comp = instrument.pitches;
            var _this = this;

			var play = function (i) {          
				if(comp[i]==0){           
				 var delay = 0; // play one note every quarter second
				 var note = 48; // the MIDI note
				 var velocity = 0; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);
				}else if(comp[i]==15){
				var delay = 0; // play one note every quarter second
				 var note = 48; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				}
				else if(comp[i]==14){
				var delay = 0; // play one note every quarter second
				 var note = 50; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==13){
				var delay = 0; // play one note every quarter second
				 var note = 52; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==12){
				var delay = 0; // play one note every quarter second
				 var note = 53; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==11){
				var delay = 0; // play one note every quarter second
				 var note = 55; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==10){
				var delay = 0; // play one note every quarter second
				 var note = 57; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==9){
				var delay = 0; // play one note every quarter second
				 var note = 59; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==8){
				var delay = 0; // play one note every quarter second
				 var note = 60; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				}else if(comp[i]==7){
				var delay = 0; // play one note every quarter second
				 var note = 62; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==6){
				var delay = 0; // play one note every quarter second
				 var note = 64; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==5){
				var delay = 0; // play one note every quarter second
				 var note = 65; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==4){
				var delay = 0; // play one note every quarter second
				 var note = 67; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==3){
				var delay = 0; // play one note every quarter second
				 var note = 69; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==2){
				var delay = 0; // play one note every quarter second
				 var note = 71; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} else if(comp[i]==1){
				var delay = 0; // play one note every quarter second
				 var note = 72; // the MIDI note
				 var velocity = 127; // how hard the note hits
				 // play the note
				 MIDI.setVolume(0, 127);
				 MIDI.noteOn(0, note, velocity, delay);
				 MIDI.noteOff(0, note, delay + 0.75);                 
				} 
				if (i < comp.length)
					setTimeout(play, 500, (i+1))
				else
					setTimeout(play, 500, 0)
			}
			play(0);
			            
            
		}
	});
}
