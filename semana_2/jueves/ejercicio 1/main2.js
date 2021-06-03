
/* Hacer un programa en javascript en donde se le pregunte la edad al usuario 
y si el usuario tiene 18 años o mas y menos de 29 años, le impriman por consola 
que ha sido aceptado en el programa de generation, en caso de no ser así mostrar un 
mensaje indicando que no cumple los requisitos del programa
 */

//Declaracion de variables
var nombre= prompt ("Ingresa tu nombre")
var edad= parseInt (prompt('Ingresa tu edad'));

if (edad>=18 && edad <30) {
    alert("Felicidades"+ " "+ nombre + " "+ "has sido aceptado en Generation")
} else {
    alert("Lo sentimos," + " " + nombre +" no cumples con los requisitos")
}