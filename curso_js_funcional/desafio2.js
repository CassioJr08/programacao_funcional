// usando arrow function
const potencia = base => exp => Math.pow(base, exp)

const resultado = potencia(2)(2)
console.log(resultado)

// usando function declaration
function potencia2(base) {
    return function(exp){
        return Math.pow(base, exp)
    }
}

const resultado2 = potencia2(2)(8)
console.log(resultado2)