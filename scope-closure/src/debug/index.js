/*
    para hacer el debug

    se hace uso de la palabra especial debugger
    pasos:
        -hacemos uso de la palabra debugger donde la necesitemos en el codigo
        -copiamos el codigo
        -vamos a inspeccionar en google chrome
        -en console ,pegamos el codigo
        -nos debe aparecer en el lado derecho nuestro codigo para poder analizar sus variable locales,valores,clousures,etc
*/

//ejemplo 1
var a = 'hello';

function hello(){
    let b = 'hello world';
    const c = 'hello world !';
    if(true){
        let d = 'hello world !!';

        debugger
    }
}
hello();


//ejemplo 2
const moneyBox = () => {
    debugger
    var saveCoins = 0;

    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`moneybox: $${saveCoins}`);
    };
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);


