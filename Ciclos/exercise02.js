/*
2.- Peso(peso, peso_ideal,  cambio_de_peso)
2.- Fui al nutriologo y me dijo que estaba gordito. Si mi peso
 es la variable peso y tengo que llegar al peso ideal ¿En cuantas
  semanas llegaré a ese peso si bajo “cambio_de_peso” kilos por semana?
*/

let pesoActual = 60 //input inicial
let peso_ideal = 50

let cambio_de_peso = 1

let peso = pesoActual
let i = 0;

for (i; peso > peso_ideal; i++){
    peso = peso - cambio_de_peso
console.log (i + ',' + peso)
}console.log ('Numero de semanas para alcanzar tu peso ideal ' + i)

