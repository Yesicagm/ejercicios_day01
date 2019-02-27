/*Promedio(examen1, examen2, examen,3)
4.- Tengo 3 examenes este semestre y mi papá me dijo que me daría un 
premio si tengo un promedio final de 8.5 o más, pero si repruebo me va 
a castigar.  ¿Cual fue mi destino?

////////asi lo hice ://////////

const examenes = {
   examen1:5,
   examen2:7,
   examen3:9
}
let promedio;
let promedioEsperado = 8.5;
function total () {
   promedio = (examenes.examen1 + examenes.examen2 + examenes.examen3) / 3;

}total ();

if (promedio >= promedioEsperado){
   console.log(“Promedio de: ” + promedio + “Felicidades! ganaste un premio”)
}else if (promedio >= 6 ){
   console.log(“No ganaste premio, pero has pasado el semestre :3, tu promedio fue de: ” + promedio)
}else {
   console.log(“Has reprobado, promedio final de: ” + promedio)

}
*/
////////solucion de Enrique /////
let ex1=5;
let ex2=7;
let ex3=9;
let promedio = (ex1+ex2+ex3)/3;
if(ex1<6 || ex2<6 || ex3<6) {
    console.log("tronaste");
}else {
    console.log("tu promedio es "+promedio);
}