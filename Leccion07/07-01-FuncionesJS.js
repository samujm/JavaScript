/*--------------------------------------------------------------《 FUNCIONES 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Una función es un codigo reutilizable -------------------*/
/*-------------------------- ▀ Se puede mandar llamar tantas veces como se necesite -------------------*/

//HOISTING
/*-------------------------- ▀ No importa donde se mande llamar mientras se encuentre definido,a esto se le llama HOISTING -------------------*/
// miFuncion(4,2);


//Declarar la funcion
/*-------------------------- ▀ Utilizar notación de camello -------------------*/
/*-------------------------- ▀ En los parentesis van argumentos de la funcion, es la información de entrada con que puede trabajar la funcion -------------------*/
/*-------------------------- ▀ puede tener o no argumentos -------------------*/
function miFuncion(a, b) {
    // console.log("Suma: " + (a + b));
    /*-------------------------- ▀ Retornar el resultado, para ello la funcion se asigna a una variable -------------------*/
    return a + b;
    /*-------------------------- ▀ Nota: Si no se coloca la palabra RETURN esta se agrega de manera implicita en la ultima linea de la funcion cuando no regresa un valor -------------------*/
}

//Llamada a la funcion
miFuncion(2,3);

/*-------------------------- ▀ Asignar el return de la suma a una variable para poder mostrar el resultado -------------------*/
let resultado = miFuncion(2,3);
console.log(resultado);




/*--------------------------------------------------------------《 FUNCION DE TIPO EXPRESION O ANONIMA 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se asigna a una variable y no se le coloca el nombre a la funcion -------------------*/
/*-------------------------- ▀ Esta si debe terminar en ; ya que es una linea que si se ejecuta -------------------*/
//DECLARACION DE UNA FUNCION DE TIPO EXPRESION
let sumar = function (a,b){return a + b;};
//UTILIZAR LA FUNCION DE TIPO EXPRESION, MANDAR LLAMAR
/*-------------------------- ▀ Se manda llamar la variable que a su vez almancena la referencia en memoria a la funcion -------------------*/
resultado = sumar(1,2);
console.log(resultado);


/*--------------------------------------------------------------《 FUNCION SELF-INVOKING 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Es una funcion anonima pero que se puede mandar llamar a si misma -------------------*/
/*-------------------------- ▀ Se manda llamar a si misma -------------------*/
/*-------------------------- ▀ Se ejecuta automaticamente -------------------*/
/*-------------------------- ▀ Solo se ejecuta una ocasion -------------------*/
/*-------------------------- ▀ No se puede reutilizar ya que no se esta asignando a una variable ni se le asigna un nombre -------------------*/
//DECLARACION DE UNA FUNCION SELF-INVOKING
(function (){ //Sin parametros
    console.log('Ejecutando la funcion');
})(); //En los parentesis se manda llamar

(function (a, b){ //Con parametros
    console.log('Ejecutando la funcion: ' + (a + b));
})(3,4); //En los parentesis se manda llamar





/*--------------------------------------------------------------《 FUNCION COMO OBJETO 》------------------------------------------------------------------------------------*/
console.log(typeof miFuncion);
/*-------------------------- ▀ La funcion es un objeto y los objetos tienen propiedades y metodos -------------------*/
function miFuncion(a, b) {
    //Propiedades
    /*-------------------------- ▀ La propiedad arguments permite saber cuantos argumentos recibe la funcion -------------------*/
    /*-------------------------- ▀ Solo se utiliza dentro de la funcion para poder realizarla -------------------*/
    console.log(arguments.length);
    return a + b;
}
//Metodos
var miFuncion = miFuncion.toString();
console.log(miFuncion);





/*--------------------------------------------------------------《 FUNCION FLECHA 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se utiliza const ya que es más recomendable -------------------*/
/*-------------------------- ▀ Se asigna la referencia de la funcion a la variable para que se pueda utilizar -------------------*/
/*-------------------------- ▀ Lo más comun es que ya no se modifica la referencia que se le asigno a esa variable -------------------*/
/*-------------------------- ▀ No se utiliza la palabra reservada function -------------------*/
/*-------------------------- ▀ No se utilizan llaves, solo flecha -------------------*/
/*-------------------------- ▀ Se omite return -------------------*/
/*-------------------------- ▀ Toda la funcion [(a,b) => a + b] se asigna un espacio de memoria [sumarFuncionTipoFlecha] y esa variable la manda llamar -------------------*/
const sumarFuncionTipoFlecha = (a,b) => a + b;
resultado = sumarFuncionTipoFlecha(3,4);
console.log(resultado);



/*--------------------------------------------------------------《 ARGUMENTOS Y PARAMETROS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ PARAMETROS: Las variables que recibe la funcion, lista de valores que recibe una funcion -------------------*/
/*-------------------------- ▀ ARGUMENTOS: Valores que se pasan a una funcion cuando se manda llamar la funcion -------------------*/
/*-------------------------- ▀ No es necesario definir el valor -------------------*/
/*-------------------------- ▀ No es requerido que coincida el numero de argumento con el de parametros, si no coincide se puede acceder con arguments[2]*** -------------------*/
let sumar2 = function(a = 2, b = 5 ){
    /*-------------------------- ▀ arguments para saber el valor del argumento -------------------*/
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]); //Se puede acceder con arguments y el indice pero no con un nombre de un parametro
    return a + b + arguments[2]; //Se agrega el tercer argumento
};

/*-------------------------- ▀ No es requerido que coincida el numero de argumento con el de parametros, si no coincide se puede acceder con arguments[2]*** -------------------*/
resultado = sumar2(3,6,7);
console.log(resultado);