angular.module("minhaPizza")
.controller("NSController",['$scope', function($scope){
	
	$scope.Pizza = {
		nome: "",
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

}]);