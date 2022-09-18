/*--------------------------------------------------------------《 ARREGLO 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Tipo object que permite almacenar varios valores -------------------*/

//Como declarar un arreglo

/*-------------------------- ▀ Forma antigua de declarar -------------------*/
// let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

/*-------------------------- ▀ Si ya no se declara algun otro tipo de referencia se puede declarar la palabra const -------------------*/
/*-------------------------- ▀ Por referencia es el espacio de memoria que se asigna para ese arreglo -------------------*/
/*-------------------------- ▀ La variable autos almacena la referencia donde se encuentra en memoria el arreglo que se va a crear -------------------*/
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);


/*-------------------------- ▀ Acceder a elementos de un arreglo de forma individual -------------------*/
console.log(autos[0]);
console.log(autos[2]);

/*-------------------------- ▀ Acceder a elementos de un arreglo por medio de un ciclo -------------------*/
for(let i = 0; i < autos.length; i++){
    console.log(i + ' ' + autos[i]);
}


/*-------------------------- ▀ Modificar los elementos de un arreglo -------------------*/
autos[1] = 'MercedesBenz';
console.log(autos[1]);


/*-----------------------------《 FUNCION PUSH 》-------------------------------------------*/
/*-------------------------- ▀ Agregar un elemento al final del arreglo -------------------*/
autos.push('Audi');
console.log(autos);

/*-------------------------- ▀ Otra forma de gregar un elemento al final del arreglo -------------------*/
/*-------------------------- ▀ 0,1,2,3 (indices); BMW, Mercedes Benz, Volvo (elementos) -------------------*/
console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);

/*-------------------------- ▀ Agregar un elemento en una posicion en especifico pero NO ES RECOMENDABLE -------------------*/
autos[6] = 'Porshe';
console.log(autos);


/*-----------------------------《 FUNCION ARRAY.ISARRAY 》-------------------------------------------*/
/*-------------------------- ▀ Con typeof no se puede por que me dice que es un objeto -------------------*/
console.log(typeof autos);
/*-------------------------- ▀ Saber si es un arreglo -------------------*/
console.log(Array.isArray(autos));
/*-------------------------- ▀ Si la variable autos es una instancia de tipo arreglo -------------------*/
console.log(autos instanceof Array);