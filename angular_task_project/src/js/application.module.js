'use strict';

angular.module('application', [
	'ngRoute',
	'ngAnimate'
]);

angular.module('application').run([
	'$rootScope',
	'$location',
	function ($rootScope, $location) {
		$rootScope.$on('$routeChangeStart', function (event, next) {
			if (next.originalPath === '/count' && !localStorage.getItem('user')) {
				event.preventDefault();
				$location.path('/signin');
			}
		});
	}
]);