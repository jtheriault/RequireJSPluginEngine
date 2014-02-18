define(
[
	'output/prompt',
	'output/confirm',
	'output/message'
],
function (Prompt, Confirm, Message) {
	'use strict';
	function EchoDemoApp () {
		var me = this;
	}
	
	EchoDemoApp.prototype.prompt = function () {
		var me = this,
			promptMessage = new Prompt('What do you want to say?');
			
		promptMessage.display(function (response) {
			var input = response || 'nothing',
				confirmation = new Confirm('Are you sure you want to say "' + input + '"?');
			
			confirmation.display(function (confirmed) {
				var output;
				
				if(confirmed) {
					output = new Message(input);
					output.display();
				} else {
					me.prompt();
				}
			});
		});
	};

	EchoDemoApp.prototype.run = function () {
		var me = this;
		
		me.prompt();
	}
	
	return EchoDemoApp;
});		