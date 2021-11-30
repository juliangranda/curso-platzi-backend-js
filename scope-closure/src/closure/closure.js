const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`moneybox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);


//closure buen funcionamiento

const moneyBox = () => {
    var saveCoins = 0;

    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`moneybox: $${saveCoins}`);
    };
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);




