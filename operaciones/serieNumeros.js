let serie= [1,2,3,4,6,7,3,1,10]
let suma = 0
let index = 0

//////////Ciclo For /////////////////////////
for (index; index < serie.length; index ++){   
    suma = suma + serie[index]  
}
const total = suma / serie.length
console.log ("For loop result: "  + total)

//////////Ciclo while //////////////////////////
while (index< serie.length) 
{
    suma = suma + serie [index]
    index++
}
console.log ("While loop result: " + suma/serie.length);
