/* 7.- Restaurante (precio, individuos)
7.- Tus amigos van a un restaurante y se dividen la cuenta ¿Cuánto paga cada quien si se 
divide la cuenta en partes iguales y además dejan el 10% de propina?
*/

const friends = [ 1, 2, 3, 4]
const totalCuenta = 1000
const propina = .10
const cuentaMasPropina = totalCuenta * propina + totalCuenta


for (index = 0; index < friends.length; index ++){   
    total = cuentaMasPropina / friends.length  
}
console.log ('La cuenta es de: $' + totalCuenta + '\n'
            +'Incluyendo el 10% de propina es: $' + cuentaMasPropina + '\n'
            +'Si son ' + friends.length + ' personas, entonces cada quien pagara: $' + total)

