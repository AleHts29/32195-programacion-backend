import minimist from "minimist";

// console.table(process.argv.slice(2));
// console.table(minimist(process.argv.slice(2)));



// console.log(`/*============== [Simulando entradas por CLI] ==============*/`)
// console.log(minimist([1, 2, 3, 4, 'a', 'b', 'c']));
// // { _: [ 1, 2, 3, 4, 5, 6 ] }

// console.log(minimist([1, '2', '10.45.23', { a: 1, b: 2 }]));
// // { _: [ 1, 2, '10.45.23', { a: 1, b: 2 } ] }


// console.log(`/*--------- Asignando parametros ---------*/`)
// console.log(minimist(['-p', '8080', '--enviroment', 'dev', 'valor_suelto', 'otro-valor-sin-variable']));


// console.log(`\n/*--------- Asignando Parametros como banderas/indicadores ---------*/`)
// console.log(minimist(['-p', '8080', '--enviroment', 'dev', 'valor_suelto', '--bandera']));


// console.log(`/*============== [Utilizando options de minimist] ==============*/`)
console.log(`/* -- asignando valores default -- */`)
let options = { default: { nombre: 'juan', apellido: 'copado' } }
console.log(minimist(['valor-sin-param', '--bandera1', '-a', 1, '--nombre', 'Artyc'], options));

console.log(`\n/* -- asignando alias a los parametros -- */`)
options = { alias: { n: 'nombre', a: 'apellido' } }
console.log(minimist(['valor-sin-param', '--bandera1', '-a', 'Chinos', '--nombre', 'Bandadalos'], options));
