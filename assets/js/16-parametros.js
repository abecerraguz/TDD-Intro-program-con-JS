'use strict'
/*
=======PARAMETROS==============================
Los Parametros son variables que van alterar 
la lógica o el resultado de la funcion
=================================================
*/

function calculadora(numero1,numero2){
	//Conjunto de instrucciones a ejecutar
	console.log('Suma ' +(numero1+numero2));
	console.log('Resta '+(numero1-numero2));
	console.log('Multiplicar ' +(numero1*numero2));
	console.log('División ' +(numero1/numero2));
	console.log('****************************************');
}

for(var i=1; i<=10; i++){
	console.log(i);
	calculadora(i,8);
}


