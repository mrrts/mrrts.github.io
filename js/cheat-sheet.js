// Requires jQuery
// Behaviors for DBC cheat sheet (/projects/cheat-sheet.html)

$(document).ready(function () {

	$('a.more').click(function (event) {
		event.preventDefault();
		$(this).parent('p').siblings('.content').toggle();
		var newText = ($(this).text() === 'More') ? ('Less') : ('More');
		$(this).text(newText);
	});

});

