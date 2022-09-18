
/*--------------------------------------------------------------《 TIPO PRIMITIVO 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se llaman asi por que no tienen propiedades ni metodos -------------------*/
let x = 10;

/*--------------------------------------------------------------《 PASO POR VALOR 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se pasa una copia del valor -------------------*/
function cambiarValor(a){
    a = 20; //Se intenta cambiar el valor desde el metodo
}

cambiarValor(x); 
/*-------------------------- ▀ La variable x NO sufre ningun cambio por que solo pasó su valor, una copia de su valor a a, entonces existen dos variables x y a -------------------*/
console.log(x);
/*-------------------------- ▀ La variable es un argumento de cambiarValor() y se destruye al finalizar -------------------*/
// console.log(a);






/*--------------------------------------------------------------《 PASO POR REFERENCIA 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ La variable de persona almacena una referencia a un objeto -------------------*/
//Crear Objeto
// const persona = new Object();

//Crear Objeto con parametros
const persona = {
    nombre : 'Juan',
    apellido : 'Perez'
}

/*-------------------------- ▀ El metodo accede a la referencia en memotia del mismo objeto -------------------*/
/*-------------------------- ▀ persona y p1 acceden a la misma referencia en memoria -------------------*/
function cambiarValorObjeto(p1){ //Apunta al objeto
    p1.nombre  = 'Carlos';
    p1.apellido = 'Lara';
}

//Paso por referencia
cambiarValorObjeto(persona); //mandando persona que es la misma referencia en memoria
console.log( persona );
console.log(persona.apellido);