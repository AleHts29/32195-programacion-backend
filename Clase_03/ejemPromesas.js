// Ejemplo de anidamientos de promesas
// Promise.resolve(10)
//     .then(x => x + 1)
//     .then(x => x * 2)
//     .then(x => {
//         if (x === 22) throw 'Error ejecucion'
//         else return 80;
//     })
//     .then(x => x + 1)
//     .then(x => x + 1)
//     .catch(console.log)


// evitamos el error
Promise.resolve(15)
    .then(x => x + 1) // 16
    .then(x => x * 2) // 32
    .then(x => {
        if (x === 22) throw 'Error ejecucion'
        else return 80;
    })
    .then(x => x + 30) // 110
    .then(x => x / 2) // 55
    .then(console.log)
    .catch(console.log)
