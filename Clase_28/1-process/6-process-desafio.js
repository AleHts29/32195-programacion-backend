import minimist from "minimist";

// Evaluamos los errores a nivel de datos ingresados
process.on('exit', (code) => {
    let infoErr = {}
    console.log('exit code', code);

    switch (code) {
        case -5:
            infoErr = {
                descripcion: 'error de tipo de dato',
                numeros: numeros,
                tipos: tipos
            }
            break;
        case -4:
            infoErr = {
                descripcion: 'Entrada vacia'
            }
            break;
        case 0:
            console.log('Ejecucion finalizada!');
    }
    console.log(infoErr)
});

// Tratamos el error a nivel del programa (exepciones)
process.on('uncaughtException', (err) => {
    console.log('Error', err);
    process.exit(2)
});



// _01 Capturamos la entrada
const args = minimist(process.argv.slice(2));
const numeros = args._;


/* _02 Primera valdiacion: Los datos de entrada no deben estar vacios*/
if (numeros.length === 0) {
    console.log('Se dispara la validacion 1')
    process.exit(-4);
}
console.log('Datos recibidos', numeros);


// _03 Validaciones
console.log('numeros: ', numeros);
const tipos = tipo(numeros);
console.log('Tipos de los datos: ', tipos);

/* _04 Segunda valdiacion: Tipos de datos deben ser numeros */
validacionTipo(tipos);



// _05 si paso las validaciones, realizamos la suma de los numeros para poder sacar el promedio.
const suma = numeros.reduce((accumulator, currentValue) => accumulator + currentValue)



// Armamos el obj del resultado
const info = {
    datos: {
        numeros: numeros,
        promedio: suma / numeros.length,
        max: Math.max.apply(null, numeros),
        min: Math.min.apply(null, numeros),
        ejecutable: process.title,
        pid: process.pid
    }
}
console.log(info);



/* =================== [ Utilitarios ] ===================*/
function tipo(array) {
    let arrayTipes = [];

    array.forEach(element => {
        arrayTipes.push(typeof (element));
    });

    return arrayTipes;
}

function validacionTipo(array) {
    console.log('Se dispara la validacion 2')
    array.forEach(element => {
        if (element != 'number') {
            console.log(element, ': es un tipo de dato distinto a number')
            process.exit(-5)
        }
    });
}


