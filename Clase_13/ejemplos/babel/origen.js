// codigo en ES6
// const lista = [2, 3, 4, 5]
// lista.map(x => x * x).forEach(x => console.log(x))


// definimos una clase
// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad
//     }

//     getNombre() {
//         return this.nombre
//     }

//     getEdad() {
//         return this.edad
//     }
// }

// const juan = new Persona('Juan', 34)
// console.log(juan.getNombre());


// Ejercicio RGB
// const getNum_0_to_255 = () 

const randomNumber = (max) => {
    return Math.floor(Math.random() * max)
}


class Color {
    constructor(r, g, b) {
        this.r = r,
            this.g = g,
            this.b = b
    }

    mostrarColor() {
        console.log(`El color es R: ${this.r}, G:${this.g}, B:${this.b}`)
    }
}

let color1 = new Color(randomNumber(255), randomNumber(255), randomNumber(255))
console.log(color1.mostrarColor())