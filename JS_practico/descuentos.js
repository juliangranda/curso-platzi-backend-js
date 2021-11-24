
//const precioOriginal = 120;
//const descuento = 18;
const coupons = [
    "juanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
];
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue){
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 30;
        break;
        case coupons[2]:
            descuento = 25;
        break;
    }
    console.log({priceValue,couponValue,descuento})
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    //hacemos referencia al parrafo por medio de document.getelementbyid en el archivo html
    const resultP = document.getElementById("ResultP");
    //inner.text lo que hace es escribir en el archivo html haciendo referencia al nombre del id 
    resultP.innerText = "el precio con descuento son: $" + precioConDescuento;
}


/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}); */

