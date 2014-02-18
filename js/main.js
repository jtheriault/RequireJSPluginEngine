/*globals requirejs*/
(function (require) {
	'use strict';
	require(['paths'], function (paths) {
        require.config({
            paths: paths
        });

        // Launch our app
        require(['app'], function (DemoApp) {
            var demo = new DemoApp();

            demo.run();
        });
	});
})(require);