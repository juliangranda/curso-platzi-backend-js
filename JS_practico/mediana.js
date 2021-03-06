function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

let lista = [];


function añadirDato(){
 
  const inputList = document.getElementById("InputDato")
  const list = inputList.valueAsNumber; 
  lista.push(list);
  const resultadoLista = document.getElementById("resultadoLista");
  resultadoLista.innerText = "los datos de la lista son: " + lista;
  return lista;
}

/*     const lista = [
        100,
        200,
        500,
        400000000,
      ]; */

function calcularMediana(/*lista*/){
    //ordenamos la lista
    lista.sort((a,b) => a - b);
    console.log(lista);

    //parseInt: convierte un numero float a int
    const mitadLista1 = parseInt(lista.length / 2);

    function esPar(numerito){
        if(numerito % 2 == 0){
            return true;
        }else{
            return false;
        }
    }

    let mediana;

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista1  - 1 ];
        const elemento2 = lista[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
        

        mediana = promedioElemento1y2;

        const resultadoMediana = document.getElementById("ResultP");
        resultadoMediana.innerText ="la Mediana de la lista es: " + mediana;

        return mediana = mediana;

       
    }else{

        mediana = lista[mitadLista1];
        const resultadoMediana = document.getElementById("ResultP");
        resultadoMediana.innerText ="la Mediana de la lista es: " + mediana;
        return mediana;
        
    }
}