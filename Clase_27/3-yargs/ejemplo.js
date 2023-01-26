import yargs from "yargs";
import util from 'util'

// console.table(process.argv.slice(2));
// console.table(yargs(process.argv.slice(2)).argv);

function print(obj) {
    console.log(util.inspect(obj, { showHidden: false, depth: 12, colors: true }))
}


// console.log(`\n/*============== [Simulando entradas por CLI] ==============*/`)
// console.log(yargs([1, 2, 3, 4, 5, 6]).argv);


// console.log(`\n/* --- Asignando parametros --- */`)
// // console.log(yargs([1, '2', '10.45.23', '-a', { a: 1, b: 2 }]).argv);

// print(yargs([1, '2', '10.45.23', '-a', JSON.stringify({ a: 1, b: 2 })]).argv);





// console.log(`\n/* --- Asignando Parametros como banderas/indicadores --- */`)
// console.log(yargs(['--bandera1', '--a1', 1, 'valor-suelto', '--bandera2']).argv)


// console.log(`\n/* --- asignando valores default --- */`)
// let args3 = yargs(['valor-sin-param', '--bandera1', '-a', 1, '--nombre', 'Bandadalos'])
//     .default({
//         nombre: 'Bandalos',
//         apellido: 'Chinos'
//     })
//     .argv
// console.log(args3);


console.log(`\n/* --- asignando alias a los parametros --- */`)
let args4 = yargs(['valor-sin-param', '--bandera1', '-a', 'Chinos', '--nombre', 'Bandadalos'])
    .alias({ a: 'apellido', n: 'nombre' })
    .argv
console.log(args4);