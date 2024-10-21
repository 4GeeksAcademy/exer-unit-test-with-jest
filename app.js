// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInToYen = valueInEuro * 156.5;
    // Retornamos el valor en dólares
    return valueInToYen;
}

const fromYenToPound	 = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInPound = valueInEuro * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}








// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))
console.log(fromEuroToDollar(18))
console.log(fromDollarToYen(18))
console.log(fromYenToPound(18))


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};

