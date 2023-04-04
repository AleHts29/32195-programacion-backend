import { buildSchema } from 'graphql';

const NoticiaSchema = buildSchema(`
  type Noticia {
    id: ID!
    titulo: String,
    cuerpo: String,
    autor: String,
    imagen: String,
    email: String,
    vista: String,
  }
  type Query {
    obtenerNoticias: [Noticia],
  }
`);

export default NoticiaSchema;