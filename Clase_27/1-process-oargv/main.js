// console.log(process.argv);
console.log(process.argv.slice(2));

//Imprimir un array
for (let index = 0; index < process.argv.length; index++) {
    const element = `index[${index}]: ${process.argv[index]}`;
    console.log(element);
}

//Imprime los valores modo chad ( ͡° ͜ʖ ͡°)👌
console.table(process.argv.slice(2));

