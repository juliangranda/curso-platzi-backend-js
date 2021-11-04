//hoisting: es cuando las variables y las funciones se declaran antes de que 
//se procese cualquier tipo de codigo

console.log(miNombre);
var miNombre = "julian";
//sale que la variable es undefined por el hosting

//hoisting
var miNombre = undefined;
console.log(miNombre + "soy ese hoisting");
miNombre = "julian";



//error con funciones por hoisting
hey();
function hey(){
    console.log("hola " + miNombre2);

}
var miNombre2 = "david";

