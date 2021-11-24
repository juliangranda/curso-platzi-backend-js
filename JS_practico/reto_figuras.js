/*function calcularAlturaIsosceles(lado1){
    if(lado1 === lado2 && lado1 !== base){
        
        
    }else{
        alert("ingrese los datos de nuevo no es un triangulo isosceles")
    }
    //var altura =  Math.sqrt(Math.pow(lado1,2) - Math.pow((base / 2), 2))
    const altura = lado1 * 2;
    alert(altura);
    return altura;
}*/

function alturaIsosceles(lado1,lado2,base){
    if(lado1 === lado2 && lado1 !== base){
        const altura =  Math.sqrt(lado1**2 - (base / 2)**2);
        return altura;
        
    }else{
        alert("ingrese los datos de nuevo no es un triangulo isosceles")
    }
    
    
}  

function calcularAlturaIsosceles(){
    const inputlado1 = document.getElementById("InputLado1Isosceles");
    const inputlado2 = document.getElementById("InputLado2Isosceles");
    const inputbase = document.getElementById("InputbaseIsosceles");
    const lado1 = inputlado1.value;
    const lado2 = inputlado2.value;
    const base = inputbase.value;

    const altura = alturaIsosceles(lado1,lado2,base);
    alert(altura);
   
}