let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia'])
})

p.then(function(valor){
    return valor[0]
}).then(primeiro => primeiro[0])
.then(letra => letra.toLowerCase())
.then(console.log)