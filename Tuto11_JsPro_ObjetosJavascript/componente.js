//Tengo una variable persona, que es igual a una función, esto ya es un objeto
Persona = function(){
    //Añado variables
    var nombre;

    /*Creamos algunas funciones, los getters y setters
    Utilizamos this y colocando el nombre de la funcion 
    y será igual a otra funcion
    colocamos un parámetro para poder pasar el nombre*/
    this.setNombre = function(n){
        //Llamo a la variable y se iguala al param
        nombre  = n;
        //Llamo a la funcion imprimirNombre utilizando this, para
        //indicar que es una función del objeto persona, si no dará error
        this.imprimirNombre();
    }

    //Creo la función getNombre
    this.getNombre = function(){
        return nombre;   
    }

    //Función para imprimir nombre que está declardo en la consola
    this.imprimirNombre = function(){
    console.log(nombre); 
    }
    
}

