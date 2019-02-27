/*3. -Acceso al refrigerador(nombre, constraseña)

3.- Vivo con varios roomies y siempre me roban la comida, entonces le puse una contraseña
 al refrigerador. Tienes que hacer un programa que valide si mi nombre es el 
correcto y si mi contraseña también.

*/
const nombre = 'Yesica';
const contraseña = 'Welcome1'

let nombreIngresado= 'Yesica';
let contraseñaIngresada = 'Welcome1';

if (nombreIngresado === nombre && contraseñaIngresada === contraseña) {
    console.log('Bienvenido: ' + nombre)
}else if (nombreIngresado === nombre && contraseñaIngresada != contraseña){
    console.log('Contraseña incorrecta')
}else {
    console.log ('Usuario incorrecto')
}

    
