/*--------------------------------------------------------------《 FUNCIONES 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Una función es un codigo reutilizable -------------------*/
/*-------------------------- ▀ Se puede mandar llamar tantas veces como se necesite -------------------*/


/*-------------------------- ▀ No importa donde se mande llamar mientras se encuentre definido,a esto se le llama HOISTING -------------------*/
miFuncion(4,2);


//Declarar la funcion
/*-------------------------- ▀ Utilizar notación de camello -------------------*/
/*-------------------------- ▀ En los parentesis van argumentos de la funcion, es la información de entrada con que puede trabajar la funcion -------------------*/
/*-------------------------- ▀ puede tener o no argumentos -------------------*/
function miFuncion(a, b) {
    console.log("Suma: " + (a + b));
}

//Llamada a la funcion
miFuncion(2,3);
