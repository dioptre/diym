<?php
	error_reporting(E_ALL);
	ini_set('display_errors', '1');	

	require_once("app_init.php");
	require_once("FirebaseToken.php");
	require_once('firebaseLib.php');


	$tokenGen = new Services_FirebaseTokenGenerator($GLOBALS['firebase.secret']);
	$token = $tokenGen->createToken(array("uid" => "simplelogin:0"), array("admin" => True));
	$firebase = new Firebase($GLOBALS['firebase.url'], $token);

	$siid = '';
	$articleName = '';
	$articleText = '';
	$articlePhoto = '';

	if(isset($_POST['siid'])){ $siid = $_POST['siid']; }
	if(isset($_POST['articleName'])){ $articleName = $_POST['articleName']; }
	if(isset($_POST['articleText'])){ $articleText = $_POST['articleText']; }
	if(isset($_POST['articlePhoto'])){ $articlePhoto = $_POST['articlePhoto']; }

	$data = array(
	    'id' => $siid,
	    'articleName' => $articleName,
	    'articleText' => $articleText,
	    'articlePhoto' => $articlePhoto,
	    'contributed' => gmdate("Y-m-d\TH:i:s\Z"),
	);

	$res = $firebase->push('/articles', $data);

	header("Status: 200");

?>
