/*--------------------------------------------------------------《 CONVERTIR STRING A NUMERO 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se utiliza la funcion Number() -------------------*/
let miNumero = "18";

// console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);


if ( edad >= 18) {
    console.log("Puede votar");
} else {
    console.log("Muy joven para votar");  
}

//Ejercicio anterior con operador ternario
let resultado = (edad >=18 ) ? "Puede votar" : "Muy joven para votar";
console.log(resultado);