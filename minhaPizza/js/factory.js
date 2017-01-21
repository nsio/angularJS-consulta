// O proposito da factory é retornar algo
// nesse exemplo podemos ver que o retorno
// será o nome aleatoria para a pizza,
// com esse retorno, os arrays e algumas funções 
// ficam inacessiveis do lado de fora da factory
angular.module("minhaPizza")
.factory("FactoryNomes", function(){
	var vogais = ["a","e","i","o","u"];
	var consoantes = ["h","d","c","b","l","k","j","z","v","d","r","f"];

	function aleatorio(maximo){
		return Math.floor(Math.random() * maximo);
	}

	function letraAleatoria(letras){
		return letras[aleatorio(letras.length)];
	}

	function geraNome(){
		var nome = '',
			comprimento = aleatorio(8) + 2;

		for (var i = 0; i < comprimento; i++){
			if(i % 2 == 0){
				nome += letraAleatoria(consoantes);
			}else{
				nome += letraAleatoria(vogais);
			}
		}
		nome = nome.charAt(0).toUpperCase() + nome.slice(1);
		return nome;
	}
	// O return é apenas a função, se colocar o 
	// o parenteses, estariamos executando a função;
	return geraNome;
});
