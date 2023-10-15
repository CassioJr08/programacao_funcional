const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = elemento => elemento > 0
const greaterThanTen = elemento => elemento > 10
const even = elemento => elemento % 2 === 0

console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanTen))
console.log(numbers.filter(even))

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 6.4},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const greatStudent = students => students.score >= 9

console.log(students.filter(greatStudent))
console.log(students)


