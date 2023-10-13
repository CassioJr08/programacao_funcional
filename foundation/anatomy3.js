const increment1 = function(n){
    return  n + 1
}

const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n =>  n + 1 // se nao usar chaves, o return é feito automaticamente


console.log(increment1(1))
console.log(increment2(2))
console.log(increment3(5))
console.log(increment4(10))

const sum = (a, b) => a + b

console.log(sum(3,12))