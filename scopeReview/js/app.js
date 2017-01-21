angular.module("myApp", [])

.controller("myController", ['$scope','$interval', function($scope, $interval){

	$scope.nome = "Angular Estudos";

	$scope.numero = 0;
	
	//$interval(function(){
	//	$scope.numero++;	
	//}, 1000);

	// Chamando a função diretamente no JavaScript
	// e forçando a atualização no objeto
	// $scope do Angular
	
	setInterval(function(){
		$scope.$apply(function(){
			$scope.numero++;
		});
	},1000);

}]);