define(
[
	'jquery'
], 
function ($) {
	'use strict';
	function Prompt(message) {
		var me = this;
		
		me.message = message;
	}
	
	Prompt.prototype.display = function (callback) {
		var me = this;
		
		$('body').append('<h2>"Polite" Form</h2>');
		$('body').append(me.message);
		$('body').append('<input type="text" id="input" />');
		$('<button>Confirm</button>')
			.click(function () {
				callback($('#input').val());
			})
			.appendTo('body');
	};
	
	return Prompt;
});