
var frutas = ["Manzana","platano","cereza","fresa"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[2]);

//añadir un elemento al final del array
var masFrutas = frutas.push("Uvas");
console.log(frutas);

//eliminar solo el ULTIMO elemento del array
var ultimo = frutas.pop()

//inserta un nuevo elemento al COMIENZO del array
var nuevalongitud = frutas.unshift("pera");

//elimiar el elemento que esta en el INICIO
var borrarFruta = frutas.shift();

//saber la posicion del elemento en especifico
var posicion = frutas.indexOf("cereza");
console.log(posicion);
console.log(frutas[posicion]);





