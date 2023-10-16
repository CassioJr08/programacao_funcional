const numbers = [1, 2, 3, 4 , 5, 6]

const sum = (total, elemento) => total + elemento

const total = numbers.reduce(sum)
console.log(total)

const avg = (acc, el , i, array) =>{
    if(i == array.length -1){
        return (acc + el) / array.length
    }else {
        return acc + el
    }
}

const resultado = numbers.reduce(avg)
console.log(resultado)
