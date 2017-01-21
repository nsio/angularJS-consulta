angular.module("myApp1", ['myApp2'])

.controller("myController1", ['$scope', 'myFactory', 
	function($scope, myFactory){

	$scope.ehPar = myFactory(5);

}])