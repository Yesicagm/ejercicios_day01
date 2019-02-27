/*5.- Horario(Día)

5.- Estoy inscrito a muchas clases porque me gusta aprender:
Los lunes y miércoles voy a Historia, los martes a natacion, 
los jueves a esgrima y los demás días descanso. Dime a qué clase voy si te digo un día.*/
var dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado','domiingo'];

let diasSelect = dias[2]

switch (diasSelect) {
    case 'lunes':
    console.log ('El dia ' + dias[0] + ' historia')
    break;
    case 'martes':
    console.log ('El dia ' + dias[1] + ' natacion')
    break;
    case 'miercoles':
    console.log ('El dia ' + dias[2] + ' historia')
      break;
    case 'jueves':
    console.log ('El dia ' + dias[3] + ' historia')
      break;
    case 'viernes':
    console.log ('El dia ' + dias[4] + ' descanso')
      break;
    case 'sabado':
    console.log ('El dia ' + dias[5] + ' descanso')
      break;
    case 'domingo':
    console.log ('El dia ' + dias[6] + ' descanso')
  }













/*
if (diasSelect == dias[0]){
    console.log("el dia " + diasSelect+ ' voy a ' + materia [0])
}else if (diasSelect == dias[1]){
    console.log("el dia " + diasSelect+ ' voy a ' + materia [1])
}else if (diasSelect == dias[2]){
    console.log("el dia " + diasSelect+ ' voy a ' + materia [0])
}else if (diasSelect == dias[3]){
    console.log("el dia " + diasSelect+ ' voy a ' + materia [2])
} else if (diasSelect == dias[4]){
    console.log("el dia " + diasSelect + ' ' +  materia [3])
}else {
    console.log('El resto ' + materia [3])

}*/
