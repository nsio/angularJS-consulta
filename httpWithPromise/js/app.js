angular.module("myApp", [])

.controller("myController", ['$scope', '$http', function($scope, $http){

	$scope.name = '';
	$scope.sprite = '';

	$http.get('http://pokeapi.co/api/v2/pokemon/1')
		.then(function(response){
			$scope.name = response.data.name;
			$scope.sprite = response.data.sprites.front_default;
		});

}]);