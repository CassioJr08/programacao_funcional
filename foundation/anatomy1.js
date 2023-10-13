// function declaration

function sayHello(){
    console.log('Hello')
}

let x = sayHello()
console.log(x)

function sayHelloTo(name){
    console.log('Hello '+ name)
}

sayHelloTo('Cássio')
sayHelloTo()

function returnHi(){
    return 'Hi!'
}

let greeting = returnHi()
console.log(greeting)

function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo('Junior'))