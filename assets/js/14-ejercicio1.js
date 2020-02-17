'use strict'
/*
=======EJERCICIO 01==============================
Programa que pida dos numero y que nos diga cual 
es el mayor, el menor y si  son iguales.
=================================================
*/

var numero1 = parseInt(prompt('Introduce el primer numero',0));
var numero2 = parseInt(prompt('Introduce el segundo numero',0));

if(numero1 == numero2){
   alert('Los numeros son iguales'); 
}else if(numero1 > numero2){
	alert('El NUMERO MAYOR ES: '+numero1);
	alert('El NUMERO MENOR ES: '+numero2);
}else if(numero2 > numero1){
	alert('El NUMERO MAYOR ES: '+numero2);
	alert('El NUMERO MENOR ES: '+numero1);	 	 
}else{
	alert('INTRODUCE NUMEROS CORRECTOS');
}