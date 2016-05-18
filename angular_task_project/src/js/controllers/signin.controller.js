'use strict';

angular.module('application').controller('SignInController', [
	'$scope',
	'$location',
	function ($scope, $location) {
		$scope.signIn = function(){
			var user = {
				login: $scope.login,
				password: $scope.password
			};
			localStorage.setItem('user', JSON.stringify(user));
			$location.url('count');
		};
	}
]);