// Copia por valor
let A = "Hola";
let B = A;
console.log("Valor de A:", A)
console.log("Valor de B:", B)

B = 23

console.log("Valor de A:", A)
console.log("Valor de B:", B)


// Copia por referencia
let obj1 = {
  name: "Alex",
  age: 23
}
console.log("Valor de obj1:", obj1)

// hacemos un clon usando spread operator
// let obj2 = {...obj1}
let obj2 = obj1
console.log("Valor de obj2:", obj2)


obj2.name = "Juan"
obj2.country = "Arg"
console.log("Valor de obj2:", obj2)

//Se modifica el obj1, ya que es unas copia por referencia!!
console.log("Valor de obj1:", obj1)



// el uso de VAR
/*
let   --> mutables
const --> inmutables
*/


//scope de las variables
let i = 10;

const testScope = function() {
  let i = 0;
  console.log(i);

  if (true) {
    const variable = 12;
    console.log(variable)
  }
  // console.log(variable)
}

testScope()
console.log(i)
