/*--------------------------------------------------------------《 CLASE OBJECT 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Todas las clases heredan las caracteristicas de la clase object -------------------*/

class Persona {
    /*--------------------------------------------------------------《 ATRIBUTO STATIC 》------------------------------------------------------------------------------------*/
    /*-------------------------- ▀ Pertenece a la clase y no pertenece al objeto -------------------*/
    static contadorObjetosPersona = 0;

    /*--------------------------------------------------------------《 ATRIBUTO NO DECLARADO EN CONSTRUCTOR NI TIPO STATIC 》------------------------------------------------------------------------------------*/
    /*-------------------------- ▀ Pertenece al objeto creado a partir de la clase, se acceden por medio de la creación del objeto -------------------*/
    email = 'Valor default email';

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        /*-------------------------- ▀ Atributo static: Incrementar, no lleva this, debe llevar el nombre de la clase -------------------*/
        /*-------------------------- ▀ Se incrementa tanto en el padre como en el hijo por que el hijo manda llamar el constructor del padre -------------------*/
        Persona.contadorObjetosPersona++;
        console.log( 'Se incrementa contador: ' + Persona.contadorObjetosPersona );
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

    //Metodo, no es necesario agregar la palabra function
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    /*-------------------------- ▀ toString -------------------*/
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        /*--------------------------------------------------------------《 POLIMORFISMO 》------------------------------------------------------------------------------------*/
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }    

    /*--------------------------------------------------------------《 METODO STATIC 》------------------------------------------------------------------------------------*/
    /*-------------------------- ▀ El metodo static se asocia con la clase y no con el objeto -------------------*/
    static saludar(){
        console.log('Saludos desde Metodo static');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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
console.log( persona1.toString() ); //AQUI SE MANDA LLAMAR EL METODO NOMBRECOMPLETO PERO DE LA CLASE PADRE POR QUE SE TRABAJA CON ESA REFERENCIA (POLIMORFISMO)


/*-------------------------- ▀ Se crea el objeto de la clase hija con los atributos heredados de la clase padre y sus propios atributos -------------------*/
let empleado1 = new Empleado( 'Maria', 'Jimenez', 'Sistemas' );
console.log(empleado1);
/*-------------------------- ▀ En la siguiente linea confirmamos que se hereda el metodo get de la clase padre -------------------*/
console.log( empleado1._nombre ); 

/*-------------------------- ▀ ACCEDER AL METODO DEFINIDO EN EL PADRE -------------------*/
console.log( empleado1.nombreCompleto() ); 



/*-------------------------- ▀ Metodo toString -------------------*/
console.log( empleado1.toString()); //AQUI SE MANDA LLAMAR EL METODO NOMBRECOMPLETO PERO DE LA CLASE HIJO POR QUE SE TRABAJA CON ESA REFERENCIA (POLIMORFISMO)



/*--------------------------------------------------------------《 METODO STATIC 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se asocia unicamente con la clase y no con los objetos-------------------*/
/*-------------------------- ▀ No es posible llamar un método static desde un objeto -------------------*/
// persona1.saludar();
/*-------------------------- ▀ Se puede llamar el metodo static desde la clase utilizando el tipo de la clase -------------------*/
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);


/*--------------------------------------------------------------《 ATRIBUTO STATIC 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Se debe acceder por medio de la clase -------------------*/
 console.log(persona1.contadorObjetosPersona); //Se esta asignando al objeto, es como si se creara una nueva variable asociada, por eso arroja undefined
console.log( Persona.contadorObjetosPersona ); //Aqui si se accede a la variable static por medio del nombre de la clase
/*-------------------------- ▀ La clase hija tambien hereda la propiedad static -------------------*/
console.log(Empleado.contadorObjetosPersona);



/*--------------------------------------------------------------《 ATRIBUTO NO DECLARADO EN CONSTRUCTOR NI TIPO STATIC 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Acceder al atributo no static -------------------*/
console.log( persona1.email );
/*-------------------------- ▀ La clase hija tambien hereda el atributo no static -------------------*/
console.log( empleado1.email );
/*-------------------------- ▀ Por medio de la clase no se puede acceder y crea un nuevo atributo -------------------*/
console.log(Persona.email); 
/*-------------------------- ▀ Por medio de la clase hija tampoco se puede acceder y crea un nuevo atributo -------------------*/
console.log(Empleado.email);