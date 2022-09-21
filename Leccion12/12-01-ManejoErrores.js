/*--------------------------------------------------------------《 MANEJO DE ERRORES 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ try catch sirve para manejo de errores, el catch muestra el error -------------------*/

'use strict';

try {
    /*-------------------------- ▀ try: Ejecuta el codigo y si encuentra un error el catch lo muestra -------------------*/
    let x = 10;
    // miFuncion();
} catch (error) {
    /*-------------------------- ▀ catch: Muestra errores, sirve para cachar errores -------------------*/
    console.log(error);
}
/*-------------------------- ▀ finally: Se ejecuta en todo momento pero es opcional -------------------*/
finally{
    console.log('Termina la revision de errores');
}

/*-------------------------- ▀ No termina de manera abrupta el programa -------------------*/
console.log('Continuamos...');