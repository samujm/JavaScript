class Persona {
    static contadorPersonas = 0;

    /*--------------------------------------------------------------《 ATRIBUTO DE TIPO STATICO QUE FUNCIONA COMO CONSTANTE DE LA CLASE PERSONA 》------------------------------------------------------------------------------------*/
    /*-------------------------- ▀ Se crea un metodo get static (mayusculas el nombre) y retorna el valor static -------------------*/
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas; //Se asigna a una variable para que sea su id, se incrementa y se asigna
        } else {
            console.log('Se han superado el máximo de objetos permitidos');
        }
    }
    
    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.idPersona + ' ' + this.nombreCompleto();
    }    

    static saludar(){
        console.log('Saludos desde Metodo static');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona( 'Juan', 'Perez' ); 
console.log(persona1.toString());

let empleado1 = new Empleado( 'Maria', 'Jimenez', 'Sistemas' );
console.log(empleado1.toString());

console.log( Persona.contadorPersonas );

let persona2 = new Persona('Karla', 'Ramirez');
console.log(persona2.toString());

console.log( Persona.contadorPersonas );

/*--------------------------------------------------------------《 ATRIBUTO DE TIPO STATICO QUE FUNCIONA COMO CONSTANTE DE LA CLASE PERSONA 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se crea un metodo get static (mayusculas el nombre) y retorna el valor static -------------------*/
console.log( Persona.MAX_OBJ );
Persona.MAX_OBJ = 10;
console.log( Persona.MAX_OBJ );


let persona3 = new Persona( 'Mariano' , 'Lara' );
let persona4 = new Persona( 'Armando' , 'Toledo' );
let persona5 = new Persona( 'Laura' , 'Quintero' );
console.log( persona5.toString() ); //Ya no se le asigno el ID por que ya es el limite
console.log( persona4.toString() );
