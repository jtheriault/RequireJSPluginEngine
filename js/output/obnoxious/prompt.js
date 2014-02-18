define(function () {
	'use strict';
	function Prompt(message) {
		var me = this;
		
		me.message = message;
	}
	
	Prompt.prototype.display = function (callback) {
		var me = this;
		
		callback(window.prompt(me.message));
	};
	
	return Prompt;
});