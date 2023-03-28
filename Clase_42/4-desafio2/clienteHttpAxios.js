import axios from 'axios';

let url = 'http://localhost:8080'

axios(url)
  .then(response => {
    // Obtenemos los datos
    let fyh = response.data
    console.log(fyh);
  })
  .catch(error => {
    console.log(error)
  })
