class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}


class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this.departamento}`;
    }
}

/*--------------------------------------------------------------《 POLIMORFISMO 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Multiples formas, en este caso multiples formas seria llamar al metodo de la clase padre o de la clase hija -------------------*/
//Se define un metodo fuera de las clases, es un metodo independiente o generico que recibe diferentes tipos
//Recibe la variable que va a indicar a que metodo de obtenerDetalles se indique, mandandole el tipo y este se sustituye en el console.log
function imprimir(tipo){ //tipo recibe la referencia y por eso se utiliza el metodo del padre o del hijo
    //A donde apunte se manda llamar su metodo obtenerDetalles
    console.log(tipo.obtenerDetalles()); //Como esta definido obtenerDetalles se puede mandar llamar con los dos tipos

    /*--------------------------------------------------------------《 INSTANCEOF 》------------------------------------------------------------------------------------*/
    /*-------------------------- ▀ Saber a que instancia pertenece -------------------*/
    /*-------------------------- ▀ Al inicio la clase de menor jerarquia y despues las ultimas de mayor jerarquia -------------------*/
    if(tipo instanceof Gerente){ 
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    } 

    else if(tipo instanceof Empleado) {
        console.log('Es un objeto de tipo Empleado');
        console.log(tipo.departamento); //Responde con el valor de undefined ya que no está en la case

    }
    else  if(tipo instanceof Object){
        console.log('Es un objeto de tipo Object');
    }
};

let empleado1 = new Empleado( 'Juan', 3000 );
// console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente( 'Carlos', 5000, 'Sistemas' );
// console.log(gerente1.obtenerDetalles());

imprimir(empleado1);
imprimir(gerente1);


