'use strict';

angular.module('application').controller('CountController', [
	'$scope',
	'$timeout',
	'$rootScope',
	function ($scope, $timeout, $rootScope) {

		// User login
		var user = JSON.parse(window.localStorage.getItem('user'));
		$scope.login = user.login;

		$scope.numbers = {};

		$scope.operations = ['Data input', 'Data confirmation', 'Counting...', 'Result'];
		$scope.activeStep = 1;

		$scope.$watch('activeStep', function (newValue) {
			$rootScope.setTitle($scope.operations[newValue - 1]);
		});

		$scope.next = function () {
			$scope.activeStep++;
			if ($scope.activeStep === 3) {
				$timeout(function () {
					$scope.activeStep++;
				}, 4500);
			}
		};

		$scope.back = function () {
			clear();
			$scope.activeStep = 1;
		};

		function clear() {
			$scope.numbers = {};
		}
	}
]);