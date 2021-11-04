var valor;
var maquina;


function juego(valor, maquina){

    switch(true){
        case valor === maquina:
            console.log("empate");
            break;
        case valor === "piedra" && maquina === "tijera":
            console.log("ganaste");
            break;
        case valor === "papel" && maquina === "piedra":
            console.log("ganaste");
            break;
        case valor === "tijera" && maquina === "papel":
            console.log("ganaste");
        default:
            console.log("perdiste");
    }
}
juego("piedra","piedra");