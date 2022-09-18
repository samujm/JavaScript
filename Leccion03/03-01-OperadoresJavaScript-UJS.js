let a = 3, b = 2;

let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b;
console.log("Resultado de operación módulo (residuo): " + z);

z = a ** b;
console.log("Resultado de operador exponente: " + z);

/*--------------------------------------------------------------《 INCREMENTO 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Pre-incremento (el operador ++ antes de la variable) -------------------*/
/*-------------------------- ▀ Se incrementa primero y despues se asigna -------------------*/
z = ++a;
console.log(a);
console.log(z);

/*-------------------------- ▀ Post-incremento (el operador ++ despues de la variable) -------------------*/
/*-------------------------- ▀ Primero se utiliza el valor original de la variable y despues se incrementa -------------------*/
z = b++;
console.log(b);
console.log(z);

/*--------------------------------------------------------------《 DECREMENTO 》------------------------------------------------------------------------------------*/
/*-------------------------- ▀ Pre-decremento (el operador ++ antes de la variable) -------------------*/
/*-------------------------- ▀ Se decrementa primero y despues se asigna -------------------*/
z = --a;
console.log(a);
console.log(z);

/*-------------------------- ▀ Post-decremento (el operador ++ despues de la variable) -------------------*/
/*-------------------------- ▀ Primero se utiliza el valor original de la variable y despues se decrementa -------------------*/
z = b--;
console.log(b);
console.log(z);