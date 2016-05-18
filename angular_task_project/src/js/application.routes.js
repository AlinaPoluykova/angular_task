'use strict';

(function () {
	angular.module('application').config([
		'$routeProvider',
		function ($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'templates/index.template.html',
				controller: 'IndexController'
			}).when('/signin', {
				templateUrl: 'templates/signin.template.html',
				controller: 'SignInController'
			}).when('/count', {
				templateUrl: 'templates/count.template.html',
				controller: 'CountController'
			}).otherwise('/');
		}
	]);
})();
