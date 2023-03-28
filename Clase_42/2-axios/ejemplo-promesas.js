import axios from 'axios';
import { writeFile } from "fs";

axios({
    url: 'https://rickandmortyapi.com/api/character',
    method: 'GET'
})
  .then(response => {
    // Obtenemos los datos
    let docs = response.data

    const archivo = 'res_promesa.json'
    writeFile(archivo, JSON.stringify(docs, null, '\t'), error => {
        if (error) throw new Error(`Error de escritura de archivo ${archivo}`)
        console.log(`Escritura ok de archivo ${archivo}`)
    })

    console.log(docs);
  })
  .catch(error => {
    console.log(error)
  })
  .then(()=>{
    console.log(`Procedimiento finalizado (simula finally)`)
  });
