const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true}
]

// 1. fragil: true
const frageis = carrinho.filter(f => f.fragil)
console.log(frageis)

//2. qtde: 4, preco: 27.10 -> total
const total = frageis.map(t => t.qtde * t.preco)
console.log(total)

// 3. media totais
const media = total.reduce(function(acc, el , i , array){
    if(i == array.length - 1){
        return (acc + el) / array.length
    }else{
        return acc + el
    }
})

console.log(media)