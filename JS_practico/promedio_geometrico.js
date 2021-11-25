
//const list = [1,2,3,4,5,6,7,8];




function calcularPromedioGeometrico(list){
    const n_raiz = list.length;

    const producto = (list.reduce(function(previousValue, currentValue){
        return previousValue * currentValue;
    }));

    const promedioGeometrico = Math.pow(producto, (1 / n_raiz));
    return promedioGeometrico;
}