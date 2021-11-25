/*  const lista = [
    100,
    200,
    300,
    500
]; */
 
let lista = [];


function añadirDato(){
 
  const inputList = document.getElementById("InputDato")
  const list = inputList.valueAsNumber; 
  lista.push(list);
  const resultadoLista = document.getElementById("resultadoLista");
  resultadoLista.innerText = "los datos de la lista son: " + lista;
  return lista;
}


function calcularMediaAritmetica(/*lista*/){
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
    console.log(promedioLista);
    const resultadoPromedio = document.getElementById("ResultP");
    resultadoPromedio.innerText ="el promedio de la lista es: " + promedioLista;
    return promedioLista;

    //calcularMediaAritmetica([1,14,151,98]);
}


