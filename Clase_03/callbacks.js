const ejecutar = unaFuncion => unaFuncion();
const saludar = () => console.log('Hola soy un callback');

// ejecutar(saludar);

// Eje_02
const ejecutar2 = (unaFuncion, params) => unaFuncion(params);
const saludar2 = nombre => console.log(`Hola ${nombre}`);

ejecutar2(saludar2, 'Ale');


/*
--> Ejemplo Practico - Procesamiento de un archivo(CSV) con miles de registros, queremos saber el tiempo que tarda en hacer todo este procesamiento para luego mejorarlo
*/

function procesarDatayLogear(text, callbackParaLogear) {
    // Simulacion de escribir un archivo
    console.log(text);

    // Cuando finalice, ejecutamos el callback
    callbackParaLogear('Archivo procesado con exito!')
}


const callbackParaLogear = (mensaje) => {
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha}: ${mensaje}`);
}

procesarDatayLogear('Hola estoy usando callbacks', callbackParaLogear)
