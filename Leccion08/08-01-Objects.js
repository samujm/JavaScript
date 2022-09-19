/*--------------------------------------------------------------《 OBJETOS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Contiene atributos y metodos -------------------*/

//DEFINIENDO UN OBJETO
/*-------------------------- ▀ Se crea un objeto en memoria que contiene una referencia -------------------*/
/*-------------------------- ▀ Se crea un objeto con las propiedades nombre, apellido, email, edad; con una direccion de memoria asignada la variable persona por ej 0x333 -------------------*/
//Forma más común
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




/*--------------------------------------------------------------《 CREAR OBJETOS CON NEW 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Indica que se crea un objeto nuevo en memoria -------------------*/
//Se crea un objeto en memoria vacio
let persona2 = new Object();
//Creando propiedades
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.telefono = '55443322';

console.log(persona2.telefono);




/*--------------------------------------------------------------《 ACCEDER A LAS PROPIEDADES DE LOS OBJETOS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Como si fuera un arreglo -------------------*/
console.log(persona['apellido']);

/*---------------------《 ACCEDER A LAS PROPIEDADES DE LOS OBJETOS CON FOR IN》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Con un FOR IN-------------------*/
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}





/*--------------------------------------------------------------《 AGREGAR PROPIEDADES A LOS OBJETOS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se agregan de la siguiente forma: -------------------*/
persona.tel = '54452122';
/*-------------------------- ▀ Nota: Tener cuidado al querer MODIFICAR el valor de la propiedad, ya que en lugar de editarlo puede que este haciendo otra -------------------*/
persona.te1 = '48755412';
persona.tel = '48755555';

console.log(persona);





/*--------------------------------------------------------------《 ELIMINAR PROPIEDADES A LOS OBJETOS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se eliminan de la siguiente forma: -------------------*/
delete persona.tel;

console.log(persona);