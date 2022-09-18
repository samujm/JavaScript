/*--------------------------------------------------------------《 OPERADORES DE COMPARACIÓN 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Preguntar si dos valores son iguales o no, el resultado es true o false -------------------*/

let a = 3, b = 3, c = "3";

/*-------------------------- ▀ NO COMPARA TIPOS -------------------*/
/*-------------------------- ▀ Comparar si el valor de a es igual al valor de b, pero no revisa los tipos, revisa el contenido y convierte la c a un tipo entero -------------------*/
let z = a == c;
console.log(z);

/*-------------------------- ▀ SI COMPARA TIPOS -------------------*/
/*-------------------------- ▀ Revisa los valores pero tambien los tipos, si no se cumple uno regresa falso -------------------*/
z = a === c;
console.log(z);
