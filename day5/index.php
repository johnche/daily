<link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css">
<script
 src="https://code.jquery.com/jquery-3.1.1.min.js"
 integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
 crossorigin="anonymous">
</script>


<script type="text/javascript">
function showTime(){
	$(document).ready(function() {
		$.ajax({
			type: 'POST',
			url:"time.php",
			timeout: 1000,
			success: function(phptime) {
				$("#showtime").html(phptime);
				window.setTimeout(showTime, 1000);
			}
		});
	});
}

window.onload = showTime;
</script>

<div class="ui middle aligned very padded text container segment">
        <h2 class="ui header">Date and time</h2>

<div class="ui grid">
<div class="six wide column">

<br><br>
<p id="p1"><span style="font-size:3em;">T</span><span style="font-size:2em;">HE</span></font></p>
<p id="p1"><span style="font-size:4em;">&nbsp&nbsp&nbsp&nbspTIME</span></p>
<p id="p1"><span style="font-size:3.5em;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspIS </span> </p>

</div>
<div class="ten wide column">
<br><br><br><br><br>
<p><span id='showtime' style="font-size:6em; color:#0E6EB8;"></span></p>
</div>
</div>
</div>
