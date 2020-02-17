'use strict'
/*
=======ARRAY AVANZADOS====================================
1. Creación de array Avanzados
=========================================================================
*/

// Los array tienen indices y enpiezan en 0
var nombre = 'Alejandro Becerra';
//               [0]             [1]                [2]         [3]  [4]
var nombres = ['Jorge Rojas', 'Pedro Fernandez', 'Pedro Torres', 46, true];

var lenguajes = new Array('PHP','JS','Go', 'Java');


/*
// Para mostrar el largo de un array
console.log(nombres.length);

var elemento = parseInt(prompt('Que elemento del array quieres??',0));


if (elemento >= nombres.length) {
	alert('Introduce el numero correcto menor que' + nombres.length);
}else {
	alert('El usuario seleccionado es: '+nombres[elemento]);
}
*/

// Recorremos un array con un for
document.write('<h1>Lenguajes de programación del 2018</h1>');
document.write('<ul>');
for (var i = 0; i <= lenguajes.length; i++) {

	document.write('<li>'+lenguajes[i]+'</li>')

}
document.write('</ul>');









