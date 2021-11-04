
var estudiantes = ["maria","sergio","rosa","daniel"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++ ){
    //console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]);
}

//foreach/for of     index - array
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}


while(estudiantes.length > 0){
    console.log(estudiantes);
    //remueve el elemento del array y guarda el elemento en una variable
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
