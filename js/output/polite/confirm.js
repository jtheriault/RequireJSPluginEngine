define(function () {
	'use strict';
	function Confirm() {
		var me = this;
	}
	
	Confirm.prototype.display = function (callback) {
		var me = this;
		
		// By its nature, the prompt has already been confirmed
		callback(true);
	};
	
	return Confirm;
});