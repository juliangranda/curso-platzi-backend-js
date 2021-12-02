const juan = {
    name: "juanito",
    age: 18,
    approvedCourses: ["curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};


//propiedades estaticas de Object


/* console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
console.log(Object.entries(juan)[2][0]);

 */
//object.seal nos ayuda a evitar que las propiedades se puedan borrar, es decir, enumerable = false
//Object.seal();

//object.freeze hace que nuestras propiedades no se puedan borrar y tampoco sobreescribir, es decir, enumerable = false, writable =False
Object.freeze();


console.log(Object.getOwnPropertyDescriptors(juan));




//crear nuevas propiedades en nuestro objeto
/* Object.defineProperty(juan, "navigator", {
    value: "chrome",
    enumerable: false,
    writable: true,
    configurable: true,

})

Object.defineProperty(juan, "pruebaNASA", {
    value: "extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,

})

Object.defineProperty(juan, "editor", {
    value: "vsCode",
    enumerable: true,
    writable: false,
    configurable: true,

})

Object.defineProperty(juan, "terminal", {
    value: "wsl",
    enumerable: true,
    writable: true,
    configurable: false,

}) 

console.log(Object.getOwnPropertyDescriptors(juan));*/

/*
lo siguiente se da con.

console.log(Object.getOwnPropertyDescriptors(juan));

    notas:

        -cuando el "enumerable " es false y aplicamos la propiedad estatica object.keys(objeto)
        este no saldra enumerada, pero si aparecera enumerada si usamos Object.getOwnPropertyNames(objeto),
        permite eliminar propiedades de los objetos

        -cuando el "writable " es false no nos permite editar de nuevo el objeto, es decir,
        si el nombre del objeto es juan( juan.editor => muestra vsCode) y luego tratamos de modificar o editar
        dicho objeto asi: juan.editor = atom, cuando lo volvamos a llamar nada va a cambiar y como resultado dara vsCode
        todo esto se debe a que "writable " es false 

        -cuando "configurable" es false ,no permite  o impide que podamos eliminar o borrar  atributos o propiedades
        de nuestros objetos

        -cuando las 3 son falses, 
*/