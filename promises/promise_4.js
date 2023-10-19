function gerarNumerosentre(min, max, tempo){
    if(min > max) [max, min] = [min, max] // posso usar {} ou não

    return new Promise(resolve =>{
        setTimeout(function(){
            const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
        },tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosentre(1, 60, 4000),
        gerarNumerosentre(1, 60, 1000),
        gerarNumerosentre(1, 60, 500),
        gerarNumerosentre(1, 60, 3000),
        gerarNumerosentre(1, 60, 100),
        gerarNumerosentre(1, 60, 1500),
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))