
var hello = "hello";
var hello = "hello + ";
let world = "hello world";
//let y const son inmutables por lo que no se puede reasignar la variable
//let world = "hello";

const helloWorld = "hello World!";
//console.log(hello);

const anotherFunction = () => {

    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globarVar = ' im global';
};
helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'im global';
};

anotherFunction();
console.log(globalVar);