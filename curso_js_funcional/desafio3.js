function subtrair(a, b){
    return a - b
}

const somar = function(a, b){
    return a + b
}

function exec (fn , x, y){
    try{
        console.log(fn(x,y))
    }catch{
        console.log('Você passou uma função invalida')
    }
    
}

exec(somar, 10, 40)
exec(subtrair, 50, 10)
exec(23, 50, 10)