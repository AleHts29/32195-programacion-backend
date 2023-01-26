import minimist from "minimist";

/*
    1 - node desafio.js 1 2 3 -m dev -p 8080 -d
    { modo: 'dev', puerto: 8080, debug: true, otros: [ 1, 2, 3 ] }
*/

let options = { alias: { m: 'modo', p: 'puerto', d: 'debug' } }
let args = minimist(process.argv.slice(2), options)
// console.log(args);
console.log(
    {
        modo: args.modo,
        puerto: args.p,
        debug: args.d,
        otros: args._
    }
);


// 2da parte
/*
    2 - node desafio.js 1 2 3 
    { modo: 'prod', puerto: 0, debug: false, otros: [ 1, 2, 3 ] }
*/
let options2 = { alias: { modo: 'm', p: 'puerto', d: 'debug' }, default: { p: 0, m: 'prod', debug: false } };
console.log(minimist(process.argv.slice(2), options2));