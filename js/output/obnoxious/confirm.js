define(function () {
	'use strict';
	function Confirm(message) {
		var me = this;
		
		me.message = message;
	}
	
	Confirm.prototype.display = function (callback) {
		var me = this;
		
		callback(window.confirm(me.message));
	};
	
	return Confirm;
});