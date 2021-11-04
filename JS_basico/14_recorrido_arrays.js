var articulos = [
    { nombre: "bici", costo: 3000 },
    { nombre: "tv", costo: 2500 },
    { nombre: "libro", costo: 320},
    { nombre: "celular", costo: 10000},
    { nombre: "laptop", costo: 20000},
    { nombre: "teclado", costo: 500},
    { nombre: "audifonos", costo: 1700}
];

// el metodo filter retorno los elementos de un array que cumplen que una condicion especifica
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

console.log(articulosFiltrados);


//map - devuelve un array que contenga los datos o valores especificados
//mapea todo el array y solo nos trae lo que estamos buscando en este caso es el nombre de los articulos
var nombreArticulos2 = articulos.map(function(articulo){
    return articulo.nombre;
});
console.log(nombreArticulos2)

//metodo find -  devuelve el primer elemento del array que coincida con lo que se pide o con respecto al condicional 
//PERO solo el primero que se encuentra ni dos ni tres ,solo la PRIMER coincidencia

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop";
});

console.log(encuentraArticulo);

//metodo foreach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some - solo devuelve true o false, es decir , nos dira si existen articulos con la validacion o condicion especificada
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos);

//

