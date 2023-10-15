// map é responsavel por fazer trasnformações em elementos de uma array
// sempre retornar uma array do mesmo tamanho

const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map(elemento => elemento * 2)

console.log(numbers, numbersV2)

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 6.4},
    {name: 'Emma', score: 6.4},
    {name: 'Peter', score: 9.1}
]

const getScore = elemento => elemento.score

const result = students.map(getScore).map(Math.floor)

console.log(result)

