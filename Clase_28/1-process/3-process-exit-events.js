setTimeout(() => {
    console.log('Encontre la solucion, voy a finalizar los demas (despues de 3)')
    process.exit(1);
}, 3000)


setTimeout(() => {
    console.log('Minar crypto moneda 1')
}, 100)

setTimeout(() => {
    console.log('Minar crypto moneda 2')
}, 1000)

setTimeout(() => {
    console.log('Minar crypto moneda 3')
    throw 'Problemas al encontrar el hash!!'
}, 1500)

setTimeout(() => {
    console.log('Minar crypto moneda 4')
}, 2500)


process.on('uncaughtException', (err) => {
    console.log('Error', err);
    process.exit(2)
})


// Podemos manejar logs para saber porque se genero el error y capturar esa informacion antes de que finalice el programa
process.on('exit', (code) => {
    switch (code) {
        case 1:
            console.log(code, 'Se prepara un log para hash encontrado')
            break;
        case 2:
            console.log(code, 'Se prepara un log para reportar error')
            break;
        default:
            break;
    }
});

