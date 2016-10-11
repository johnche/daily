<!DOCTYPE html>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css">

<br>

<?php

$groups = explode("\n", file_get_contents("prosjektgrupper.txt"));
$members = json_decode(file_get_contents("../day10/members.json"), true);

echo '<div class="ui middle center aligned grid stackable equal width">';
foreach ($groups as $group){
	echo '<div class="row"><h1>' . $group . '</h1></div>';
	echo '<div class="row">';
	foreach ($members as $member){
		if ($member["Prosjektgruppe"] == $group){
			echo '<div class="column">
				<img src="image.php?imgname=' . strtolower(trim($member["Fornavn"], " ") . '.' . trim($member["Etternavn"], " ")) . '.jpg"><br>
				<p>' . $member["Fornavn"] . '</p>
				<p>' . $member["Etternavn"] . '</p> </div>';
		}
	}
	echo '</div>';
}
echo '</div>';


?>

