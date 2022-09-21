// function miFuncion(){
//     console.log('Saludos desde mi funcion');
// }


let miFuncion = function (){
    console.log('Saludos desde mi funcion');
}


/*--------------------------------------------------------------《 FUNCION FLECHA 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ No tienen nombre, son funciones anonimas -------------------*/
/*-------------------------- ▀ Se asignan a una variable, por ello no llevan nombre -------------------*/
/*-------------------------- ▀ Ya no se utiliza function, unicamente se reciben argumentos -------------------*/
/*-------------------------- ▀ Se coloca el operador => para indicar que va a comenzar una funcion flecha -------------------*/
/*-------------------------- ▀ Es comun que se utilice const en lugar de let para indicar que no se va a cambiar la referencia -------------------*/
const miFuncionFlecha = ()=>{
    console.log('Saludos desde mi funcion flecha');
}

/*-------------------------- ▀ Si es una sola linea se puede mandar -------------------*/
const funcionFlecha = ()=> console.log('Saludos desde mi funcion flecha');


/*-------------------------- ▀ NO SE PUEDE MANDAR LLAMAR ANTES DE CREARLA -------------------*/
miFuncionFlecha();

// const saludar = () =>{
//     return 'Saludos desde función flecha';
// }



/*-------------------------- ▀ Si solo lleva una linea se puede mandar llamar así -------------------*/
const saludar = () => 'Saludos desde función flecha';

console.log( saludar() );



/*-------------------------- ▀ Si se quiere regresar un objeto se modifican {} por () y se crea el arreglo ya que manda error de la otra forma ------------------*/
const regresarObjeto = () => ({nombre: 'Juan', apellido:'Lara'});
console.log( regresarObjeto() );





/*-------------------------- ▀ Recibir parametros, si es un parametro se omiten los parentesis -------------------*/
// const funcionConParametros = (mensaje)=> console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);

// const funcionConParametros = function(mensaje){
//     console.log(mensaje);
// }

funcionConParametros('Saludos con parametros');


/*-------------------------- ▀ Con varios parametros -------------------*/

// const funcionConVariosParametros = (op1, op2) => op1 + op2; //SIMPLIFICADO
const funcionConVariosParametros = (op1, op2) =>{  
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}

console.log(funcionConVariosParametros(2,5));