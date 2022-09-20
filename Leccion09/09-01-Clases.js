/*--------------------------------------------------------------《 CLASES 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Inician con mayuscula -------------------*/
//Clase de tipo persona
class Persona {
/*-------------------------- ▀ Se crea el constructor -------------------*/
    constructor(nombre, apellido){
        //Inicializar los atributos de la clase
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

/*---------------------《 Instancia de la clase u objeto 》-----------------------------------------------------------*/
/*-------------------------- ▀ Definida la clase ya se pueden crear objetos -------------------*/
/*-------------------------- ▀ Se manda llamar el constructor de la clase, si no se define se agrega el constructor vacio en automatico -------------------*/
let persona1 = new Persona( 'Juan', 'Perez' ); //Reservar nuevo espacio de memoria y esperando los parametros para el constructor
console.log( persona1 );

let persona2 = new Persona( 'Carlos', 'Lara' );
console.log( persona2 );