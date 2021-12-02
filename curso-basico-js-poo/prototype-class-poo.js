//objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de html y css",
        "curso practico de html y css",
    ],
    aprobarCurso(nuevoCursito){
        //this hace referencia a un atributo dentro del objeto
        this.cursosAprobados.push(nuevoCursito);
    }
};

// hacer que natalia apruebe otro curso
//natalia.cursosAprobados.push("Curso de resposive design");
//natalia.name = 'nath';





//prototipo *****

function Student(name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

/*   //primera forma de crear un metodo en un objeto
     this.aprobarCurso = function (nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    } */
}
//segunda forma de crear un metodo en un objeto haciendo referencia al prototype
Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

//instancia del prototipo
const juanita = new Student(
    "juanita alejandra",
    15,
    [
        "curso de introduccion a la produccion de video juegos",
        "curso de creacion de personajes",
    ],

);


//prototipos con la sintaxis de clases

class Student2 {
    /*
        en el constructor enviamos los parametros como un OBJETO el motivo es para nuestra facilidad, es decir,
        es para recibir los parametros de forma desordenada y que no importe si quedo faltando algun parametro o no 
    */
    constructor({
        name,
        age,
        email,
        cursosAprobados = [],
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email
    }

    //metodos
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2({

    name:"miguel",
    age:28,
    email: "miguelito@hotmail.com"
});













