setTimeout(() => {
    console.log('Encontre la solucion, voy a finalizar los demas (despues de 3)')
}, 3000)

setTimeout(() => {
    console.log('Minar crypto moneda 1')
}, 500)

setTimeout(() => {
    console.log('Minar crypto moneda 2')
}, 1500)

setTimeout(() => {
    console.log('Minar crypto moneda 3')
}, 2500)

process.on('beforeExit', (code) => {
    console.log('Se imprime antes de terminar, sin levantar exit')
});

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

process.on('uncaughtException', (err) => {
    console.log('Error', err)
    process.exit(2)
});