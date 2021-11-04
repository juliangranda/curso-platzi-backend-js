
//manera manual

//constructor
function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("tesla","model 3",2020);
console.log(autoNuevo);
var autoNuevo2 = new auto("tesla","modelo x", 2018);
var autoNuevo3 = new auto("toyota","corolla", 2020);

console.log(autoNuevo2);
console.log(autoNuevo3);




//manera automatica
var autos = [];
var cantidadAutosRegistrados = 0;

cantidadAutosRegistrados = prompt("numero de autos registrados");

function automatica(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for(var i = 0; i < cantidadAutosRegistrados;i++){
    console.log(`Este es el auto numero: ${i}`);
    var marca = prompt("ingrese la marca del auto: ");
    var modelo = prompt("ingrese el modelo del auto: ");
    var annio= prompt("ingrese el annio del auto: ");

    autos.push( new automatica(marca,modelo,annio));
};
console.log(autos);

