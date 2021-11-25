const lista = [
    100,
    200,
    300,
    500
];



function calcularMediaAritmetica(lista){
/*     let sumaLista = 0;
    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    } */

    //metodos para recorrer arrays
    //reducer: se utiliza para por medio de un argumento de una funcion(callback) este puede recorrer todos los
    //elementos del array e irlos sumando uno por uno para asi reducir el array

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
      );

//otro ejemplo segun MDN 
/*    const array1 = [1, 2, 3, 4];
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      
      // 1 + 2 + 3 + 4
      console.log(array1.reduce(reducer)); */

    const promedioLista = sumaLista / lista.length;
    return promedioLista;

    //calcularMediaAritmetica([1,14,151,98]);
}