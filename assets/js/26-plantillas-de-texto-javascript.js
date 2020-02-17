'use strict'
/*
=======PLANTILLAS DE TEXTO EN JAVASCRIPT====================================
1. Usar una plantilla de javascript
=========================================================================
*/

var nombre    = prompt('METE TU NOMBRE');
var apellidos = prompt('METE TU APELLIDO');

// Esta forma es a traves de concatenar las variables
//var texto = 'Mi nombre es :'+nombre '<br>Mis apellidos son:'+apellido;

// Existe un nuevo metodo este es a través de plantilla se hace a través comilla invertida
// esta se hace a traves de la tecla del acento invertido

var texto =`
	<h1>Hola que tal</h1>
	<h3>Mi nombre es ${nombre}</h3>
	<h3>Mi apellidos son ${apellidos}</h3>
`;





