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

//Mensajes que muestran los resultados
alert ("El sueldo bruto quincenal es: " + "" + sueldobrutoQ);
alert ("El sueldo neto quincenal es: " + "" + sueldonetoQ);

alert ("El sueldo bruto mensual es: " + "" + sueldobrutoM);
alert ("El sueldo neto mensual es: " + "" + sueldonetoM);


