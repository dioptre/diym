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
	$areaLived = '';
	$areaSold = '';
	$story = '';

	if(isset($_POST['siid'])){ $siid = $_POST['siid']; }
	if(isset($_POST['areaLived'])){ $areaLived = $_POST['areaLived']; }
	if(isset($_POST['areaSold'])){ $areaSold = $_POST['areaSold']; }
	if(isset($_POST['story'])){ $story = $_POST['story']; }

	$data = array(
	    'id' => $siid,
	    'areaLived' => $areaLived,
	    'areaSold' => $areaSold,
	    'story' => $story,
	   	'inducted' => gmdate("Y-m-d\TH:i:s\Z"),
	);

	$res = $firebase->push('/sellers', $data);

	header("Status: 200");

?>
