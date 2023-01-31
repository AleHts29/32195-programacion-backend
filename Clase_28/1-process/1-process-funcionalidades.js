import util from 'util';

console.log(`Directorio actual de trabajo: ${process.cwd()}`);
console.log(`Id del proceso: ${process.pid}`);
console.log(`Version de NodeJS: ${process.version}`);
console.log(`Nombre del proceso: ${process.title}`);
console.log(`Sistema Operativo: ${process.platform}`);
print(`Uso de la memoria: \n`);
print(process.memoryUsage());

function print(obj) {
    console.log(util.inspect(obj, { showHidden: false, depth: 12, colors: true }));
}