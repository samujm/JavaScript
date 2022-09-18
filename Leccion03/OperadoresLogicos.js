let a = 15;
let valMin = 0, valMax = 10;

/*--------------------------------------------------------------《 OPERADOR AND 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Regresa true solo si ambos operandos son true -------------------*/
if ( a >= valMin && a <= valMax) {
    console.log("Dentro de rango");
} else {
    console.log("Fuera de rango");   
}

/*--------------------------------------------------------------《 OPERADOR OR 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Regresa true si cualquier operando es true -------------------*/
let vacaciones = false, diaDescanso = true;

if ( vacaciones || diaDescanso ) {
    console.log("Padre puede asistir al juego del hijo");   
} else {
    console.log("El padre está ocupado");   
}