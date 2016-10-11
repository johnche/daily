<!DOCTYPE html>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css">


<?php
$members = json_decode(file_get_contents("members.json"), true);

foreach ($members as $member){
	echo $member["Fornavn"];
}

?>

