import { request } from "http";
import { writeFile } from "fs";

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/posts',
    method: 'GET'
}

const req = request(options, res => {
    let response = ''
  
    res.on('data', d => {
      response += d;
      console.log(`data itera ${d} \n`);
    })
  
    res.on('end', () => {
      const posts = JSON.parse(response)
      //console.log(posts);
      const archivo = 'postsHttp.json'
      writeFile(archivo, JSON.stringify(posts, null, '\t'), error => {
        if (error) throw new Error(`Error de escritura de archivo ${archivo}`)
        console.log(`Escritura ok de archivo ${archivo}`)
      })
    });
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()