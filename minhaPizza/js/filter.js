angular.module("minhaPizza")
.filter("reaisFilter", function(){
	return function(input, casasDecimais){
		if(!isNaN(input)){
			// Força duas casas decimais no número
			return ("R$" + input.toFixed(casasDecimais).replace(".", ","));
		}
		return "Valor incorreto";
	};
});