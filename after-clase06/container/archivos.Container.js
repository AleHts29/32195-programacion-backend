class Archivo {

    constructor(nombre) {
        this.fs = require('fs')
        this.nombre = nombre;
        this.productos = []
    }

    getNextId() {
        return this.productos.length + 1
    }

    async guardar(prod) {
        this.productos = await this.leer()

        prod.id = this.getNextId()
        this.productos.push(prod)

        try {
            await this.fs.promises.writeFile(this.nombre, JSON.stringify(this.productos,null,'\t'))
            console.log('Producto guardado')
        }
        catch(error) {
            console.log(`Error en guardar: ${error}`)            
        }
    }

    async leer() {
        try {
            let prods = await this.fs.promises.readFile(this.nombre, 'utf-8')
            return JSON.parse(prods)
        }
        catch(error) {
            return []
        }
    }

    async borrar() {
        try {
            await this.fs.promises.unlink(this.nombre)
            console.log('Productos borrados')
        }
        catch(error) {
            console.log(`Error en borrar: ${error}`)            
        }
    }
}

module.exports = Archivo

// const archivo = new Archivo('productos.txt')

// async function go() {
//     console.log(await archivo.leer())

//     await archivo.guardar({ title:'Escuadra', price:123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'})
//     console.log(await archivo.leer())

//     await archivo.guardar({ title:'Calculadora', price:234.56, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'})
//     console.log(await archivo.leer())

//     await archivo.guardar({ title:'Globo Terráqueo', price:345.67, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'})
//     console.log(await archivo.leer())

//     /*
//     await archivo.guardar({ title:'Paleta Pintura', price:456.78, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/paint-color-pallete-brush-academy-256.png'})
//     console.log(await archivo.leer())

//     await archivo.guardar({ title:'Reloj', price:567.89, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/clock-stopwatch-timer-time-256.png'})
//     console.log(await archivo.leer())

//     await archivo.guardar({ title:'Agenda', price:678.90, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-256.png'})
//     console.log(await archivo.leer())
//     */
   
//     //await archivo.borrar()
//     //console.log(await archivo.leer())
// }

// go()

