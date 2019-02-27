/*4.- Herencia a nietos (jose, juan, herencia)
4.- Juan y jose inician con una cantidad de dinero diferente cada quien. 
Su abuelita les deja una herencia que se divide entre los dos en partes iguales -
 ¿Cuánto dinero tienen entre los 2  y cuanto dinero tiene cada uno después de recibir la herencia?
*/
const brothers = {
    juan: 600,
    jose: 500
}
const abuela = {
    cantidad: 1000
}
function sumaBrothers() {
  return  brothers.juan + brothers.jose;
}
function herenciaAbuela() {
    return abuela.cantidad + brothers.jose;
  }
  function herenciaAbuela2() {
    return abuela.cantidad + brothers.juan;
  }
console.log ('Juan tene $' + brothers.juan + ' pesos y Jose tiene $' + brothers.jose + ' pesos; entre los dos tienen: $' + sumaBrothers())
console.log ('Jose tiene despues de la herencia: ' + herenciaAbuela())
console.log ('Juan iiene despues de la herencia: ' + herenciaAbuela2())

