// ESSE CARA FICA OBSERVANDO O BROWSERIFY, E QUANDO HOUVER 
// ALGUMA ALTERAÇÃO, ELE EXECUAR O BROWSERIFY
var gulp = require("gulp");

// Observar todos os niveis de pastas e todos os arquivos
// com qualquer nome e qualquer extensão
gulp.task("watch", function(){
	gulp.watch(['./js/**/*'], ['browserify']);
});
