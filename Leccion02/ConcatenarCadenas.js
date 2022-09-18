var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

//Encuentra una cadena primero, al numero lo trata como una cadena
var x = nombre + 219 + 2 + 4 ;
console.log(x);

//Al poner los parentesis toma prioridad la suma y despues se concatena
x = nombre + (2 + 4);
console.log(x);

//Debido a que primero encuentra un numero y el segundo es un numero realiza la suma y despues la concatenación
x = 2 + 4 + nombre;
console.log(x);