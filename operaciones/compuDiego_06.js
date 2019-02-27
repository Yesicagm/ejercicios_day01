//6.- Compu Diego (compu)
/*6.- Diego quiere comprar una compu, ¿Cuanto tiene que pagar si además del precio
 de la compu tiene que pagar el iva?
*/

const precioCompu = 46999
const iva = 1.16
const sinIva = precioCompu / iva 
const ivaIncluido =  precioCompu - sinIva 

console.log ('Total: $' + precioCompu + ' Incluye un IVA $' + ivaIncluido + ' ' +sinIva)