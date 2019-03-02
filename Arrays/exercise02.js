/* 
2.- Asistencia
2.- Joel quiere ver el porcentaje de veces que falto a clases,
 el programa recibirá la cantidad de asistencias y un arreglo de asistencias 
 para poder calcular el resultado, cada elemento esta representado por un valor booleano

*/
let listaAsistencia = [true, false, true, false] //leer asistenciaTotal
let cantidadFaltas = 0 //mis faltas 
 
let nAsistencias = listaAsistencia.length

for (let i=0; i < nAsistencias; i++){
    let asistencia = listaAsistencia[i]
    if (asistencia === false) {// !asistencia 
        cantidadFaltas = cantidadFaltas + 1
    }
}

let porcentaje = cantidadFaltas / nAsistencias * 100 //operacion para sacar porcentaje
console.log ("porcentaje de faltas: " + porcentaje)





