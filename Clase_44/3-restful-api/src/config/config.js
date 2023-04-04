import path from 'path';
import dotenv from 'dotenv';
dotenv.config(
    {
        path: path.resolve(process.cwd(), `${process.env.NODE_ENV}.env`)
    }
);

export const config = {
    server: {
        PORT: process.env.PORT || 3000,
        NODE_ENV: process.env.NODE_ENV || 'development',
        PERS: process.env.PERS || 'MEMORY'
    },
    fileSystem: {
        path: path.resolve(process.cwd(), `DB`)
    },
    mongodb: {
        host: process.env.MONGO_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }
    }
}