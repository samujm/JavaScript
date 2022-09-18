/*--------------------------------------------------------------《 FUNCION ISNAN (NOT A NUMBER) 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Validar o garantizar que se está trabajando con números pos si se tienen que convertir -------------------*/
let miNumero = "18x";

let edad = Number(miNumero);
console.log(edad); //Manda el valor de NaN (NOT A NUNBER)

if (isNaN(edad)) { //Pregunta si no es un número

    console.log("No es un número");

} else {

    if ( edad >= 18) {
        console.log("Puede votar");
    } else {
        console.log("Muy joven para votar");  
    }
    
}


if (isNaN(edad)) { //Pregunta si no es un número
    console.log("No es un número");
} else {
    //Ejercicio anterior con operador ternario
    let resultado = (edad >=18 ) ? "Puede votar" : "Muy joven para votar";
    console.log(resultado);
}


