'use strict'
/*
============BUCLE====================
BUCLE WHILE
El bucle while es infinito, depende de nostros donde los vamos
a cortar;
Ejemplo
*/
var year = 2019;
while( year <= 2055 ){
	
	console.log("Estamos en al año: "+year);
	
	if(year == 2000){
	   break;
	}
	
	
	year++;
	  
}

var year = 2019;
while( year != 1991 ){
	
	console.log("Estamos en al año: "+year);
	year--;
	  
}