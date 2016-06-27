'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$http', '$q', '$timeout',
	function($scope, Authentication, $http, $q, $timeout) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		var getData = function($timeout, $q) {
		return function() {
			// simulated async function
			return $q(function(resolve, reject) {
				$timeout(function() {
					$http.get('/search/').success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				resolve(response);
					}).error(function(response) {
				$scope.error = response.message;
				});
			}, 100);
			})}
		}

		// Show data
	}
]);
