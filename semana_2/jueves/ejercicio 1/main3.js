
/** 
Calcular el salario bruto y neto mensual y quincenal de una persona, 
el salario diario debe ser ingresado por el usuario a traves de promt (pago por día), 
los descuentos para calcular el sueldo netos serán sueldo bruto - ISR(30%)  - IMSS(10)
El salario bruto es lo que pagan pero sin descuentos
Neto implica los impuestos
 */


alert ("Calcula tu salario");

var sueldo= prompt('Ingresa tu sueldo');

//Variables para calcular el sueldo mensual y quincenal
var salarioquincenal=(15*sueldo);
var salariomensual=(salarioquincenal*2);

//varibles para calcular  ISR IMSS quincenal
var ISRQ=(salarioquincenal*0.3);
var IMSSQ=(salarioquincenal*0.1);

//varibles para calcular  ISR IMSS mensual
var ISRM=(ISRQ*2);
var IMSSM=(IMSSQ*2);

//varibles para calcular  impuestos quincenales y mensuales
var impuestoquincenal=(ISRQ+IMSSQ);
var impuestomensual=(ISRM+IMSSM);

//varibles para calcular  sueldo bruto y neto quincenal
var sueldobrutoQ=salarioquincenal;
var sueldonetoQ=(salarioquincenal-impuestoquincenal);

//varibles para calcular  sueldo bruto y neto mensual
var sueldobrutoM=salariomensual;
var sueldonetoM=(salariomensual-impuestomensual);

//Mensajes que muestran los resultados anidados
alert ("El sueldo bruto quincenal es: " + " " + sueldobrutoQ
+ "\nEl sueldo neto quincenal es: " + " " + sueldonetoQ +
"\nEl sueldo bruto mensual es: " + " " + sueldobrutoM +
"\nEl sueldo neto mensual es: " + " " + sueldonetoM);

/*
alert ("El sueldo bruto quincenal es: " + "" + sueldobrutoQ);
alert ("El sueldo neto quincenal es: " + "" + sueldonetoQ);
alert ("El sueldo bruto mensual es: " + "" + sueldobrutoM);
alert ("El sueldo neto mensual es: " + "" + sueldonetoM);
*/
console.log("El sueldo bruto quincenal es:" + sueldobrutoQ);
console.log("El sueldo neto quincenal es: " + sueldonetoQ);
console.log("El sueldo bruto mensual es " + sueldobrutoM);
console.log("El sueldo neto mensual es:" + sueldonetoM);
