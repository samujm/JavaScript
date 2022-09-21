
miFuncion2();
miFuncion1();


/*--------------------------------------------------------------《 FUNCIONES NORMALES 》------------------------------------------------------------------------------------*/

function miFuncion1(){
    console.log('Función 1');
}

function miFuncion2(){
    console.log('Función 2');
}

/*--------------------------------------------------------------《 FUNCION CALLBACK 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Dentro de una funcion se manda llamar otra funcion -------------------*/
/*-------------------------- ▀ NOTA: EL OBJETIVO DE LAS FUNCIONES CALLBACK ES QUE PUEDAN SER UTILIZADAS PARA PROCESOS QUE SE EJECUTAN DE MANER ASINCRONA -------------------*/
/*-------------------------- ▀ SINCRONO: Se ejecuta una linea a la vez -------------------*/

// let imp = function imprimir(mensaje){  //Otra forma de aplicar, se asigna la referencia a la variable imp y esa se manda en el argumento de suma
//     console.log(mensaje);
// }

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBack){ //funcionCallBack recibe como argumento la referencia de la funcion de imprimir, puede ser el mismo nombre de la funcion
    let res = op1 + op2;
    funcionCallBack(`Resultado: ${res}`);
}

sumar(5, 3, imprimir); //Envia la funcion pero sin ()
// sumar(5, 3, imp);
