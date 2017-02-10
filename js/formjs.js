function DisableErrorGlowOnFocus() {
	$("input:not([type=submit]):not([type=button]):not([type=radio]):not([type=checkbox]):not([type=file]).disableonfocus").on('focus', function() {
		$(this).removeClass("formjs-error");
		$(this).removeClass("disableonfocus");
	});
	$("textarea.disableonfocus").on('focus', function() {
		$(this).removeClass("formjs-error");
		$(this).removeClass("disableonfocus");
	});
}
function customizeCheckbox() {
	$('.checkbox-group > input:checkbox.formjs-checkbox-sm').each(function(){
	    $(this).next('span').addBack().wrapAll("<label class='fc-contain-sm checkbox-status'></label>");
	});
	$( ".formjs-checkbox-sm" ).after( "<div class='fc-status-sm'></div>" );
	$('.checkbox-group > input:checkbox.formjs-checkbox').each(function(){
	    $(this).next('span').addBack().wrapAll("<label class='fc-contain checkbox-status'></label>");
	});
	$( ".formjs-checkbox" ).after( "<div class='fc-status'></div>" );
	$('.checkbox-group > input:checkbox.formjs-checkbox-lg').each(function(){
	    $(this).next('span').addBack().wrapAll("<label class='fc-contain-lg checkbox-status'></label>");
	});
	$( ".formjs-checkbox-lg" ).after( "<div class='fc-status-lg'></div>" );
}
function customizeRadio() {
	$('.radio-group > input:radio.formjs-radio-sm').each(function(){
	    $(this).next('span').addBack().wrapAll("<label class='fr-contain-sm radio-status'></label>");
	});
	$( ".formjs-radio-sm" ).after( "<div class='fr-status-sm'></div>" );
	$('.radio-group > input:radio.formjs-radio').each(function(){
	    $(this).next('span').addBack().wrapAll("<label class='fr-contain radio-status'></label>");
	});
	$( ".formjs-radio" ).after( "<div class='fr-status'></div>" );
	$('.radio-group > input:radio.formjs-radio-lg').each(function(){
	    $(this).next('span').addBack().wrapAll("<label class='fr-contain-lg radio-status'></label>");
	});
	$( ".formjs-radio-lg" ).after( "<div class='fr-status-lg'></div>" );
}
function addArrowToSelect() {
	$( "select:not([multiple]).formjs-sm" ).after( "<div class='select-arrow-sm'></div>" );
	$('.select-group > select:not([multiple]).formjs-sm').each(function(){
	    $(this).next('.select-arrow-sm').addBack().wrapAll("<div class='formjs-select-sm'></div>");
	});
	$( "select:not([multiple]).formjs" ).after( "<div class='select-arrow'></div>" );
	$('.select-group > select:not([multiple]).formjs').each(function(){
	    $(this).next('.select-arrow').addBack().wrapAll("<div class='formjs-select'></div>");
	});
	$( "select:not([multiple]).formjs-lg" ).after( "<div class='select-arrow-lg'></div>" );
	$('.select-group > select:not([multiple]).formjs-lg').each(function(){
	    $(this).next('.select-arrow-lg').addBack().wrapAll("<div class='formjs-select-lg'></div>");
	});
}
function disableDisabledInputs() {
	$('.checkbox-group input:disabled.formjs-checkbox-sm').each(function() {
	    $(this).parent().addClass("disabled");
	});
	$('.checkbox-group input:disabled.formjs-checkbox').each(function() {
	    $(this).parent().addClass("disabled");
	});
	$('.checkbox-group input:disabled.formjs-checkbox-lg').each(function() {
	    $(this).parent().addClass("disabled");
	});
	$('.radio-group input:disabled.formjs-radio-sm').each(function() {
	    $(this).parent().addClass("disabled");
	});
	$('.radio-group input:disabled.formjs-radio').each(function() {
	    $(this).parent().addClass("disabled");
	});
	$('.radio-group input:disabled.formjs-radio-lg').each(function() {
	    $(this).parent().addClass("disabled");
	});
	$("input:not([type=submit]):not([type=button]):not([type=radio]):not([type=checkbox]):not([type=file]).disabled").attr("disabled", true);
	$("textarea.disabled").attr("disabled", true);
}
window.onbeforeunload = function disable() {
	var inputs = document.getElementsByTagName("INPUT");
		for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].type == "button" || inputs[i].type == "submit") {
			inputs[i].disabled = true;
		}
	}
}
function runFormJS() {
	DisableErrorGlowOnFocus();
	customizeCheckbox();
	customizeRadio();
	addArrowToSelect();
	disableDisabledInputs();
}

// run Form JS
runFormJS();