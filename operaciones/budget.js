//Presupuesto (ingreso1, ingreso2, gasto1, gasto2, gasto3)
//3.- Calcula tu dinero al final del mes
const yesica = {
    ingresos1: 1000,
    ingresos2: 1000
}

const expenses = {
    gasto1: 500,
    gasto2: 700
}

const ingresos = yesica.ingresos1 + yesica.ingresos2
const gastos = expenses.gasto1 + expenses.gasto2

console.log ('Ingresos mensuales $ ' + ingresos + '\n' + 'Gastas al mes $ ' + gastos + "\n" + 
'Tu dinero al final del mes es $ ' + `${ingresos - gastos}`)

