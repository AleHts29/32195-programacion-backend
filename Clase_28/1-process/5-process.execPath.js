// Interactuar mediante la consola

process.stdout.write('Escribe en consola\n');
process.stdin.resume();

console.log('Ingresa la cadena: ')
process.stdin.on('data', (data) => {
    process.stdout.write(`Valor ingresado: ${data}`);
    if (data == 0) {
        process.exit();
    }
})

// console.log('proceso ejecuta', process.execPath);