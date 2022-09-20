/*--------------------------------------------------------------《 MODO STRICT (MODO ESTRICTO) 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Puede ser una buena practica, sobre todo para encontrar errores en el codigo -------------------*/
/*-------------------------- ▀ Al utilizar el modo strict no podemos utilizar una variable que no ha sido declarada anteriormente -------------------*/
/*-------------------------- ▀ Al inicio del programa o al inicio de una funcion, se agrega así "use strict"; -------------------*/
"use strict"; //Para todo el programa debe ser la primera linea

let x = 10; //Si no se declara "x" manda error
console.log(x);

miFuncion();

function miFuncion(){
    "use strict"; //Si no se declara "y" manda error
    let   y = 15;
    console.log(y);
}