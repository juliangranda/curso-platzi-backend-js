//operador reposo o all : el cual puede extraer las propiedades de un objeto que aun no se ha construido


const obj = {
    name: 'julian',
    age: 26,
    country: 'CO',
};

let {name,  ...all} = obj;
console.log(name, all);


//propagacion o spread entre objetos
const obj = {
    name: 'julian',
    age: 26,
    
};

const obj1 = {
    ...obj,
    country: 'CO',
    
};

console.log(obj1);


//finally , permite ejecutar un bloque de codigo segun el caso

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject (new Error('test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))


    //reglas 
    
    const refexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = refexData.exec('2018-04-20')
    const year = match[1]
    const month = match[2]
    const day = match[3]

    console.log(year, month, day);