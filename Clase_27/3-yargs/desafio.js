import yargs from "yargs";

/*
    1 - node desafio.js 1 2 3 -m dev -p 8080 -d
    { modo: 'dev', puerto: 8080, debug: true, otros: [ 1, 2, 3 ] }
*/
let args1 = yargs(process.argv.slice(2))
    .alias({ m: 'modo', p: 'puerto', d: 'debug' })
    .argv;
// console.log(args1);

//2- llamado -> node desafio.js 1 2 3
let args2 = yargs(process.argv.slice(2))
    .alias({ m: 'modo', p: 'puerto', d: 'debug' })
    .default({ m: 'prod', puerto: 0, debug: false })
    .argv;
console.log(args2);