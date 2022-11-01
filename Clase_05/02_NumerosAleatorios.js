// Crear funcion que me genere numeros aleatorios

const obj = {}

for (let i = 0; i < 10000; i++) {
    let randomNumber = Math.ceil(Math.random() * 20);

    // if (obj[randomNumber]) {
    //     obj[randomNumber]++;
    // }
    // else {
    //     obj[randomNumber] = 1
    // }

    // operador ternario
    // condicion ? true : false
    obj[randomNumber] ? obj[randomNumber]++ : obj[randomNumber] = 1


}

obj['juan'] = 2


console.log(obj);