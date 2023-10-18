Array.prototype.meuMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++){
        const result = fn(this[i], i, this)
        mapped.push(result)
        
    }
    return mapped
}

const myarray = [1,2,3,4,5,6]

console.log(myarray.meuMap(item => item * 2))