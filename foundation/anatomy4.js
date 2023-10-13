// Anonymous function
// IIFE - Immediately Invoked Function Expression
(function (a, b, c){
    let x = 3
    console.log(a + b + c)
    console.log(x)
})(1,2,3);

(function (){
    let x = 3
    console.log(x)
})();

(()=>{
    console.log('arrow')
})();
