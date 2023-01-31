import { fork } from 'child_process';

const forkedProcess = fork('./proceso-secundario.js');

// escuchamos al Proceso secundario
forkedProcess.on('message', msg => {
    console.log('mensaje desde el procesos secundario:');
    console.log(msg);
});

// Iniciamos el proceso principal
console.log(`Comienzan a ejecutar el proceso principal`);
setTimeout(() => {
    console.log('Se ejecuta la primera (1) funcion')
}, 500);


setTimeout(() => {
    console.log('Se ejecuta la segunda (2) funcion y se invoca al proceso Secundario')
    forkedProcess.send('Hola!');
}, 1000);


setTimeout(() => {
    console.log('Se ejecuta la tercera (3) funcion')
}, 1500);
setTimeout(() => {
    console.log('Se ejecuta la cuarta (4) funcion')
}, 2500);
