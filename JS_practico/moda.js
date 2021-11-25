/* const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1

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



function calcularModa(/*lista1*/){
    const lista1Count = {};
    
    //herramienta de array map: map itera sus elementos en orden de insercion un bucle for que devuelve una matriz de [key,value] para cada iteracion.
    lista.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
            
        }
    );
    //Object.entries() : acepta un argumento o un objeto que queramos convertir a un array, recordar que tiene un array dentro de otro array
    const lista1Array = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1];
    const resultadoModa = document.getElementById("ResultP");
    resultadoModa.innerText ="la moda de la lista es: " + moda[0] + " y se repite " + moda[1] + "veces";
    return moda;
}

