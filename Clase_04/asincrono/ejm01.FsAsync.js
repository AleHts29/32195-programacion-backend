const fs = require('fs')

// fs.readFile(nombrearchjivo, codigo, cb(error, data))
// fs.readFile('./test.txt', 'utf-8', (error, contenido) => {

//     if (error) {
//         throw new Error('Error de lectrua!!')
//     }

//     console.log('Lectura ok!!');
//     console.log(contenido);
// })


// usando mkdir
// fs.mkdir('./prueba', error => {

//     if (error) {
//         throw new Error('Error al crear directorio!!')
//     }

//     console.log('directorio creado!');
// })

// lectura de un directorio
fs.readdir('./', (error, contenido) => {
    if (error) {
        throw new Error('Error al leer el directorio!')
    }

    console.log(contenido);
})