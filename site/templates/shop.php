<?php snippet('header') ?>

			<div class="blog-slider" style="display:none;"></div>
			
  <script type="text/x-handlebars">
    <!-- ******HEADER****** -->
    <header id="header" class="header">
        <div class="container">
            <h1 class="logo">
                <a href="/"><span class="text"><img src="/assets/Logo.png"></span></a>
            </h1><!--//logo-->

            <nav class="main-nav navbar-right" role="navigation">
                <div class="navbar-header">
                    <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button><!--//nav-toggle-->
                </div><!--//navbar-header-->
                <div id="navbar-collapse" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                      <?php foreach($pages->visible() as $p): ?>
                        <?php if($p->hasVisibleChildren()): ?>
                          <?php if(false): ?>
                            <li class="dropdown">
                              <a class="dropdown-toggle <?php e($p->isOpen(), ' active') ?>" href="<?php echo $p->url() ?>" data-toggle="dropdown">
                                <?php echo html($p->title()) ?>
                                <b class="caret"></b>
                              </a>

                              <ul class="dropdown-menu">
                                <?php foreach($p->children()->visible() as $p): ?>
                                  <?php if (!in_array($p->template(), array('title','section','divider'))): ?>
                                    <li>
                                      <a href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
                                    </li>
                                  <?php endif ?>
                                <?php endforeach ?>
                              </ul>
                            </li>
                          <?php else: ?>
                            <li class="nav-item <?php e($p->isOpen(), ' active') ?>">
                              <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
                            </li>
                          <?php endif ?>
                        <?php else: ?>
                          <li class="nav-item <?php e($p->isOpen(), ' active') ?>">
                            <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
                          </li>
                        <?php endif ?>

                      <?php endforeach ?>

                      {{#unless user.data.authenticated}}
                        <li class="nav-item">{{#link-to 'login'}}Log In{{/link-to}}</li>
                        <li class="nav-item">{{#link-to 'signup'}}Sign Up{{/link-to}}</li>
                      {{else}}
                        <li class="nav-item nav-item-cta last"><a href="#">Log Out</a></li>
                      {{/unless}}
                    </ul>


                      <!--
                        <li class="nav-item"><a href="http://lvrs.uservoice.com/knowledgebase" target="_blank">FAQ</a></li>
                        <li class="nav-item"><a href="<?php echo html($site->loginurl()) ?>">Log in</a></li>
                        <li class="nav-item nav-item-cta last"><a class="btn btn-cta btn-cta-secondary" href="<?php echo html($site->signupurl()) ?>">Sign Up</a></li>
                        -->
                    <!--//nav-->
                </div><!--//navabr-collapse-->
            </nav><!--//main-nav-->
        </div><!--//container-->
    </header><!--//header-->

    <div class="wrap">
       {{liquid-outlet}}
    </div>

  </script>

  <script type="text/x-handlebars" data-template-name="components/header-tabs">
  	   {{#if user}}
        <ul class="nav nav-tabs text-center">
          {{#if user.data.subscription}}
            {{#link-to 'index' tagName='li'}}
              <a>
                <i class="fa fa-dashboard"></i><br>
                Dashboard
              </a>
            {{/link-to}}
          {{/if}}

          {{#link-to 'subscribe' tagName='li'}}
            <a>
              <i class="fa fa-money"></i><br>
              Manage subscription
            </a>
          {{/link-to}}


          {{#if user.data.subscription}}
            {{#link-to 'article' tagName='li' classNames="last"}}
              <a>
                <i class="fa fa-book"></i><br>
                Articles
              </a>
            {{/link-to}}
          {{/if}}

        </ul>
      {{/if}}
  </script>

  <script type="text/x-handlebars" data-template-name="loading">
    Loading...
  </script>

   <script type="text/x-handlebars" data-template-name="sequencer">
		<div role="main">
            <canvas id="entities" style="display:block;text-align:center;padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;">Your browser does not support canvas</canvas>
        </div>
   </script>
  
  <script type="text/x-handlebars" data-template-name="index">
  	  {{header-tabs user=user.data}}
      <h1>Dashboard</h1>
      <h2>Hi {{user.data.firstName}}, welcome to StreetIssue!</h2>





      <div class="row">
        <div class="col-md-4">


        <h3><i class="fa fa-rss"></i>&nbsp;Subscriber</h3>
        <p>Membership status: {{#if user.data.subscription}}
        	<span class="green"><b>ACTIVE</b></span>
        	{{#if user.data.date_date.value}}<p>Next Date: <b>{{user.data.date_date.value}}</b></p>{{/if}}
        	{{else}}<span class="pink"><b>Inactive</b></span>
                <br>

            	 {{#link-to 'subscribe' class="typeform-share button"}}
                  Subscribe
                {{/link-to}}

                &nbsp;
                &nbsp;
                &nbsp;
                <br>
                <br>
                <br>
                {{#link-to 'subscribe' class="typeform-share button" style='margin-left: 10px;'}}
                  Update Payment Details
                {{/link-to}}

        	{{/if}}</p>

        </div>
        <div class="col-md-4">

          <h3><i class="fa fa-pencil"></i>&nbsp;Writer</h3>
          <a class="typeform-share button" data-mode="1" {{bind-attr href=articleLink}}>
            Submit an article
          </a>
        </div>

        <div class="col-md-4">


      <h3>
      <i class="fa fa-money"></i>
        &nbsp;Seller</h3>{{#unless user.data.seller}}
      <a class="typeform-share button" data-mode="1" {{bind-attr href=sellerLink}}>
        Become a seller
      </a>
      {{else}}
      {{#link-to 'seller' class='typeform-share button'}}See my seller details{{/link-to}}
      {{/unless}}



        </div>



	</div>






  </script>

  <script type="text/x-handlebars" data-template-name="signup">
    {{#unless user.data.authenticated}}
    <div class="userapp">
      <form class="form" {{action 'signup' on='submit'}}>
        <h2 class="form-heading">Please Sign Up</h2>
        <div class="form-fields">
          {{input id='name' placeholder='Name' class='form-control' value=fullName}}
          {{input id='email' placeholder='Email' class='form-control' value=email}}
          {{input id='password' placeholder='Password' class='form-control' type='password' value=password}}
          <br/>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          {{#if loading}}
            <img src="https://app.userapp.io/img/ajax-loader-transparent.gif">
          {{else}}
            Sign Up
          {{/if}}
        </button>
        {{#if error}}
          <div class="alert alert-danger">{{error.message}}</div>
        {{/if}}
      </form>
    </div>
    {{else}}
      Succcessfully logged in.
    {{/unless}}
  </script>

  <script type="text/x-handlebars" data-template-name="login">
    <div class="userapp">
      <form class="form" {{action login on='submit'}}>
        <h2 class="form-heading">Please Log In</h2>
        <div class="form-fields">
          {{input id='email' placeholder='Email' class='form-control' value=email error=emailValid}}
          {{input id='password' placeholder='Password' class='form-control' type='password' value=password}}
          {{#unless cv}}<p>Bad username/password</p>{{/unless}}
        </div>
        <br/>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          {{#if loading}}
            <img src="https://app.userapp.io/img/ajax-loader-transparent.gif">
          {{else}}
            Log In
          {{/if}}
        </button>
        {{#if error}}
          <div class="alert alert-danger">{{error.message}}</div>
        {{/if}}
      </form>
    </div>
  </script>

  <script type="text/x-handlebars" data-template-name="article">
  {{header-tabs user=user.data}}
    <div class="row">
      {{#each model.articles}}
      <div class="col-lg-12">
        <h2>{{articleName}} {{contributed_moment}}</h2>
        <p> <img {{bind-attr src=articlePhoto}}></p>
        <p>{{articleText}}</p>
      </div>
      {{/each}}
    </div>
  </script>

  <script type="text/x-handlebars" data-template-name="subscribe">
   {{header-tabs user=user.data}}
    <h1>Payment Details</h1>
   
  </script>

  <script type="text/x-handlebars" data-template-name="sell">
    <div id="tf_container_sell">&nbsp;</div>
  </script>

    <script type="text/x-handlebars" data-template-name="seller">
    {{header-tabs user=user.data}}
    <br>
    <p>Hi {{user.data.firstName}}</p>
    <p>Thanks for your courage to get out there!</p>
    <p>Please share this link with anyone you sell the StreetIssue magazine to!</p>
    <h2><a class="typeform-share button" data-mode="1" {{bind-attr href=sellerLink}}>
            {{sellerLink}}
          </a></h2>
    <p>That link is your ticket to a regular income. Also remember that you are selling something of value, so have pride in sharing this with people. If you would like a waterproof physical copy of the link to show people in person, please <a href="mailto:hi@streetissue.org">contact our support team</a>. </p>

  </script>
    <script type="text/x-handlebars" data-template-name="thanks">
    thanks
  </script>

   <script type="text/x-handlebars" data-template-name="setting">
    {{header-tabs user=user.data}}
   
   </script>

   <script type="text/x-handlebars" data-template-name="feedback">
   		{{header-tabs user=user.data}}
		<h1>Feedback</h1>
   </script>

   <script type="text/x-handlebars" data-template-name="paymentMethod">
		{{header-tabs user=user.data}}
		<h1>Payment Method</h1>
   </script>

   <script type="text/x-handlebars" data-template-name="invoice">
		<h1>Invoices</h1>
   </script>


   <script type="text/x-handlebars" data-template-name="transacted">
		<h1>Succcessful Transaction</h1>
		<p>{{#link-to 'article'}}Now take a look at our wonderful articles...{{/link-to}}</p>
    <p>Redirecting in 5 seconds...</p>
   </script>

   <script type="text/x-handlebars" data-template-name="declined">
		{{header-tabs user=user.data}}
		<h1>Declined Transaction</h1>
    <h2>Error returned from the server:</h2>
    <p>{{humanError}} Additionally please check your credit card details and/or your coupon code.</p>
		<p>{{#link-to 'subscribe'}}Please try again later...{{/link-to}}</p>
		<p>Or <a href="mailto:support@lvrs.co">contact our support team</a> if you believe there is something has gone wrong.</p>
   </script>

  <script src="/assets/plugins/flexslider/jquery.flexslider-min.js"></script>
  <script src="/assets/shop/js/libs/jquery.js"></script>
  <script src="/assets/shop/js/libs/handlebars.js"></script>
  <script src="/assets/shop/js/libs/ember-template-compiler.js"></script>
  <script src="/assets/shop/js/libs/ember.debug.js"></script>
  <script src="/assets/shop/js/libs/ember-data.min.js"></script>
  <script src="/assets/shop/js/libs/firebase.js"></script>
  <script src="/assets/shop/js/libs/emberfire.min.js"></script>
  <script type="text/javascript" src="https://js.stripe.com/v1/"></script>

<!--   <script src="/assets/shop/js/libs/loader.js"></script>
  <script src="/assets/shop/js/libs/ember-resolver.min.js"></script>
 -->
  <script src="/assets/shop/js/libs/list-view.js"></script>
  <script src="/assets/shop/js/libs/moment.js"></script>
  <script src="/assets/shop/js/libs/twix.min.js"></script>
  <script src="/assets/shop/js/libs/velocity.min.js"></script>
  <script src="/assets/shop/js/libs/velocity.ui.min.js"></script>
  <!-- handlebars 2 killed ember-ui essential for firebase :( <script src="/assets/shop/js/libs/emberui.js"></script>-->

  <link rel="stylesheet" type="text/css" href="/assets/shop/css/messenger.css"/>
  <link rel="stylesheet" type="text/css" href="/assets/shop/css/messenger-theme-future.css"/>
  <link rel="stylesheet" type="text/css" href="/assets/shop/css/liquid-fire-0.18.0.css"/>
  <script src="/assets/shop/js/libs/messenger.min.js"></script>
  <script src="/assets/shop/js/libs/messenger-theme-future.js"></script>
  <script src="/assets/shop/js/libs/giftwrapped-addons.js"></script>
  
  <script src="/assets/shop/js/app.js?v=2"></script>

</body>
</html>
