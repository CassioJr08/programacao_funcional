// Anonymous function
(function (a, b, c){
    return a +b + c
})

// function expression

const sum = function(a, b){
    return a + b
}

console.log(sum(7, 50))

const anotherSum = sum

console.log(anotherSum(5, 5))