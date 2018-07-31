<?php
error_reporting(E_ALL);
require("./src/Db.php");
require("./src/TlgNotific.php");
require("./src/Offer.php");



$em = isset($_POST['email']) ? $_POST['email']: null;
$comment = isset($_POST['comment']) ? $_POST['comment']: null;
$filename = isset($_POST['filename']) ? $_POST['filename']: null;
if(($em===null)||($filename===null)){
	echo json_encode([
		'status'=>false,
		'line'=> __LINE__,
		'body'=>[
			'error_key'=>'data is not valid'
		]
	]);
	die();
}
$con=Db::getInstance();
$db=new Offer($con);
$db->addOffer($em, $comment, $filename);
echo json_encode([
			"status" => true,
    		"msg" => "Offer is sent"
]);
die();





