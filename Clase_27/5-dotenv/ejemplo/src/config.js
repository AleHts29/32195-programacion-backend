import dotenv from 'dotenv';
dotenv.config();

export const config = {
    server: {
        NODE_ENV: process.env.NODE_ENV || 'DEV',
        HOST: process.env.NODE_HOST || '127.0.0.1',
        PORT: process.env.NODE_PORT || 3000
    },
    db: {
        mysql: {
            HOST: process.env.DB_MYSQL_HOST,
            PORT: process.env.DB_MYSQL_PORT
        },
        mongodb: {
            HOST: process.env.DB_MONGO_HOST || 'localhost',
            PORT: process.env.DB_MONGO_PORT || 27017
        },
        
    }
}