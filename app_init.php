<?php

	
	require_once('./lib/Stripe.php');

	$stripe = array(
	  "secret_key"      => "",
	  "publishable_key" => "",
	  "default_subscription" => "SI1"
	);
	
	$GLOBALS['stripe'] = $stripe;

	$GLOBALS['sendgrid.url'] = 'https://api.sendgrid.com/';
	$GLOBALS['sendgrid.user'] = 'dioptre';
	$GLOBALS['sendgrid.pass'] = '';
	$GLOBALS['sendgrid.sender'] = 'andrew@expedit.com.au';
	$GLOBALS['sendgrid.recipient'] = 'andrew@expedit.com.au';

	$GLOBALS['firebase.secret'] = "nDi5EuyMqhsGTCSzlF0rBECmV1Voyb9wXUsABadO";
	$GLOBALS['firebase.url'] = 'https://sizzling-inferno-8323.firebaseio.com';

	Stripe::setApiKey($stripe['secret_key']);
?>
	