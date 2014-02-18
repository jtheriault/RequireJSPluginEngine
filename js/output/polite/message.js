define(
[
	'jquery'
], 
function ($) {
	'use strict';
	function Message(message) {
		var me = this;
		
		me.message = message;
	}
	
	Message.prototype.display = function () {
		var me = this;
		
		$('#message').remove();
		$('body').append('<p id="message">' + me.message + '</p>');
	};
	
	return Message;
});