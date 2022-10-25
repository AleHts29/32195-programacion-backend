function myFunc(arg) {
    console.log(`arg was --> ${arg}`);
}

console.log('prueba antes');

setTimeout(myFunc, 1500, 'Funky')

console.log('prueba despues');