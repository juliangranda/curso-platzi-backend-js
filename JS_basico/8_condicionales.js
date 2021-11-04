
var edad = 18;

if(edad === 18){
    console.log("Puedes votar, sera tu primera vez");
}else if(edad > 18){
    console.log("puedes votar de nuevo");
}else{
    console.log("aun no puedes votar");
}



//operador ternario
condition ? true : false;


var numero = 1;
var resultado = (numero === 1) ? "Si soy un uno" : "No soy un uno";
console.log(resultado);

//reto de piedra , papel o tijera

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3)
