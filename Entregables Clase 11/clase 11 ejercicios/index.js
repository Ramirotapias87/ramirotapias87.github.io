let nombre="Ramiro";
let apellido="Tapias Broder";

console.log(nombre+" "+apellido);

let num1=10;
let num2=15;
let suma=num1+num2;
console.log(suma);


let numx= 25
let resultado=("suma",numx);
console.log(suma+numx);

//*SI (mayorEdad >=18){…...}SINO{...}//*

const mayorEdad=18;
if(mayorEdad >= 18){
    console.log("Es mayor de edad");
}else{
    console.lo("Es menor de edad");
}

//*ANIDACION SI (CONDICION){}SINO SI...//*

let nota= 3;
if (nota < 4){
    console.log (’aplazado’);
} else if (nota < 7) {
console.log(’Desaprobado’);
} else if (nota < 9) {
console.log(’Aprobado’);
} else {
console.log(’Sobresaliente’);
}
 //*Switch Case switch(CONDICION){casos}//*
 let expr= "Adios";
switch (expr) (
case 'Hola' :
comsole.log ("Buenos Dias");
break;
case 'Adios'
consolo.log("hasta Pronto");
break;
case 'Ayuda":
console. log ("En que te puedo Ayudar?");
break
default:
console. log("Disculpa no te entiendo");
}

let ejercicio = "Lunes"
switch (ejercicio) {
case "Lunes"
console.log("Caminata de 5 km");
break;
case "Martes":
console.log("Caminata de 10 km");
break;
case "Miercoles" :
console.log("Correr 5 km");
break;
case "Viernes":
console.log("correr 10 km")
break;
defeult:
console.log("Descanso");
}
const palabra = "hola";
switch (palabra) {
  case "hola":
    console.log("buenos dias");
    break;
  case "adios":
    console.log("hasta pronto");
    break;
  default:
    console.log("Hola mundo");
    break;
}


//*ITERACION *//
//*FOR*//

let nombre =["Diego", "Anabel", "Esteban"];
console.log(nombre);
console.log(nombre[0]);
console.log(nombre[2]);
console.log("Cantidad de nombre:", nombre.length);
for(let i = 0; i< nombre.length; i++){
console.log(nombre[i])
}

//*    I++ es lo mismo que hacer i=i+1  //*

//*i<3 nombre[i] //*
//* 1er vuelta -> nombre[0] //*
//* 2da vuelta -> nombre[1] //*
//*3er vuelta -> nombre[2] //*


const nombres = ["MARCOS", "PRISCILA", "RAMIRO"];
for (let index = 0; index < nombres.length; index++) {
  console.log(nombres[index]);
}

const frutas = ["..", "..", "..", "..", "..", "..", ".."];
for(let i=0; i<frutas.length; i++) {
console.log("El elemento es: " + frutas[i])
}
//*push() agrega valor de la lista//*
const frutas = ["🍎", "🍏"];
for (let index = 0; index < frutas.length; index++) {
  console.log("El elemento es: ", frutas[index]);
}
const nombres = ["MARCOS", "PRISCILA", "RAMIRO"];
nombres.push("NATALIA");
console.log(nombres);


//*pop()- elimina valor de la lista//*
const nombres = ["MARCOS", "PRISCILA", "RAMIRO"];
nombres.push("NATALIA");
console.log(nombres);
nombres.pop();
console.log(nombres);



//*WHILE==MIENTRAS//*

let count = 50;
let contador = 0;
while (count > contador) {
  console.log("Hola chicos RD");
  contador++;
}