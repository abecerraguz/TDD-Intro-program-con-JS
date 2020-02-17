'use strict'
/*
=======METODOS PARA TRANSFORMAR TEXTOS====================================
1. Transformar y Remplazar textos
=========================================================================
*/

var numero = 444;
var texto1 = '   Bienvenidos al curso de JavaScript de Alejandro Becerra  ';
var texto2 = 'Es muy buen curso';

// Función que nos permite remplazar texto por otro a traves del segundo parametro
var busqueda = texto1.replace('JavaScript', 'Symfony');
console.log(busqueda);

// Función que nos permite remplazar texto por otro a traves del segundo parametro
var busqueda = texto1.slice(14,22);
console.log(busqueda);
// Muestra el string a partir del numero 14
// curso de JavaScript de Alejandro Becerra

//Metodo splite toma todas las palabras de la variable texto1 y los deja en un array
var busqueda = texto1.splite(' ');
console.log(busqueda);


//Metodo trim quita los espacios
var busqueda = texto1.trim();
console.log(busqueda);


