//parametros por defecto

//es6 actual

//parametros por defecto en las funciones
function newFunction2(name = 'oscar',age = 32, country = "MX"){
    console.log(name,age,country);
}
//por defecto
newFunction2();
//pasando parametros
newFunction2('ricardo', '23', 'CO');

//concatenacion
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);