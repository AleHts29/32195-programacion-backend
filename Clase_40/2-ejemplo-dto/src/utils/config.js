import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env);

const config  = {
    db: {
        connstr: `mongodb://${process.env.HOSTDB || 'localhost'}:${process.env.PORTDB || 27017}/ecommerce`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }
    },
    srv: {
        port: process.env.PORT,
        logger: process.env.LOG || 'DEV'
    }
}

export default config;