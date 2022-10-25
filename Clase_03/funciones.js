const mostrar = function (params) {
    console.log(params);
}
mostrar('Hola')

// Funciones flecha
const mostrarFlecha = (params1, params2) => {
    console.log(`${params1} - ${params2}`);
}

mostrarFlecha('Estamos en la ', 'clase_03')

// Funciones que reciben un solo parametro
const mostrarFlecha2 = params1 => {
    console.log(`${params1}`);
}
mostrarFlecha2(90)

// Funciones en una sola linea con return implicito
const funcUnaLinea = (a, b) => (a * b)
console.log(funcUnaLinea(3, 2));