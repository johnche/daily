<!DOCTYPE html>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css">
<link rel="stylesheet" href="style.php" media="screen">
<meta http-equiv="refresh" content="1">

<style>
	@font-face {
		font-family: archivo
		src: url(extra.tff);
	}
	p1 {
		font-family:arial;
	}
</style>

<title>real content below</title>
<div class="ui raised very padded text container segment">
	<h2 class="ui header">Date and time</h2>

<div class="ui grid">
<div class="six wide column">
<?php include 'dato.php';
echo '<br><br>';
echo '<p id="p1"><span style="font-size:3em;">T</span><span style="font-size:2em;">HE</span></font></p>';
echo '<p id="p1"><span style="font-size:4em;">&nbsp&nbsp&nbsp&nbspTIME</span></p>';
echo '<p id="p1"><span style="font-size:3.5em;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspIS </span> ' .
	'</p>';
?>
</div>
<div class="ten wide column">
<br><br><br><br><br>
<?php echo '<p><span style="font-size:6em; color:#0E6EB8;">' . $tid . '</span></p>'; ?>
</div>
</div>

<?php include 'dato.php';
echo '<p align="right"> And the date is: ' . $dato . '</p>';
?>

</div>
<br>
<p style="margin-left:2em;">dette skjer hvis man bruker for mye tid på ubrukelige ting</p>

