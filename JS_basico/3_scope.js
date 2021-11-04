//el scope es el alcance que tiene una variable


//scope global
var miNombre = "julian";


function nombre(){
    //apellido es una variable en scope local
    //el scope local seria solo las variables dentro de la funcion
    var miApellido = "gomez";
    console.log(miNombre + " " + miApellido);
}
nombre();
console.log(miNombre);
// console.log(miApellido);error scope global no accede a scope local

//nota: desde el scope local se puede acceder a variables en el scope global,
//pero no viceversa

