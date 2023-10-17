// somar (3) (4) (5)
const somar = function(a){
    return function(b){
        return function (c){
            return a + b + c
        }
    }
}

const resultado = somar(3)(4)(5)
console.log(resultado)

// calcular(3)(7)(fn)
function multiplicar(a, b){
    return a * b
}

const calcular = function(a) {
    return function(b){
        return function (fn){
            if(typeof fn === 'function'){
                return fn(a,b)
            }
        }
    }
}

const resultado2 = calcular(10)(5)(multiplicar)
console.log(resultado2)


// usando arrow function e if ternario
const calcular2 = a => b => fn => typeof fn === 'function' ? fn(a,b) : 'Você não passou uma função valida'

const resultado3 = calcular2(10)(10)(5)
console.log(resultado3)
