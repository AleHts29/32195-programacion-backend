
// Array de objetos literal
const personas = [
    {
        nombre: 'Dario',
        edad: 29
    },
    {
        nombre: 'Facu',
        edad: 20
    },
    {
        nombre: 'Juan',
        edad: 33
    },
]


const nombrePersonas = personas.map(persona => {
    return persona.nombre
})

console.log(nombrePersonas);