angular.module("myApp", [])

.value('providerName', 'My Provider Value')

.controller("myController", ['$scope', 'myService', 'myFactory', 'myProvider',
	function($scope, myService, myFactory, myProvider){

		$scope.name1 = myService.name;
		$scope.name2 = myFactory.name;
		$scope.name3 = myProvider.name;

}])

// TODOS ESSES SERVIÇOS SÃO SINGLETONS NO SISTEMA
// PODEMOS ACESSAR DE QUALQUER CONTROLLER

// Isso é como a instancia de um Objeto
.service("myService", function(){
	this.name = 'My Service';
})

.factory('myFactory', function(){
	return{
		name : 'My Factory'
	}
})

.provider('myProvider', function(){
	this.$get = function(providerName){
		this.name = providerName;
		return this;
	}
})