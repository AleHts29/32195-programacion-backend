import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import crypto from 'crypto';



// Definimos el schema
const schema = buildSchema(
    `
    input PersonaInput {
        nombre: String,
        edad: Int
      }

    type Persona {
        id: ID!
        nombre: String,
        edad: Int
    }

    type Query {
        getPersona(id: ID!): Persona,
        getPersonas(campo: String, valor: String): [Persona],
    }

    type Mutation {
        createPersona(datos: PersonaInput): Persona
        updatePersona(id: ID!, datos: PersonaInput): Persona,
        deletePersona(id: ID!): Persona,
    }
    `
)


// Mi clase Persona
class Persona {
    constructor(id, { nombre, edad }) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
}


const personasMap = {};

function getPersonas({ campo, valor }) {
    const personas = Object.values(personasMap)
    if (campo && valor) {
        return personas.filter(p => p[ campo ] == valor);
    } else {
        return personas;
    }
}

function getPersona({ id }) {
    if (!personasMap[ id ]) {
        throw new Error('Persona not found.');
    }
    return personasMap[ id ];
}

function createPersona({ datos }) {
    const id = crypto.randomBytes(10).toString('hex');
    const nuevaPersona = new Persona(id, datos)
    personasMap[ id ] = nuevaPersona;
    return nuevaPersona;
}

function updatePersona({ id, datos }) {
    if (!personasMap[ id ]) {
        throw new Error('Persona not found');
    }
    const personaActualizada = new Persona(id, datos)
    personasMap[ id ] = personaActualizada;
    return personaActualizada;
}

function deletePersona({ id }) {
    if (!personasMap[ id ]) {
        throw new Error('Persona not found');
    }
    const personaBorrada = personasMap[ id ]
    delete personasMap[ id ];
    return personaBorrada;
}


const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: {
        getPersonas,
        getPersona,
        createPersona,
        updatePersona,
        deletePersona
    },
    graphiql: true
}) )


// SERVER PORT
const PORT = 8383
app.listen(PORT, () => {
    const msg = `Servidor corriendo en puerto: http://localhost:${PORT}`;
    console.log(msg)
});



/*
    query {
        getPersona(id: "efb60083012a9f8de12f") {
            nombre
            edad
        }
    }

    query {
        getPersonas {
            nombre
            edad
        }
    }

    mutation {
        createPersona(datos: {
            nombre: "marian",
            edad: 35
        }) {
            id  
        }
    }


*/