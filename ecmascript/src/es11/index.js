const button = document.getElementById("btn");

button .addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});




// 🔢 Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// 🤝 Promise All Settled
//es una promesa que se ejecuta despues de que todas las promesas dadas se hallan cumplido, es decir , todas den como resultado en RESOLVE

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining - se usa mucho cuando se trabaja con objetos

//lo que hacen los '?' es que le dice al programa que no rompa la aplicacion cuando este buscando el email pq
//no lo encontrara pero que de todas formas no rompa la aplicacion y convierte el valor de email en undefined por lo que podemos hacer validaciones con el valor undefined

const user = {};
console.log(user?.profile?.email);

//aplicando con el valor de undefined si email no existe, pero si email existe se usa ese correo
if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}

//

