//transformar un objeto a matriz
const data = {
    frontend: 'julian',
    backend: 'isabel',
    design: 'ana'
}

const entries = Object.entries(data);
console.log(entries);

//cuantos elementos tiene un objeto o arreglo
console.log(entries.length);



//transforma los valores de un objeto en un array
const data = {
    frontend: 'julian',
    backend: 'isabel',
    design: 'ana'
}

const values = Object.values(data);
console.log(values);



//
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));



//async await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('test error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async() => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};
anotherFunction();