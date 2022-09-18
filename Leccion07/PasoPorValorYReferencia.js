
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
console.log(a);