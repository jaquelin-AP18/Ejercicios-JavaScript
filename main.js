alert ("Hola Mundo");//se genera una alerta, es decir se genera una venta emergente
var nombre = "Jaquelin"; //Se declara una varible
var apellido = "Altamirano Pérez";
var edad= 22;

/*
Para imprimir mensaje de JS por consola usamos console.log.
Esto funciona para realizar depuraciones y validar como devuelve
los datos el programa
*/
console.log(nombre + " " + apellido);
console.log(nombre,apellido); //Otra alternativa para no tener que poner el espacio
console.log("Mi edad es: " + edad);

var numero = 11; //Tipo de dato entero
var otroNumero = "11"; //Tipo de datos string

console.log(typeof(numero)); //Declarión de variables de tipo número
console.log(typeof(otroNumero));//Declaración de varible como cadena de texto

/* Usar typeof nos ayuda a mostrar en consola el tipo de dato, en caso
de que el valor se encuentre dentro de comillas "", se identifica como
una cadena de texto (string)
 */
var base = prompt('Escribe la base del triángulo');
var altura = prompt('Escribe la altura del triángulo');
var resultado = (base * altura) /2 ;
alert ("El área del triángulo es: " + "" + resultado);


/** 
EL promp es como el input en JS o el Scanner en Java y viene como Texto
En java Script las variables toman el tipo de valor de inmediato
//parseInt() Permite el Casteo de tipo de datos.Convierte a numero,
ya podemos realizar la operación aritmetica. 
var base = parseint (prompt('Escribe la base del triángulo'));
var altura = parseInt (prompt('Escribe la altura del triángulo'));
var resultado = (base * altura) /2 ;
alert ("El área del triángulo es: " + "" + resultado);

 */

/** 
La buena practica de programación nos sugiera realizar el cambio de 
texto a numero
NaN significa "Not an Number"
 */