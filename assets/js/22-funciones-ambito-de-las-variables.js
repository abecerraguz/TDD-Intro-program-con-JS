'use strict'
/*
=======FUNCIONES AMBITO DE LAS VARIABLES====================================
Variables Globales y Variables privadas desde las funciones
=========================================================================
*/

function holaMundo(texto){
	var hola_mundo = 'Texto dentro de Función'
	console.log(texto);
	console.log(numero.toString());
	//toString Lleva a un numero a un string
	console.log(hola_mundo);
}

var numero = 12;
var texto  = 'Hola Mundo soy una variable global';
holaMundo(texto);