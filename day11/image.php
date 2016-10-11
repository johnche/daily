<?php

function loadJpeg($imgname){
	error_log($imgname);
	$img = imagecreatefromjpeg($imgname);
	if (!$img){
		return imagecreatefromjpeg("images/default.jpg");
	} return $img;
}

$img = loadJpeg("images/" . basename($_GET['imgname']));
$x = 0.20 * imagesx($img);
$y = 0.20 * imagesy($img);
$newimg = imagecrop($img, ['x' => $x, 'y' => 0, 'width' => imagesx($img) - 2*$x, 'height' => imagesy($img) - $y]);
if ($newimg != false){
	header('Content-Type: image/jpeg');
	imagejpeg($newimg);
}
