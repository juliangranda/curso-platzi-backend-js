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

//aqui interactuamos con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");
    
    const lado1 = Number(input1.value);
    const lado2 = Number(input2.value);
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("InputTrianguloBase");
    const input2 = document.getElementById("InputTrianguloAltura");
    const base = input.value;
    const altura = input2.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}


function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const diametro = diametroCirculo(radio);
    alert(diametro);
}



