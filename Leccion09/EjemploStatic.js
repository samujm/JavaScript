class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas; //Se asigna a una variable para que sea su id, se incrementa y se asigna
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
