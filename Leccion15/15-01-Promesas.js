/*--------------------------------------------------------------《 PROMESAS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se utilizan funciones de callback -------------------*/
/*-------------------------- ▀ Una promesa es codigo que tiene varios estados -------------------*/
/*-------------------------- ▀ Mientras la promesa no haya terminado de ejecutar su codigo se encuentra en estado de pendiente (PENDING)  -------------------*/
/*-------------------------- ▀ Se puede lanzar una peticion en caso de que la promesa se resuelva correctamente .then() (RESOLVED) -------------------*/
/*-------------------------- ▀ CUANDO SE RESUELVE LA PROMESA SE EJECUTA LA FUNCION .THEN() -------------------*/
/*-------------------------- ▀ En caso de que se haya tenido problemas se manda llamar el caso de error .catch() (REJECTED) -------------------*/
/*-------------------------- ▀ PARA PROCESAR LA PROMESA EN CASO DE QUE TENGAMOS ERROR SE PROCESA LA FUNCION .CATCH() -------------------*/
/*-------------------------- ▀ Se pueden manejar los dos parametros o solo 1 -------------------*/

//Sintaxis básica
/*-------------------------- ▀ Recibe dos parametros los cuales van a ser funciones callback, la primer funcion va a ser en el caso de que haya sido resuelta la promesa correctamente y el segundo parametro va a ser una funcion que vamos a ejecutar en caso  de que haya algun fallo -------------------*/
let miPromesa = new Promise( ( resolved, rejected ) => {
    let expresion = true;

    if (expresion) {
        resolved('Resolvió correcto');
    } else {
        rejected('Se produjo un error');
    }
});


//Ejecutar la promesa
// miPromesa.then( 
//     valor => console.log(valor), 
//     error => console.log(error)
// );

/*-------------------------- ▀ Llamada a la promesa -------------------*/
// miPromesa
//     .then( valor => console.log(valor)) //Caso de resuelto
//     .catch(error => console.log(error)); //Caso de rechazado



let promesa = new Promise((resolved)=>{
    //console.log('Inicio promesa');
    setTimeout( () => { resolved('Saludos con promesa y timeout'), 3000 } );
    //console.log('Fin promesa');
});

//promesa.then(valor => console.log(valor));





/*--------------------------------------------------------------《 ASYNC 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ indica que una funcion va a regresar una promesa -------------------*/
/*-------------------------- ▀ Async Obliga a que una funcion debe regresar una promesa -------------------*/

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async'; //Lo que retorna es lo que va a consumir el then que en este caso es el valor que se manda
}

// miFuncionConPromesa().then(valor => console.log(valor));

/*--------------------------------------------------------------《 ASYNC - AWAIT 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ AWAIT Va a esperar el resultado de una promesa -------------------*/
/*-------------------------- ▀ AWAIT Solo se puede ejecutar dentro de una funcion declarada con async -------------------*/


async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

funcionConPromesaYAwait();
