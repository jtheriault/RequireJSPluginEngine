define([
    'config'
], 
function (config) {
    'use strict';
    
    return {
                'jquery': '//code.jquery.com/jquery-1.10.2.min',
                'output': 'output/' + config.outputMode
            };
});