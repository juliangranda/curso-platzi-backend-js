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
console.log(string.padEnd(12,' -----'))