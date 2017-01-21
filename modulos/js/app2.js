angular.module("myApp2", [])

.factory('myFactory', function(){
	return function(number){
		return (number % 2 === 0);
	}
})