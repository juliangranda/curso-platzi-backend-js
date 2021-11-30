const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);

};
fruits();

//cambiar let por var y viceversa para entender
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

//si se usa var siempre mostrara el ultimo resultado pq se esta reasignando
//si se usa let se va a mostrar todo el proceso de 1 a 10
const anotherFunction = () => {
    for(let i = 0; i < 10; i++){
        setTimeout(() =>{
            console.log(i);
        }, 1000);
    }
};

anotherFunction();