const { normalize, schema, denormalize } = require('normalizr')


const originalData = {
    IdPosts: "999",
    posts: [
        {
            id: "123",
            author: {
                id: "1",
                nombre: "Pablo",
                apellido: "Perez",
                DNI: "20442654",
                direccion: "CABA 123",
                telefono: "1567876547"
            },
            title: "My awesome blog post",
            comments: [
                {
                    id: "324",
                    commenter: {
                        id: "2",
                        nombre: "Nicole",
                        apellido: "Gonzalez",
                        DNI: "20442638",
                        direccion: "CABA 456",
                        telefono: "1567811543"
                    }
                },
                {
                    id: "325",
                    commenter: {
                        id: "3",
                        nombre: "Pedro",
                        apellido: "Mei",
                        DNI: "20446938",
                        direccion: "CABA 789",
                        telefono: "1567291542"
                    }
                }]
        },
        {
            id: "1123",
            author: {
                id: "2",
                nombre: "Nicole",
                apellido: "Gonzalez",
                DNI: "20442638",
                direccion: "CABA 456",
                telefono: "1567811543"
            },
            title: "My awesome blog post",
            comments: [
                {
                    id: "1324",
                    commenter: {
                        id: "1",
                        nombre: "Pablo",
                        apellido: "Perez",
                        DNI: "20442654",
                        direccion: "CABA 123",
                        telefono: "1567876547"
                    }
                },
                {
                    id: "1325",
                    commenter: {
                        id: "3",
                        nombre: "Pedro",
                        apellido: "Mei",
                        DNI: "20446938",
                        direccion: "CABA 789",
                        telefono: "1567291542"
                    }
                }]
        },
        {
            id: "2123",
            author: {
                id: "3",
                nombre: "Pedro",
                apellido: "Mei",
                DNI: "20446938",
                direccion: "CABA 789",
                telefono: "1567291542"
            },
            title: "My awesome blog post",
            comments: [
                {
                    id: "2324",
                    commenter: {
                        id: "2",
                        nombre: "Nicole",
                        apellido: "Gonzalez",
                        DNI: "20442638",
                        direccion: "CABA 456",
                        telefono: "1567811543"
                    }
                },
                {
                    id: "2325",
                    commenter: {
                        id: "1",
                        nombre: "Pablo",
                        apellido: "Perez",
                        DNI: "20442654",
                        direccion: "CABA 123",
                        telefono: "1567876547"
                    }
                }]
        }
    ]
}

// Definimos un esquema de usuarios (Autores y Comentaristas)
const user = new schema.Entity('users');

// Definir un esquema de commenters
const comment = new schema.Entity('comments', {
    commenter: user
})

// Definimos un esquema para articulos
const article = new schema.Entity('articles', {
    author: user,
    comments: [comment]
})

// Definimos un esquema de posts (arreglo de artiuculos)
const posts = new schema.Entity('posts', {
    posts: [article]
}, { idAttribute: 'IdPosts' })

const util = require('util');
function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true));
}

const normalizeData = normalize(originalData, posts);
print(normalizeData)

console.log('Longitud objeto original: ', JSON.stringify(originalData).length);
console.log('Longitud objeto normalizado: ', JSON.stringify(normalizeData).length);


// Des normalizacion
const denormalizeData = denormalize(normalizeData.result, posts, normalizeData.entities);
print(denormalizeData)




liquidaciones @coderhouse.com
https://view.genial.ly/636be0469534e2001114e48b

// Manual coder ask
https://view.genial.ly/636be0469534e2001114e48b