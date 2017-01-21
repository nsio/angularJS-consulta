angular.module("minhaPizza")
.config(["$routeProvider", function($routeProvider){
	
	$routeProvider
		.when('/:nome', {
			templateUrl: 'views/novoSabor.html',
			controller: 'NSController'
		})
		.when('/', {
			templateUrl: 'views/novoSabor.html',
			controller: 'NSController'
		})
		.when('/template',{
			templateUrl: 'views/testeRoute.html',
			controller: 'NSController'
		})
		.otherwise({
			redirectTo: '/'
		})
		
}]);
