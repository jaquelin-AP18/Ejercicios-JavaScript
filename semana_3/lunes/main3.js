/**
 * Hacer una función donde le pasemos los parametros (nombre, apellidos, edad,)
 * esta funcion tendrá dentro un objeto
 * los datos que reciba la función llenarán el objeto.
 * La función debe retornar el objeto.

 */

function datos(nombre,apellidos,edad){
    return {

        nomb:nombre,
        ape:apellidos,
        ed:edad,
        
        persona: function (){
            console.log("Hola mi nombre es"+this.nomb+this.ape+" "+ "y tengo"+this.ed+" "+"años");
        },


    };
    

    };
    //(console.log("Hola: " + nombre + " "+ apellidos +" tienes"+""+ edad + "años")); //Esto es lo que se imprime  
    
        
        
//datos(saludo);
var Mipersona =datos('Jaquelin', 'Altamirano',22);
Mipersona.persona();
