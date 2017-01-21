angular.module("minhaPizza")
.config(["$routeProvider", function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'views/novoSabor.html',
			controller: 'NSController'
	});

}]);
