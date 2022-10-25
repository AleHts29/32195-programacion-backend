function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {

        if (divisor === 0) {
            reject('No se puede dividir por cero')
        }
        resolve(dividendo / divisor)
    })
}

dividir(10, 2)
    .then(resultado => {
        console.log(`resultado ${resultado}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    })
    .finally(() => {
        const fecha = new Date().toLocaleDateString();
        console.log(`${fecha}`);
    })


// Simulacion del error
// dividir(10, 0)
//     .then(resultado => {
//         console.log(`resultado ${resultado}`);
//     })
//     .catch(error => {
//         console.log(`Error: ${error}`);
//     })
//     .finally(() => {
//         const fecha = new Date().toLocaleDateString();
//         console.log(`${fecha}`);
//     })