/*--------------------------------------------------------------《 FUNCION SETINTERVAL 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Manda llamar a la funcion de tipo callback cada cierto segundo, manda llamar varias veces la funcion  -------------------*/

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); //Manda llamar de manera asincrona la funcion de reloj cada segundo