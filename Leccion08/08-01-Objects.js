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



/*--------------------------------------------------------------《 IMPRIMIR EL OBJETO 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Forma 1: Concatenar cada valor de cada propiedad -------------------*/
console.log( persona.nombre + ', ' + persona.apellido)

/*-------------------------- ▀ Forma 2: Con un FOR IN -------------------*/
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

/*-------------------------- ▀ Forma 3: Con Object.values() en forma de arreglo -------------------*/
let personaArray = Object.values(persona);
console.log(personaArray);

/*-------------------------- ▀ Forma 4: Con JSON.stringify() lo convierte en cadena de texto JSON -------------------*/
let personaString = JSON.stringify(persona);
console.log(personaString);





/*--------------------------------------------------------------《 METODOS GET Y SET EN OBJETOS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Mejores practicas para acceder y modificar los valores de las propiedades de los objetos -------------------*/
let persona3 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    /*-------------------------- ▀ SET: Modificar los valores de nuestros atributos del objeto  -------------------*/
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    /*-------------------------- ▀ GET: Acceder a informacion del objeto  -------------------*/
    /*-------------------------- ▀ Se coloca GET antes de la funcion y se elimina function  -------------------*/
    get nombreCompleto(){ // nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
/*-------------------------- ▀ Para acceder se eliminan los () de la funcion ya que se entiende que es el metodo get -------------------*/
// console.log( persona3.nombreCompleto() );
console.log( persona3.nombreCompleto );


console.log( persona3.lang );
/*-------------------------- ▀ Mandar llamar el metodo SET -------------------*/
persona3.lang = 'en';
console.log( persona3.lang );
console.log( persona3.idioma ); //Se almacenó correctamente





/*--------------------------------------------------------------《 CONTRUCTOR DE OBJETOS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Funcion especial para trabajar con objetos en JS -------------------*/
/*-------------------------- ▀ Constructor empezar con mayuscula -------------------*/
//Funcion constructor de objetos de tipo Persona
// function Persona(nombre = 'Juan', apellido, email){ //Se pueden pasar valores aqui
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    /*--------------------------------------------------------------《 AGREGAR UN METODO AL CONTRUCTOR DE OBJETOS 》------------------------------------------------------------------------------------*/
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Se crea el objeto Persona
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre );
//Se utiliza el metodo
console.log( padre.nombreCompleto() );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre );
console.log( madre.nombreCompleto() );

padre.nombre = 'Carlos';
console.log( padre );



/*--------------------------------------------------------------《 AGREGAR UN ATRIBUTO FUERA DEL CONSTRUCTOR DEL OBJETO CON PROTOTYPE 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Modifica los atributos o metodos, los agrega pero afecta a todos los objetos creados -------------------*/
Persona.prototype.tel = '44332211';

console.log( padre.tel );
padre.tel = '11223344';
console.log( padre.tel );

console.log( madre.tel );



/*--------------------------------------------------------------《 METODO CALL PARA OBJETOS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Permite mandar llamar un metodo que esta definido en un objeto desde otro objeto -------------------*/

let persona1 = {
    nombre: 'Juanito',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
    // nombreCompleto: function(){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel ; //Como titulo y tel no son propiedades del objeto y se estan mandando como parametro solo se colocan, no llevan this
        // return this.nombre + ' ' + this.apellido;
    }
}

let otraPersona = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar el metodo persona1.nombreCompleto con los datos de otraPersona
console.log( persona1.nombreCompleto('Lic.', '44332288') );
/*-------------------------- ▀ Como tiene los mismos atributos se puede utilizar -------------------*/
console.log( persona1.nombreCompleto.call( otraPersona, 'Ing', '55443322' ) ); //Se mandan los atributos al METODO con CALL



/*--------------------------------------------------------------《 METODO APPLY PARA OBJETOS 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Permite mandar llamar un metodo en un objeto que no tiene definido cierto metodo -------------------*/
/*-------------------------- ▀ NOTA: La diferencia de CALL es que se mandan los valores en arreglo y no por separado -------------------*/

//Uso de apply
console.log( persona1.nombreCompleto('Lic.', '66887711') );

/*-------------------------- ▀ Con el metodo APPLY se pasa un arreglo y no por separado como el metodo CALL -------------------*/
let arreglo = ['Ing.', '55443322'];
console.log( persona1.nombreCompleto.apply( otraPersona, ['Ing.', '55443322'] ) ); //Asi se puede pasar
console.log( persona1.nombreCompleto.apply( otraPersona, arreglo ) ); //O directamente en un arreglo




/*--------------------------------------------------------------《 DISTINTAS FORMAS DE CREAR OBJETOS 》------------------------------------------------------------------------------------*/

let miObjeto = new Object();
let miObjeto2 = {} //Recomendable

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola'; //Recomendable

let miNumero = new Number(1);
let miNumero2 = 1; //Recomendable

let miBoolean = new Boolean(false);
let miBoolean2 = false; //Recomendable

let miArreglo1 = new Array();
let miArreglo2 = []; //Recomendable

let miFuncion = new Function();
let miFuncion1 = function(){}; //Recomendable