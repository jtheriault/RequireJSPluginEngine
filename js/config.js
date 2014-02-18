define(function () {
    'use strict';
    
	function getOutputMode () {
        var outputModes = 
		[
			'obnoxious',
			'polite'
		],
		currentOutputMode = 0,
		requestedOutputMode;
		
        // Dynamically set mode from query string
        requestedOutputMode = parseInt(
            (window.location.search.match(/[?&]mode=(\d+)/) || [])
            [1]);

        if(requestedOutputMode > 0 && requestedOutputMode < outputModes.length) {
            currentOutputMode = requestedOutputMode;
        }

        return outputModes[currentOutputMode];
	}
    
    var exports = {};
	
    exports.outputMode = getOutputMode();
    
    return exports;
});