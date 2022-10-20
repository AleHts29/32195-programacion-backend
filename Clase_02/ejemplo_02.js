function mostrarLista(lista) {
  if (lista.length === 0) {
    return console.log('Lista vacia')
  }
  return console.log(lista)
}

mostrarLista([1, 2, 3])
mostrarLista([])

  // _02
  (function mostrarLista2(lista) {
    if (lista.length === 0) {
      return console.log('Lista vacia')
    }
    return console.log(lista)
  })([1, 2, 3])

// _03
function crearMultiplicador(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

/*
const test = duplicar;
console.log(test)

console.log(function(num2){
return 8 * num2;
})

*/

console.log(duplicar(8))
console.log(triplicar(8))