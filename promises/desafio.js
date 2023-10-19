const fs = require('fs')
const path = require('path')


const caminho = path.join(__dirname, 'arq.txt')
const dados = 'Cassio da Silva Araujo Junior'

fs.writeFileSync(caminho, dados)

new Promise(function(resolve, reject){
    fs.readFile(caminho, (err, data) => {
        if(dados){
            resolve(data.toString())
        }else if(err){
            reject(err)
        }
    })
    
})
.then(console.log)
