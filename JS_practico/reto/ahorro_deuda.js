
function ingreso_deuda(){
    const inputHogar = document.getElementById("InputHogar");
    const hogar = inputHogar.valueAsNumber;


    const inputServicios = document.getElementById("InputServicios");
    const serviciosPublicos = inputServicios.valueAsNumber;

    const inputComida = document.getElementById("InputComida");
    const comida = inputComida.valueAsNumber;

    const inputTransporte = document.getElementById("InputTransporte");
    const transporte = inputTransporte.valueAsNumber;

    const inputOcio = document.getElementById("InputOcio");
    const ocio = inputOcio.valueAsNumber;

    const inputOtros = document.getElementById("InputOtros");
    const otros = inputOtros.valueAsNumber;
    
    const inputIngresos = document.getElementById("InputIngreso");
    const ingresos = inputIngresos.valueAsNumber;
    
    const gastos = hogar + serviciosPublicos + comida + transporte + ocio + otros;
    resultado = ingresos - gastos;
    console.log({
        hogar,
        serviciosPublicos,
        comida,
        transporte,
        ocio,
        otros
    });
    
    const resultP = document.getElementById("ResultP");
    if(resultado >= 0){
        resultP.innerText = "tus ingresos y gastos estan balanceados. ingreso restante: $" + resultado;
    }else{
        resultP.innerText = "tus ingresos y gastos estan fuera de control. tus perdidas son: $" + resultado;
    }

    return resultado;
    
}

