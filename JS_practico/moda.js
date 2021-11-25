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

function calcularModa(lista1){
    const lista1Count = {};
    
    //herramienta de array map: map itera sus elementos en orden de insercion un bucle for que devuelve una matriz de [key,value] para cada iteracion.
    lista1.map(
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
    return moda;
}

