//parametros por defecto

//es6 actual

//parametros por defecto en las funciones
//es6
function newFunction2(name = 'oscar',age = 32, country = "MX"){
    console.log(name,age,country);
}
//por defecto
newFunction2();
//pasando parametros
newFunction2('ricardo', '23', 'CO');



//concatenacion
//es5
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);



//concatenacion multilinea

//es5
let lorem = "esta es simplemente una frase cualquiera para ...." 
+ "otra frase para demostrar que es multilinea"

//es6
let lorem2 =  `otra frase epica que necesitamos
ahora es otra frase epica
con esto demostramos que es multilina
nos ahorramos el +
`;

console.log(lorem);
console.log(lorem2);


//estructuracion y desestructuracion de elementos
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
};

console.log(person.name, person.age, person.country);

//desestructuracion de objetos

let {name, age, country} = person;
console.log( name,age,country);




//operador de propagacion (SPREAD)
let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];

// el operador spread se reconoce por ' ... ' este lo que hace es llamar esos arrays para que se añadan donde los usaremos
let education = ['david', ...team1, ...team2];
console.log(education);



//scope local y global

{
    var global = "global var";
}
{
    let globalLet = "global Let";
    //imprimir dentro del bloque de datos
    console.log(globalLet);
}
//var si se puede, ya que se asigna de forma global
console.log(global);
//recordar que let esta en bloque de datos por lo que no se puede imprimir aqui
console.log(globalLet);

//la constante es inmutable , por ende , nunca cambiara
const a = 'b';




//propiedad de objetos mejorada
let name = 'julian';
let age = 26;

//es5
obj = {name: name, age: age};

//es6
obj2 = {name, age};
console.log(obj2);



//arrow function = FUNCION ANONIMA

const names = [
    {name: 'julian', age = 26},
    {name: 'oscar', age = 32}
];
//es5
let listOfNames = names.map(function(item){
    console.log(item.name);
});
//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //codigo
}

const listOfNames4 = (name) => {
    //codigo
}

const square = num => num * num;



//promesas - asincronismo  -- estas son algo que va a pasar

const hellopromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hey!');
        }else{
            reject('ups');
        }
    });
}
//then - response es afirmativo
//catch - catch es error
hellopromise()
    .then(response => console.log(response))
    .then(() => console.log('hello'))
    .catch(error => console.log(error));






//clases

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));



/* //modulos
import { hello, bye as chao } from './module.mjs';
console.log(hello());
console.log(chao); */




//generators
//EL * dice que esto es un generator
function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'world';
    }

};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);



