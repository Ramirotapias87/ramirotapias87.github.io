//*Heladeria Siempre Frio*//
let helado=150;
let topping=[Oreo=10,KitKat=15,Kinder=25];
let precio=[Oreo,KitKat,Kinder];
let precioFinal=precio+helado;


if(helado+Oreo){
    console.log("El helado cuesta $ "+precioFinal);
}else if(helado+KitKat){
    console.log("El helado cuesta $ "+precioFinal);
}else if(helado+Kinder){
    console.log("El helado cuesta $ "+precioFinal);
}else{
    console.log("No tenemos ese topping");
}


//*Pedido--SWITCH*//

const menu="carne, pescado o verduras"
switch(menu) {
    case "carne":
    console.log("se le ofrece vino tinto")
    break;
    case "pescado":
    console.log("se le ofrece vino blanco")
    break;
    case "verdura":
    console.log("se le ofrece agua")
    break;
    default:
        console.log("elija carne, pescado o verdura")
        break;
}
//* FOR *//
const carnes=["lomo","cuadril","nalga","peceto"];
for (let index=0; index < carnes.length; index++){
console.log("recorrer",index);
console.log(carnes[index]);
}
carnes.push("tortuguita");
for (let index=0; index < carnes.length; index++)
console.log(carnes);


//*WHILE*//
let count= numero;
let numero =11;
while(count<11){
    console.log("numero es más chico que 11");
    numero++
}