'use strict'
/*
=======FUNCIONES ANONIMAS Y CALLBACKS====================================
Las funciones anonimas , son funciones que no tienen nombre que se 
pueden guardar en una variable. Se utilizan en callbacks que son funciones
que se ejecutan unas dentro de otras.
=========================================================================
*/
//Funcion anonima
var pelicula = function (nombre){
	return 'La pelicula es: '+nombre;
}

/*
Para entender mejor la funcion anonima se 
realizara un callbacks, que simplemente es 
una función que se ejecuta dentro de otra
*/

function sumame(numero1, numero2, sumaYmuestra, sumaPordos){
	var sumar = numero1+numero2;
	sumaYmuestra(sumar);
	sumaPordos(sumar);
	return sumar;
}

sumame(5, 7, dato =>{
	console.log('La suma es: ', dato);   
},
dato =>{
	console.log('La Suma por dos es: ', (dato*2) );
});