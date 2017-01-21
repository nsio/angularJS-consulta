angular.module("myApp", [])

.controller("myController", ['$scope', '$q', '$timeout', function($scope, $q, $timeout){
	// O conceito de promisse é que vamos
	// esperar o resultado de algo que será executado no
	// futuro, por exemplo a requisição
	// há um serviço em um servidor web que demore
	// algum tempo para ser executado

	function myPromise(){
		var deferred = $q.defer();
		alert('1 - Promise Criada');
		// Essa função será executada dois segundos
		// após que minha promise foi iniciada;
		$timeout(function(){
			alert('3 - Promise Resolvida');
			deferred.resolve();
		}, 2000);

		alert('2 - Promise Retornada');
		return deferred.promise;
	}

	myPromise().then(function(){
		alert('4 - Promisse Finalizada');
	});

}]);