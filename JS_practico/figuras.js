//codigo del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("los lados del cuadrado mide: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado){
    return lado * 4;
}  
//console.log("el perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado
} 
//console.log("el area del cuadrado mide: " + areaCuadrado + "cm^2");
console.groupEnd();

console.group("triangulos");
//codigo del triangulo

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "los lados del triangulo miden: "
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm"
   ); */

/* const alturaTriangulo = 5.5;
console.log("la altura del triangulo es de: "+ alturaTriangulo + "cm"); */

/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo es de: "+ perimetroTriangulo + "cm"); */

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

/* const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("el area del triangulo es de: "+ areaTriangulo + "cm^2"); */
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

//codigo del circulo
/* console.group("circulo");
const radioCirculo = 4;
console.log("el radio del circulo es: " + radioCirculo + "cm"); */
/* const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo es: " + diametroCirculo + "cm"); */
function diametroCirculo(radio){
    return radio * 2;
}
const pi = Math.PI;
console.log("el valor de pi es: " + pi + "cm");
/* const perimetroCirculo = diametroCirculo * pi;
console.log("el perimetro del circulo es: " + perimetroCirculo + "cm"); */
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return  diametro * pi;
}
/* const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("el area del circulo es: " + areaCirculo + "cm^2"); */
function areaCirculo(radio){
    return (radio * radio) * pi;
}


console.groupEnd();





