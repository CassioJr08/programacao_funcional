function subtrair(a, b){
    return a - b
}

const somar = function(a, b){
    return a + b
}

function exec (fn , x, y){
    try{
        console.log(fn(x,y))
    }catch(err){
        console.log('Você passou uma função invalida ' + err)
    }
    
}

exec(somar, 10, 40)
exec(subtrair, 50, 10)
exec(23, 50, 10)



// outra forma

function exec2(fn, a, b){
    return fn(a , b)
}

const somar2 = (x, y) => console.log(x + y)
const subtrair2 = (w, z) => console.log(w - z)

exec2(somar2, 20, 40)
exec2(subtrair2, 50, 20)
