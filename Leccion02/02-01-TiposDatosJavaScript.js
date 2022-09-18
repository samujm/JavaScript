/*
Ejemplos de 
tipos de datos 
en JavaScript
*/

//Tipo de dato string
var nombre = "Carlos";
console.log(typeof nombre);
nombre = 10.5;
//Saber que tipo de dato es (typeof)
console.log(typeof nombre)

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(typeof objeto);

//Tipo de dato boolean (true, false)
//Se llaman bandera
var bandera = false;
console.log(bandera);
console.log(typeof bandera)

//Tipo de dato function
//Permite realizar ciertas tareas que se pueden reutilizar al mandar llamar la funcion
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion)

//Tipo de dato Symbol
//Valor unico de una variable
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona)

//Tipo undefined
var x;
console.log(x);
console.log(typeof x);