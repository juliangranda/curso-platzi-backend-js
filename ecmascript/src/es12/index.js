
// 🧯 Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
message.show('Hola!');

//  👽 Promise Any


const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

//cuando cualquier promise se cumpla se ejecuta y ademas el primer promise que se ejecute hara que el resolve tenga so valor
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//  🦴 WeakRef(element);

class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
    //{...} logica
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
//and logico
console.log(isTrue &&= isFalse);


let isTrue = true;
let isFalse = false;
//or logico
console.log(isTrue ||= isFalse);


let isTrue = undefined;
let isFalse = false;
//operador para trabajar con valores undefined
console.log(isTrue ??= isFalse);