
// esse codigo ira excutar depois de 5 segundos
function intervalo(){ setInterval(() => console.count('Cassio'), 1000)}

setTimeout(() => {
    intervalo()
}, 5000)


// esse codigo ira parar depois de 5 segundos
const intervalo2 = setInterval(() => console.count('Cassio'), 1000);

setTimeout(() => {
    clearInterval(intervalo2); // Stop the interval after 5000 milliseconds
}, 5000);



// devo os usar separadamente