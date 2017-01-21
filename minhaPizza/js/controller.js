angular.module("minhaPizza")
// $routeParams é um serviço que recolhe os params
// que vierem através da URL
.controller("NSController",['$scope', '$routeParams', 'FactoryNomes',
							function($scope, $routeParams, FactoryNomes){
	
	$scope.Pizza = {
		nome: $routeParams.nome,
		formato: "Redonda",
		local: "Entrega",
		endereco: "",
		ingredientes: [],
		total: 0
	};

	$scope.Ingrediente = {
		novo: "",
		inserir: function(){
			$scope.Pizza.ingredientes.push(this.novo);
			this.novo = "";
		},
		remover: function(i){
			$scope.Pizza.ingredientes.splice(i, 1);
		}
	};

	$scope.formatoPizza = function(){
		return 'pizza-formato ' + ($scope.Pizza.formato === "Redonda" ? "pizza-redonda" : "pizza-quadrada");
	};

	$scope.precoPizza = function(){
		var total = $scope.Pizza.ingredientes.length * 1.5;
		total += ($scope.Pizza.formato === 'Redonda' ? 2 : 5);
		total += ($scope.Pizza.local === 'Entrega' ? 5 : 0);
		return total;
	};

	$scope.nomeAleatorio = function(){
		$scope.Pizza.nome = FactoryNomes();
	};

}]);
