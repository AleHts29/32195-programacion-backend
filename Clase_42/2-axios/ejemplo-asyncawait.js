import axios from 'axios';
import { writeFile } from "fs";

const datos = await obtenerInfoSeleccion2(19);
// console.log(datos);
await escribirResumen('res_asyncawait.json', datos);


// const datos = await obtenerInfoSeleccion('19');
// await escribirResumen('res_asyncawait.json', datos);

// async function obtenerInfoSeleccion(num){
//     const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${num}`, {});
//     return res.data;
// }

async function obtenerInfoSeleccion2(num){
    const res = await axios.get(`/api/character/?page=${num}`, {
        baseURL: `https://rickandmortyapi.com`,
        headers: {
            'Content-Type':'application/json'
        }
    });
    return res.data;
}

async function escribirResumen(archivo, datos){
    writeFile(archivo, JSON.stringify(datos, null, '\t'), error => {
        if (error) throw new Error(`Error de escritura de archivo ${archivo}`)
        console.log(`Escritura ok de archivo ${archivo}`)
    })
}