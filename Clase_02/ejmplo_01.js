function sumar() {
  const num1 = 5;
  const num2 = 7;

  const result = num1 + num2;

  for (let i = 0; i <= 15; i++) {
    console.log(i)

    const auxComp = 12;
    if (i === auxComp) {
      console.log(`i es igual a ${auxComp}`)
    }
  }

  console.log("result: ", result)
}

sumar()




// Funciones estandar con pase de parametros
function multiplicar(num1, num2) {
  return num1 * num2;
}

console.log(multiplicar(2, 4))

// Funciones anonimas - consumen recursos solo cuando son ejecutadas
const resultMultiplicar = function(num1, num2) {
  return num1 * num2;
}

console.log(resultMultiplicar(5, 4))

//Funciones Auto-invocadas
const array = [2, 3, 4, 5, 6]
const sumaArray = (function(array) {
  let acumulador = 0
  for (let i = 0; i < array.length; i++) {
    acumulador += array[i]
  }
  return acumulador;
})(array)

console.log(sumaArray)




// SCOPE - Alcance de una variable
const variable1 = "Hola soy Ale" // Alcance --> GLOBAL

function imprimirValor() {
  console.log(variable1)

  const variable2 = "vivo solo dentro de la funcion"
  console.log(variable2)
}
imprimirValor()
console.log(variable1)
// console.log(variable2)




// Clousure - se usaba antes del ES6 para acceder a variables locales
const miContador = (function() {
  let _contador = 0;

  //definimos metodos
  function incrementar() {
    return _contador++;
  }
  function decrementar() {
    return _contador--;
  }
  function valor() {
    return _contador;
  }

  // retorno de metodos
  return {
    incrementar,
    decrementar,
    valor
  }
})()

console.log(miContador.valor())
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
console.log(miContador.valor())




// Template strings












