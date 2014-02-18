define(function () {
	'use strict';
	function Message(message) {
		var me = this;
		
		me.message = message;
	}
	
	Message.prototype.display = function () {
		var me = this;
		
		window.alert(me.message);
	};
	
	return Message;
});