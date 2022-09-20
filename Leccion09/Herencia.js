
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    
    get nombre(){
        return this._apellido;
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

    //Metodo, no es necesario agregar la palabra function
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

/*--------------------------------------------------------------《 HERENCIA 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se agrega EXTENDS ya que extiende de la clase PERSONA -------------------*/
class Empleado extends Persona{
    /*-------------------------- ▀ Se agregan los atributos de la clase padre que va a recibir el constructor -------------------*/
    constructor(nombre, apellido, departamento){
        /*-------------------------- ▀ Se debe agregar SUPER para llamar al constructor de la clase padre -------------------*/
        super(nombre, apellido); //Se pasan los parametros
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    /*--------------------------------------------------------------《 SOBREESCRITURA 》------------------------------------------------------------------------------------*/
    /*-------------------------- ▀ Modificar el comportamiento de algun metodo definido de la clase padre -------------------*/
    /*-------------------------- ▀ Debe ser el mismo nombre de la funcion y los mismos parametros si no ya no es sobreescritura -------------------*/
    nombreCompleto(){
        /*-------------------------- ▀ Se coloca super para no volver a escribir los parametros y se concatena lo demás -------------------*/
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona( 'Juan', 'Perez' ); 
console.log( persona1 ); 

/*-------------------------- ▀ Se crea el objeto de la clase hija con los atributos heredados de la clase padre y sus propios atributos -------------------*/
let empleado1 = new Empleado( 'Maria', 'Jimenez', 'Sistemas' );
console.log(empleado1);
/*-------------------------- ▀ En la siguiente linea confirmamos que se hereda el metodo get de la clase padre -------------------*/
console.log( empleado1._nombre ); 

/*-------------------------- ▀ ACCEDER AL METODO DEFINIDO EN EL PADRE -------------------*/
console.log( empleado1.nombreCompleto() ); 