/*1.- Promedio
1.- A Daniel le acaban de mandar una lista con sus calificaciones, 
quiere saber si su promedio es suficiente para tener una beca este año, 
el promedio mínimo que necesita es 8, el programa recibirá la cantidad de 
calificaciones y un arreglo de calificaciones para poder calcular el resultado

*/

const calificaciones = [8,9,7,10,7,8]
let promedioMinimo = 8
suma = 0
let promedio = 0
let i = 0
for (i; i < calificaciones.length; i++){
    suma =   suma + calificaciones[i]
   
} 
promedio = suma / calificaciones.length

if (promedio >= promedioMinimo){
    console.log ("Has aprobado, tu promedio fue de : " + promedio)
}else{
    console.log("No aprobaste, tu calificacion es " + promedio)
}