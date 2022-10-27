const fs = require('fs')

// async function readFile() {
//     try {
//         const contenido = await fs.promises.readFile('./test.txt', 'utf-8')
//         console.log(contenido);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFile()



// Lectrura archivo .json

fs.readFile('package.json', 'utf-8', (error, contenido) => {
    if (error) {
        throw new Error('Error al leer!')
    }

    console.log(contenido);

    const info = {
        contenidoStr: contenido,
        contenidoObj: JSON.parse(contenido),
        size: contenido.length
    }

    console.log(info);


    // hacemos un guardado a un .txt
    fs.writeFile('newInfo.txt', JSON.stringify(info, null, 2), error => {
        if (error) {
            throw new Error('Error en escritura!!')
        }

        console.log('escritura ok!!');
    })
})