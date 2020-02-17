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

var lenguajes = new Array('PHP','JS','Go', 'Java', 'ruby');


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

// Recorremos un array con un foreach
document.write('<h1>Lenguajes de programación del 2020</h1>');

document.write('<ul>');
	// se define el elemento del array , el indice y el arreglo
	lenguajes.forEach((elemento, indice, arr) =>{
		console.log(arr);
		document.write('<li>'+indice+' '+elemento+'</li>')
	});


document.write('</ul>');









