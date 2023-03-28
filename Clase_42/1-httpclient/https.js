import { request } from 'https'
import { writeFile } from 'fs'

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/posts',
  method: 'GET'
}

const req = request(options, res => {
  let response = ''

  res.on('data', d => {
    //process.stdout.write(d)
    response += d
  })

  res.on('end', () => {
    let posts = JSON.parse(response)
    //console.log(posts);
    let archivo = 'postsHttps.json'
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