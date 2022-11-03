const fs = require('fs')

// Ejecucion sincronica

//Lectura
const data = fs.readFileSync('./test.txt', 'UTF-8')
// console.log(data);

// escritura, si el archivo no existe lo crea
fs.writeFileSync('./test2.txt', 'Esto es una prueba de escritura')


// eliminacion
fs.unlinkSync('./test2.txt')


// usando exepciones
try {
    // lectura
    const data3 = fs.readFileSync('./test2.txt', 'utf-8')
    console.log(data3);
} catch (error) {
    console.log('Error al leer el archivo!!');
}