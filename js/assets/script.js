$(document).ready(function() {

	$(function () {
		$('[data-toggle="tooltip"]').tooltip({placement: 'left'});
		$('.sup-text').tooltip({placement: 'top'});
	})

	var clipboard = new Clipboard('.btn-clipboard');

	clipboard.on('success', function(e) {
		e.clearSelection();
		$(e.trigger).tooltip('hide').attr('data-original-title', 'Copied!').tooltip('show');
		setTimeout(function() {
			$(e.trigger).tooltip('hide').attr('data-original-title', 'Copy to clipboard!');
		}, 2000);
	});

	clipboard.on('error', function(e) {
		$(e.trigger).tooltip('hide').attr('data-original-title', 'Error!').tooltip('show');
		setTimeout(function() {
			$(e.trigger).tooltip('hide').attr('data-original-title', 'Copy to clipboard!');
		}, 2000);
	});

});