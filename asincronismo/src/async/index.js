

const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do something Async'), 3000)
        : reject(new Error('error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}


console.log('before');
doSomething();
console.log('after');


//como capturar los errores
const anotherFunction = async () => {
    try{
        const something = await doSomething();
        console.log(something);
    }catch(error){
        console.error(error);
    }
}

console.log('before');
doSomething();
console.log('after');

