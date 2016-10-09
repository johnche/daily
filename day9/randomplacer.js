$('#button').mouseover(function(){
	console.log("mouseover");
	var docHeight = $(document).height(),
		docWidth = $(document).width(),
		$button = $('#button'),
		height = $button.height(),
		width = $button.width(),
		maxHeight = docHeight - height,
		maxWidth = docWidth - width;

$button.css({
	left: Math.floor( Math.random() * maxWidth ),
	top: Math.floor( Math.random() * maxHeight ),
});

