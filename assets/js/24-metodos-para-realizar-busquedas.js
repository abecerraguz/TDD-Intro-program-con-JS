'use strict'
/*
=======METODOS PARA PROCESAR TEXTOS====================================
1. Transformar textos
=========================================================================
*/

var numero = 444;
var texto1 = 'Bienvenidos al curso de JavaScript de Alejandro Becerra';
var texto2 = 'Es muy buen curso';
var texto3 = 'Bienvenidos al curso de JavaScript de Alejandro Becerra es muy buen curso';
var texto4 = 'Bienvenidos al curso de JavaScript de Alejandro Becerra es muy buen curso';

// Metodos para realizar busquedas dentro de un string retorna la posción de la palabra
var busqueda = texto1.indexOf('curso');

// Metodos para realizar busquedas dentro de un string retorna la ultima posicion
var busqueda2 = texto2.lastIndexOf('curso');
console.log(busqueda2);

// Metodo Search si no encuentra la palabra retorna -1
var busqueda3 = texto3.search('curso');
console.log(busqueda3);

// Metodo match devuelve un array
var busqueda4 = texto4.match(/curso/g);
console.log(busqueda4);

// Metodo substr devuelve busquedas entre la posicion 14 y 5
var busqueda4 = texto4.substr(14,5);
console.log(busqueda4);

// Metodo charAt devuelve la palabra en la posicion del indice de la cadena
var busqueda4 = texto4.charAt(14);
console.log(busqueda4);

// Metodo startWidth devuelve true o false si es que encontro la palabra al inicio
var busqueda4 = texto4.startWidth('victor');
console.log(busqueda4);

// Metodo include devuelve true o false si es que encuentra la palabra es case sensitive
var busqueda4 = texto4.include('JavaScript');
console.log(busqueda4);



