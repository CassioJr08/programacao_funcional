// this
Array.prototype.print = function(){
    console.log(this[this.length - 1])
}

const numeros = [1, 2, 3]

numeros.print()