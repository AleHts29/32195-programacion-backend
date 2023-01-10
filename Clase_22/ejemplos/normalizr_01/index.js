const normalizr = require('normalizr')
const normalize = normalizr.normalize;

const schema = normalizr.schema;



const blogpost = {
    id: "1",
    title: "My blog post",
    description: "Short blogpost description",
    content: "Hello world",
    author: {
        id: "1",
        name: "John Doe",
    },
    comments: [
        {
            id: "1",
            author: "Rob",
            content: "Nice post!"
        },
        {
            id: "2",
            author: "Jane",
            content: "I totally agree with you!"
        }
    ]
}


// Definimos un esquema de usuarios (autores y comentaristas)
const authorSchema = new schema.Entity('authors');

// Definimos esquema para los comentarios
const commentSchema = new schema.Entity('comments');

// Definimos un esquema de posts
const postSchema = new schema.Entity('posts', {
    author: authorSchema,
    comments: [commentSchema]
});

const util = require('util');
function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true));
}

const normalizedData = normalize(blogpost, postSchema);



// console.log(JSON.stringify(normalizedData));
print(normalizedData);
console.log(blogpost);



