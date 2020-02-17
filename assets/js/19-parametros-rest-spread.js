'use strict'
/*
=======PARAMETROS REST==========================================
El parametro REST, se utiliza para incorporar parametros futuros Ejemplo
=========================================================================
*/

function listadoDeFrutas(fruta1,fruta2,...restoDeFrutas){
	console.log('Fruta 1:', fruta1);
	console.log('Fruta 2:', fruta2);
	console.log(restoDeFrutas);
}

listadoDeFrutas('Naranja','Manzana','Sandia','Pera','Melon','Coco');

/*
=======PARAMETROS SPREAD==========================================
El parametro SPREAD, se utiliza para incorporar parametros futuros Ejemplo
=========================================================================
*/

var frutas = ['Naranja','Manzana'];
listadoDeFrutas(...frutas,'Sandia','Pera','Melon','Coco');

