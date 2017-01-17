angular.module("listaTelefonica").controller("LTController", function($scope, $http){
	$scope.app = "Lista Telefonica";
	$scope.classe = "selecionado, negrito";

	$scope.contatos = [];
	$scope.operadoras = [];
	// EXEMPLO DE CHAMDA AO BACKEND
	var carregarContatos = function (){
		$http.get("http://localhost:8080/contatos").then(function(response){
			//var data = response.data;
		    //var status = response.status;
		    //var statusText = response.statusText;
		    //var headers = response.headers;
		    //var config = response.config;
			$scope.contatos = response.data;
		}).catch(function(response){
			$scope.message = "Houve um erro carregar a lista de contatos" + response.data;
		});
	};

	var carregarOperadoras = function (){
		$http.get("http://localhost:8080/operadoras").then(function(response){
			$scope.operadoras = response.data;
		});
	};

	/*
	$scope.contatos = [
		{nome:"Pedro", telefone: "999999999", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "yellow"},
		{nome:"Ana", telefone: "999999988", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, cor: "blue"},
		{nome:"Maria", telefone: "999999977", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}, cor: "red"}
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
		{nome: "Tim", codigo: 41, categoria: "Celular", preco: 1},
		{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 3},
		{nome: "GVT", codigo: 15, categoria: "Fixo", preco: 2},
		{nome: "Embratel", codigo: 15, categoria: "Fixo", preco: 1}
	];
	*/

	$scope.addContato = function(contato){

		// *************************************************************************
		// *************************************************************************
					//$http.post("http://localhost:8080/addContato", contato);
		// *************************************************************************
		// *************************************************************************

		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		// Reseta as mensagens de validação na tela.
		$scope.contatoForm.$setPristine();

		// EM NÍVEL DE PERFORMANCE, NÃO É INTERESSANTE FAZER ESSE RELOAD, DEPENDE DO CENÁRIO
		// O IDEIAL É RECUPERAR A ENTIDADE RETORNADA ATRAVÉS DO CREATE, RETORNANDO UM STATUS 201 DO SERVER,
		// PEGAR ESSA ENTIDADE E FAZER ANGULAR.COPY;
		// DENOVO, DEPENDE DO CENÁRIO, AS VEZES RECARREGAR A LISTA É OK;
		carregarContatos();


	};
	$scope.apagarContatos = function (contatos){
		// Esse bloco é um exemplo da função FILTER que o javascript disponibiliza
		// podemos passar uma função para filter e extrais apenas os contatos que estão selecionados
		var contatosSelecionados = contatos.filter(function(contato){
			if(contato.selecionado){
				return contato;	
			}
		});
		// Para excluir, vamos usar a função filter e substituir o array original pelo
		// pelo array retornar pela função filter apenas com os valores não estão selecionados
		$scope.contatos = contatos.filter(function(contato){
			if(!contato.selecionado){
				return contato;	
			}
		});
	};
	$scope.isContatoSelecionado = function (contatos){
		// Nessa funcção SOME, se um contato for true, volta true
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	};
	$scope.ordenarPorNome = function (campo){
		$scope.criterioOrdenacao = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	};
	
	carregarContatos();
	carregarOperadoras();

});