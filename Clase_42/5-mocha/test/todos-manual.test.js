import Todos from '../src/Todos.class.js'

const todos = new Todos();
console.log(todos.list());//Tendria que retornar vacio, si

todos.add("run code")
console.log(todos.list())//funciono

todos.add("otra tarea")
console.log(todos.list())

todos.complete("run code")
console.log(todos.list())
