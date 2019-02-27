/*2.- Nivel de videojuegos(nivel)

2.- Soy en personaje en un videojuego, y dependiendo del nivel tengo cierto título:
 Cuando empiezo soy “Aprendiz” si llego al nivel 10 evoluciono a “Acróbata” y si paso 
 del nivel 20 me hago un “ninja” ¿Que soy actualmente?

*/
/*
let a1 = [1,2, 3]
let a2 = ["aprendiz","intermedio","avanzado"]
*/

const readline = require ('readline')

const aprendiz = {
  nivel:9,
  titulo:"aprendiz"
}
const intermedio = {
  nivel:19,
  titulo:"intermedio"
}

const avanzado = {
  nivel:20,
  titulo:"avanzado"
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question ('Que nivel sos?', (answer) => {
 validarNivel(answer)
 rl.close();
})


//let input = 20
function validarNivel(input){
  if (input <= aprendiz.nivel){
    console.log("Vos sos: " + aprendiz.titulo)
  }else if (input <= intermedio.nivel ){
    console.log("Vos sos: " + intermedio.titulo)
  }else if(input >= avanzado.nivel){
    console.log ("Vos sos nivel: " + avanzado.titulo)
  }
}


/*
let i = 0
let j = 0

  for (i; i < a1.length; i++){

    for ( j; j< a2.length; j++) {

      result = a1[i]+a2[j]
      i++
      console.log (result)

  }

}
*/


