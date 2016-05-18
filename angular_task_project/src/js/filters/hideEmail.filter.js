'use strict';

angular.module('application').filter('hideEmail', function () {
	return function (email) {
		var newEmail;
		var name = email.split('@')[0].split('');
		name[0] = name[0].toUpperCase();
		var domainAll = email.split('@')[1];
		var domain = domainAll.split('.')[0];
		var extens = domainAll.split('.')[1];
		var hiddenDomain = domain.split('').map(function (l, i) {
			if (i > 0) {
				return l = '*';
			}
		});
		hiddenDomain[0] = domain[0];
		newEmail = name.join('') + '@' + hiddenDomain.join('') + '.' + extens;
		return newEmail;
	}
});