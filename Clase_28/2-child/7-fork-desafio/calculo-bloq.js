export function sumar() {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;
    }
    return suma;
}

process.on('message', msg => {
    console.log('mensaje desde el procesos principal:\n');
    console.log(msg);

    const suma = sumar()
    process.send(`resultado de suma en segundo plano ${suma}`)
});