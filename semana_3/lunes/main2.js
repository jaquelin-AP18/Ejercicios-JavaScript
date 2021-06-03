/**
 * Hacer una función donde le pasemos los parametros (nombre, apellidos, edad,)
 * esta funcion tendrá dentro un objeto
 * los datos que reciba la función llenarán el objeto.
 * La función debe retornar el objeto.

 */

function datos(nombre,apellidos,edad){ //Se declara la funcion

    var persona={ //De declara el objeto y se iguala con los valores de la funcion
        nombre:nombre,
        apellidos:apellidos,
        edad:edad,

        saludo: function(){//Se cre la funcion dentro del objeto persona
            console.log("Hola mi nombre es " +this.nombre+ " "+ this.apellidos);//Imprimimos los datos del objeto
        },

        medad:function(){//Se crea la funcion dentro del objeto persona
            console.log("Mi edad es: "+ this.edad);//Imprimimos los datos del objeto
        }

    }
    return persona    //Retornamos los valores del objeto persona

}
//Creamos una variable nueva para llenar el objeto
var mostrardatos=datos('Jaquelin', 'Altamirano',22);
mostrardatos.saludo();//Mostramos la funcion
mostrardatos.medad();
