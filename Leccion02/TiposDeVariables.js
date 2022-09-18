/*--------------------------------------------------------------《 VARIABLES 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ La literal es el valor que se asigna por ejemplo 1, 10.5 o juan -------------------*/
/*-------------------------- ▀ Se puede declarar una variable sin definirla PERO NO ES BUENA PRACTICA -------------------*/
// nombre = "Juan"; NO BUENA PRACTICA
/*-------------------------- ▀ Se puede declarar y asignar el valor -------------------*/
// let nombre = "Juan";
/*-------------------------- ▀ Se puede declarar y despues asignar el valor si asi se requiere -------------------*/

//EJEMPLO CON LET, ESTE VALOR PUEDE CAMBIAR
let nombre;
nombre = "Juan";
console.log(nombre);

//EJEMPLO CON CONST, ESTE VALOR NO PUEDE CAMBIAR UNA VEZ ASIGNADO EL VALOR
const apellido = "Perez";
// apellido = "Lara";

/*--------------------------------------------------------------《 BUENAS PRACTICAS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Notación de camello -------------------*/
// let nombreCompleto = "Juan Perez";
// console.log( nombreCompleto );
/*-------------------------- ▀ Se puede definir varias variables en una misma linea -------------------*/
let x, y;
x = 10, y = 20;
z = x + y;
console.log(z);

/*-------------------------- ▀ JavaScript es sensible a mayusculas y minusculas, no es lo mismo nombreCompleto que nombrecompleto -------------------*/
let nombreCompleto = "Juan Perez";
let nombrecompleto = "Carlos Lara";
console.log(nombreCompleto);
console.log(nombrecompleto);

/*-------------------------- ▀ El nombre de una variable no puede comenzar con números -------------------*/
// let 1nombreCompleto;
/*-------------------------- ▀ Pueden sevar $ _ o letras en mayusculas y minusculas -------------------*/
let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;

/*-------------------------- ▀ No se pueden utilizar palabras reservadas para declarar variables -------------------*/
// let break = 10;

