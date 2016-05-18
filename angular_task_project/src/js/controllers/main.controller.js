'use strict';

angular.module('application').controller('MainCtrl', [
	'$scope',
	'$rootScope',
	function ($scope, $rootScope) {
		$rootScope.title = '';
		$rootScope.setTitle = function(value) {
			$rootScope.title = value;
		};
	}
]);