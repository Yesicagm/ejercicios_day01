/*Memify (valor_startup)
 Memify es una startup que de dedica a hacer memes, hay 2 socios con el 50% de acciones cada una. 
 ¿Cuánto dinero se queda cada quien si venden la startup y tienen que pagar el iva de su ganancia?
*/
const acciones = 1000
const iva = 1.16
const sinIva = acciones  / iva
const ivaIncluido =  acciones - sinIva 


console.log('cada quien obtiene: ' + sinIva + '\n'
            + 'el iva a pagar es: '+ ivaIncluido + '\n'
    )

