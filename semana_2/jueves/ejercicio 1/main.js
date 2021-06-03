
/*Hacer un codigo que le pida al usuario 2 numeros a traves del prompt, 
Estos numeros los vamos a Sumar, restar multiplicar y dividir. Al final mostrar el resultado.*/

//Declarión de variables de tipo entero
var num1= parseInt (prompt('Ingresa el numero 1'));
var num2 = parseInt( prompt('Ingresa numero 2'));

//Varibles que calculan las operaciones
var suma=num1+num2;
var resta=num1-num2;
var mult=num1*num2;
var div=num1/num2;


//Mensajes en forma de alertas

alert ("La suma es: " + "" + suma + 
"\nLa resta es: " + "" + resta +
"\nLa multiplicación es: " + "" + mult+
"\nLa división es: " + "" + div);


/*
Para imprimir mensaje de JS por consola usamos console.log.
Esto funciona para realizar depuraciones y validar como devuelve
los datos el programa
*/
console.log("suma: " + suma);
console.log("resta: " + resta);
console.log("multiplicación: " + mult);
console.log("división: " + div);
