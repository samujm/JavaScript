'use strict';
// let resultado = 'hola';
// let resultado = '';
// let resultado = 6;
let resultado = -6;



try{
    // x = 10;
    /*--------------------------------------------------------------《 THROWS 》------------------------------------------------------------------------------------*/
    /*-------------------------- ▀ Cuando se quiera reportar un error personalizado -------------------*/
    if (isNaN(resultado)) 
    {
        throw 'No es un número';
    } else if(resultado === '') {
        throw 'Es cadena vacia';
    } else if (resultado >= 0){
        throw 'Valor positivo';
    } else if(resultado < 0 ){
        throw 'Valor negativo';
    }
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina revisión de errores');
}