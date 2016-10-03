<!DOCTYPE html>

<title>tis title</title>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css">

<div class="ui very padded text container segment">
	<p align="center">
<?php
$filename = 'counter.txt';
$counter = file_get_contents($filename) * 1;
$counter += 1;
echo 'Visitor no. ' . $counter;
file_put_contents($filename, $counter);
?>
	</p>
</div>
