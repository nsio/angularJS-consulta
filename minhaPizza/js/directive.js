angular.module("minhaPizza")

.directive("radioButton", function(){
    return{
        restrict: "E",
        templateUrl: "directives/radioButton.html",
        scope: {
            options: '=options',
            value: '=value'
        },
        link: function(scope, elem, attrs){
            scope.selecionarItem = function(item){
                scope.value = item;
            }

            scope.classes = function(item){
            	alert(item);
                if(scope.value === item){
                    return " isSelected ";
                }
                return "";
            }
        }
    }
})

/*

restrict: "AEC"

Note que acima, temos "AEC" de,
A = atributte
E = Element
C = Classe

então, no html, para chamada da diretriva, poderemos,
<div radio-button></radio-button> Para Atributte
<radio-button></radio-button> Para Element
<div class="radio-button"></div> Para classe CSS

Nós vamos utilizar como elemento, então, deixamos
apenas E, restrict: "E"

*/