<!DOCTYPE html>
<script
	src="https://code.jquery.com/jquery-3.1.1.min.js"
	integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
	crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css">
<style type="text/css">
body > .grid{
		height:100%;
}
.column{
		max-width:450px;
}
</style>



<div class="ui middle aligned center aligned grid">

<div class="column">

		<form class="ui small form" method="post">
				<div class="ui stacked segment">

						<div class="field">
								<div class="ui input">
										<input type="text" name="fornavn" placeholder="Fornavn">
								</div>
						</div>

						<div class="field">
								<div class="ui input">
										<input type="text" name="etternavn" placeholder="Etternavn">
								</div>
						</div>

						<div class="field">
								<div class="ui input">
										<select class="ui dropdown" name="gruppe">
											<option value="null"></option>
											<option>Norwegian Game Awards</option>
											<option>StartIT</option>
											<option>Innovator</option>
										</select>
								</div>
						</div>

						<input type="submit" value="red button" class="ui fluid small red button">

				</div>
		</form>

		<div class="ui message">

<?php

if ($_POST["fornavn"] != null && $_POST["etternavn"] != null && $_POST["gruppe"] != "null"){
	#echo $_POST["fornavn"] . " | " . $_POST["etternavn"] . " | " . $_POST["gruppe"];
	$members = json_decode(file_get_contents("members.json"), true);
	if (!$members) $members = [];
	#var_dump($members);
	$newmember = array(
		'Fornavn' => $_POST["fornavn"],
		'Etternavn' => $_POST["etternavn"],
		'Prosjektgruppe' => $_POST["gruppe"]);
	array_push($members, $newmember);
	file_put_contents('members.json', json_encode($members));

} else { echo "try again"; }

?>

		</div>

</div>
</div>

