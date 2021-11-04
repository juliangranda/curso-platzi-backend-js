
var miAuto = {
    //propiedades
    marca: "toyota",
    modelo: "corolla",
    annio: 2020,
    //metodo
    detalleDelAuto: function(){
        //this hace referencia al objeto padre(miAuto)
        console.log(`auto ${this.modelo} ${this.annio}`);
    }
    

};

console.log(miAuto);
console.log(miAuto.modelo);
console.log(miAuto.marca);

console.log(miAuto.detalleDelAuto());










