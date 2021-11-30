
const helloWorld = () => {
    const hello = 'hello world';
    console.log(hello);
};

helloWorld();
//console.log(hello);//error pq la variable hello esta dentro de una funcion es decir es una variable local y no se puede acceder de forma global

var scope = 'i am global';

const functionScope = () => {
    var scope = " iam just local";
    const func = () => {
        return scope;
    }
    console.log(func());
};

functionScope(); //referencia a la reasignacion de la variable local
console.log(scope); //hace referencia a la variable global





