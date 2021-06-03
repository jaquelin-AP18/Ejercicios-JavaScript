/**
 * Crear un objeto persona como el ejemplo, tendrá nombre, apellidos, edad y tendrá un método saludar
"hola + su nombre" y método que diga cual es su edad.

 */

// Creamos un objeto de tipo persona
var persona ={
    nombre:['Hassiel', 'Martinez'],
    edad: 39,

    //Se crea el metodo de tipo saludo
    saludo: function(){
      //return alert("Hola "+ " " + this.nombre[0] + " " + this.nombre[1]);
      return (console.log("Hola "+ " " + this.nombre[0] + " " + this.nombre[1]));
    },

    //Se cre metodo para mostrar edad
    medad: function(){
        //return alert ("Soy"+ " "+ this.nombre[0]+ " "+ "y tengo"+ " "+ this.edad + " "+ "años");
        return (console.log("Soy"+ " "+ this.nombre[0]+ " "+ "y tengo"+ " "+ this.edad + " "+ "años"));
    }
};

//Retorno de los objetos
persona.saludo()
persona.medad()

