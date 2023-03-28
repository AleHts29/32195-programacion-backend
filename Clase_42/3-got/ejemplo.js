import got from 'got';
import { writeFile } from "fs";

const datos = await obtenerInfoSeleccion('1');
await escribirResumen('res_asyncawait2.json', datos);

async function obtenerInfoSeleccion(num){
    const res = await got( 
    {
        url: `https://jsonplaceholder.typicode.com/todos/${num}`,
        responseType: 'json'
    }
    );

    return res.body;
}

async function escribirResumen(archivo, datos){
    writeFile(archivo, JSON.stringify(datos, null, '\t'), error => {
        if (error) throw new Error(`Error de escritura de archivo ${archivo}`)
        console.log(`Escritura ok de archivo ${archivo}`)
    })
}