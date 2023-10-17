const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

console.log('Inicio...1')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (err, data) => console.log(data.toString()))
console.log('Fim...1')


console.log('Inicio...2')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim...2')