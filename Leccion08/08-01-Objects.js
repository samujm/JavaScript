/*--------------------------------------------------------------《 OBJETOS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Contiene atributos y metodos -------------------*/

//DEFINIENDO UN OBJETO
/*-------------------------- ▀ Se crea un objeto en memoria que contiene una referencia -------------------*/
/*-------------------------- ▀ Se crea un objeto con las propiedades nombre, apellido, email, edad; con una direccion de memoria asignada la variable persona por ej 0x333 -------------------*/
let persona = {
    /*-------------------------- ▀ No todos los valores tienen que ser cadena -------------------*/
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,

    /*--------------------------------------------------------------《 METODOS DE OBJETOS 》------------------------------------------------------------------------------------*/
    /*-------------------------- ▀ Se agrega como un atributo pero con una funcion de tipo expresion -------------------*/
    nombreCompleto: function(){
        /*-------------------------- ▀ Dentro del objeto se accede a las propiedades mediante this -------------------*/
        return this.nombre + ' ' + this.apellido;
    },
    miFuncion:function(){
        
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona);
//ACCEDIENDO AL METODO
console.log(persona.nombreCompleto());