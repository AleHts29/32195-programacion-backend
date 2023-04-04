import express from 'express';
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const app = express();

const DB_PERSONAJES = [
    {
        id: "1",
        nombre: 'Rick Sanchez',
        categoria: {
            rango: 'S+',
            descripcion: 'Dictador',
            score: '+1000'
        }
    },
    {
        id: "2",
        nombre: 'Morthy',
        categoria: {
            rango: 'S+',
            descripcion: 'Conspirador',
            score: '+10'
        }
    },
    {
        id: "3",
        nombre: 'Hella C56',
        categoria: {
            rango: 'C+',
            descripcion: 'Amiga',
            score: '+0'
        }
    }
]


// confi Graphql
const schema = new buildSchema(
    `
    type Personaje {
        id: String,
        nombre: String,
        categoria: Categoria
    }

    type Categoria {
        rango: String,
        descripcion: String,
        score: String
    }

    type Query {
        consultaPersonajes: [Personaje]
        consultaPersonaje(id: String): Personaje
    }
    `
)

function consultaPersonajes(){
    return DB_PERSONAJES;
}

function consultaPersonaje({id }){
    return DB_PERSONAJES.find((personaje)=> personaje.id === id);
}


// Aqui tengo mi punto de entrada
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: {
        consultaPersonajes,
        consultaPersonaje
    },
    graphiql: false
}))




/*============================[Servidor]============================*/
const PORT = 3000;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor en puerto http://localhost:${PORT}`);
})
server.on('error', error=>{
    console.log(`Error en el servidor ${error}`);
});