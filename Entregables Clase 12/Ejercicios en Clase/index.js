function saludo(persona) {
    console.log("Hola "+ persona);
}
saludo("Ramiro");


function sumar(n1,n2) {
    console.log(n1+n2);
}
sumar(3,2)


//* arrow function *//

 //* FUNCION BASE -> function sumar(a,b){..} *//

//* ARROW FUNCTION -> const sumar=(a,b)=>{..} *//


var resultado
var num1=3;
var num2=5;
function suma_y_muestra() {
    resultado=num1+num2;
    alert("El resultado es" + resultado);   
}
suma_y_muestra();


function calcularPrecioTotal(n1,n2){
    let precio =n1+n2;
    alert(`El resutado de ${n1} +${n2} es: ${resultado}`);
    
}
sumar(100,100);

//*template literal*//

//* llamar a la funtion se llama invocar*//

const perdirYsumar=(n1,n2)=>{
    let n1 = prompt("ingrese un numero");
    let n2 = prompt("Ingrese otro numero");
    let resultado = parseInt(n1)+ parseInt(n2);
    alert(el restado de ${n1}+${n2});
}


function calcularPrecioTotal(precio){
    var impuestos =1.16;
    var gatosEnvio=10;
    var precioTotal= (precio * impuestos) + gastosEnvio;
    alert("Su total a pagar: " + precioTotal); 
}

// llamada a la funcion

calcularPrecioTotal(50);