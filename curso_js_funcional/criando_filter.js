Array.prototype.meuFilter = function(fn) {

    const filtro = []
    for(let i = 0; i <= this.length; i++){
        const result = fn(this[i], i, this)
        if(result){
            filtro.push(this[i])
        }
    }

    return filtro

}

const myarray = [1,2,3,4,5,6]

console.log(myarray.meuFilter(item => item < 7))