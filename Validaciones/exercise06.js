/*6.- Apuesta(shot1,shot2,shot3)
6.- Estoy jugando un juego de dados, gano si saco el mismo número 
en dos de los tres dados. Descubre si gané o no.*/


let shot1 = 4
let shot2 = 4
let shot3=3

if(shot1 == shot2 && shot2 == shot3) { // todos tienen el mismo numero true || true =  true
    console.log("Dados iguales = ganaste tres de tres ");
}else if (shot1 == shot2 || shot2 == shot3) { // false || true = true because or 
    console.log("Ganaste dos de tres ");
}else{
    console.log("perdiste"); //si los tres son falsos = false

}