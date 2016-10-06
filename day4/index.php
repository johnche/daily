<!DOCTYPE html>

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
					<input type="text" name="username" placeholder="Username">
				</div>
			</div>

			<div class="field">
				<div class="ui input">
					<input type="text" name="password" placeholder="Password">
				</div>
			</div>

			<input type="submit" value="red button" class="ui fluid small red button">

		</div>
	</form>

	<div class="ui message">
<?php
if ($_POST["username"] == null && $_POST["password"] == null){
	echo "press the red button";
}
$credentials = explode("\n", file_get_contents("credentials.txt"));
$username = $credentials[0];
$password = $credentials[1];

if ($_POST["username"] === $username && $_POST["password"] === $password){
	echo "Good job.";
} else if ($_POST["username"] != null || $_POST["password"] != null) { 
	echo "Wrong"; 
}
?>
</div>

</div>
</div>

