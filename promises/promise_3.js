function gerarNumerosentre(min, max){
    if(min > max) [max, min] = [min, max] // posso usar {} ou não

    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosentre(10,11)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)
